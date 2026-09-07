import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    table[n] = c;
  }
  return table;
}

const crcTable = createCRC32Table();

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const toCrc = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(toCrc), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function generatePNG(width, height, isMaskable = false) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type: RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  const rawScanlines = Buffer.alloc(height * (1 + width * 4));
  const cx = width / 2;
  const cy = height / 2;
  const radius = isMaskable ? width * 0.48 : width * 0.44;

  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawScanlines[offset++] = 0; // Filter: none
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Background color: #0A8F6A (Emerald green)
      let r = 10;
      let g = 143;
      let b = 106;
      let a = 255;

      if (!isMaskable && dist > radius) {
        // Transparent outside rounded icon
        a = 0;
        r = 0;
        g = 0;
        b = 0;
      } else {
        // Inner medical cross (+ symbol) in crisp white
        const crossW = width * 0.16;
        const crossL = width * 0.52;
        const inHBar = Math.abs(dy) <= crossW / 2 && Math.abs(dx) <= crossL / 2;
        const inVBar = Math.abs(dx) <= crossW / 2 && Math.abs(dy) <= crossL / 2;

        if (inHBar || inVBar) {
          r = 255;
          g = 255;
          b = 255;
          a = 255;
        } else {
          // Subtle blue gradient accent at bottom
          const grad = y / height;
          r = Math.floor(10 + grad * 15);
          g = Math.floor(143 - grad * 20);
          b = Math.floor(106 + grad * 40);
        }
      }

      rawScanlines[offset++] = r;
      rawScanlines[offset++] = g;
      rawScanlines[offset++] = b;
      rawScanlines[offset++] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawScanlines);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const iconsDir = path.resolve('public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), generatePNG(192, 192, false));
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), generatePNG(512, 512, false));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-192.png'), generatePNG(192, 192, true));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-512.png'), generatePNG(512, 512, true));
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), generatePNG(180, 180, false));
fs.writeFileSync(path.resolve('public/apple-touch-icon.png'), generatePNG(180, 180, false));

console.log('Successfully generated all PWA icons!');
