const sharp = require('sharp');
const { rgb } = require('color');
const generator = require('generate-password');
const fs = require('fs');
const random = (min, max) => {
  return Math.floor(Math.random() * (min + max - 1) + 1);
};

const pCreator = (number) => {
  let str = '';
  for (let i = 0; i < number; i++) {
    str += ` <path d="M${random(1, 50)} ${random(0, 50)}C${random(
      10,
      150
    )} ${random(10, 90)},${random(150, 90)} ${random(10, 99)},${random(
      150,
      190
    )} 9
  " class="p1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
      0,
      256
    )})" ></path>`;
  }
  return str;
};

const lCreator = (number) => {
  let str = '';
  for (let i = 0; i < number; i++) {
    str += `<line  stroke-width="${random(1, 5)}" y1="${random(
      10,
      30
    )}" y2="${random(20, 80)}" x1="${random(10, 100)}" x2="${random(
      30,
      200
    )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
      0,
      256
    )})"></line>`;
  }
  return str;
};
const tCreator = (text) => {
  let str = '';
  let x = 45;
  for (let i = 0; i < text.length; i++) {
    str += `<text id="text${i + 1}" x="${x}" 

    transform="rotate(${random(0, 12)} ${random(0, 15)} ${random(0, 20)})"
      y="55">${text[i]}</text>`;
    x = x + 20;
  }
  return str;
};

module.exports = async ({
  numbers,
  lowercase,
  uppercase,
  symbols,
  difficulty,
  path,
}) => {
  return new Promise(async (res, rej) => {
    try {
      fs.mkdir(path, (err) => {
        if (err.code != 'EEXIST') {
          console.log(err);
        }
      });
      const rgbs = rgb(random(0, 255), random(0, 255), random(0, 255));
      const text = generator.generate({
        length: 6,
        numbers,
        lowercase,
        uppercase,
        symbols,
      });
      const file = `${generator.generate({
        length: 16,
        numbers: false,
        lowercase: true,
        uppercase: true,
        symbols: false,
      })}.png`;
      const width = 200;
      const height = 100;
      const svgImage = `
<svg width="200" height="100" viewBox="10 10 0 0">
<style>
#text1 {
font-size: 40px;
fill : ${rgbs};
stroke:rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)});
stroke-width:${random(1, 3)}
}
#text2 {
font-size: 40px;
fill : ${rgbs};
stroke:rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)});
stroke-width:${random(1, 3)}
}
#text3 {
font-size: 40px;
fill : ${rgbs};
stroke:rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)});
stroke-width:${random(1, 3)}
}
#text4 {
font-size: 40px;
fill : ${rgbs};
stroke:rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)});
stroke-width:${random(1, 3)}
}length
length
length
#text5 {
font-size: 40px;
fill : ${rgbs};
stroke:rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)});
stroke-width:${random(1, 3)}
}
#text5 {
font-size: 40px;
fill : ${rgbs};
stroke:rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)});
stroke-width:${random(1, 3)}
}
#text6 {
  font-size: 40px;
  fill : ${rgbs};
  stroke:rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)});
  stroke-width:${random(1, 3)}
  }
.p1 {
stroke-width: 5px;
fill:none;

}

</style>
${pCreator(difficulty / 5 < 1 ? 2 : difficulty / 5)}
${lCreator(difficulty * 5)}
${tCreator(text)}
</svg>
    `;
      const svgBuffer = Buffer.from(svgImage);
      const image = await sharp({
        create: {
          width,
          height,
          channels: 4,
          background: rgbs,
        },
      })
        .composite([
          {
            input: svgBuffer,
            top: 0,
            left: 0,
          },
        ])
        .toFile(path + '/' + file)
        .then(() => {
          res({
            file_name: file,
            captcha: text,
          });
        });
    } catch (error) {
      rej(error);
    }
  });
};
