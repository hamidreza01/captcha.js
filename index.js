const sharp = require('sharp');
const { rgb } = require('color');
const generator = require('generate-password');

module.exports = async ({ numbers, lowercase, uppercase, symbols }) => {
  return new Promise(async (res, rej) => {
    try {
      const random = (min, max) => {
        return Math.floor(Math.random() * (min + max - 1) + 1);
      };
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
        numbers,
        lowercase,
        uppercase,
        symbols,
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
  <path d="M${random(1, 50)} ${random(0, 50)}C${random(10, 150)} ${random(
        10,
        90
      )},${random(150, 90)} ${random(10, 99)},${random(150, 190)} 9
    " class="p1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})" ></path>
    <path d="M${random(1, 50)} ${random(0, 50)}C${random(10, 150)} ${random(
        10,
        90
      )},${random(150, 90)} ${random(10, 99)},${random(150, 190)} 9
      " class="p1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})" ></path>
    <line  stroke-width="${random(1, 5)}" y1="${random(10, 30)}" y2="${random(
        20,
        80
      )}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line><line  stroke-width="${random(1, 5)}" y1="${random(
        10,
        30
      )}" y2="${random(20, 80)}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line><line  stroke-width="${random(1, 5)}" y1="${random(
        10,
        30
      )}" y2="${random(20, 80)}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line><line  stroke-width="${random(1, 5)}" y1="${random(
        10,
        30
      )}" y2="${random(20, 80)}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line>
    <line  stroke-width="${random(1, 5)}" y1="${random(10, 30)}" y2="${random(
        20,
        80
      )}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line>
    <line  stroke-width="${random(1, 5)}" y1="${random(10, 30)}" y2="${random(
        20,
        80
      )}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line>
    <line  stroke-width="${random(1, 5)}" y1="${random(10, 30)}" y2="${random(
        20,
        80
      )}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line>
    <line  stroke-width="${random(1, 5)}" y1="${random(10, 30)}" y2="${random(
        20,
        80
      )}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line>
    
    <line  stroke-width="${random(1, 5)}" y1="${random(10, 30)}" y2="${random(
        20,
        80
      )}" x1="${random(10, 100)}" x2="${random(
        30,
        200
      )}" class="l1" stroke="rgb(${random(0, 256)},${random(0, 256)},${random(
        0,
        256
      )})"></line>
  <text id="text1" x="45" 
  
  transform="rotate(${random(0, 12)} ${random(0, 15)} ${random(0, 20)})"
    y="55">${text[0]}</text>
  <text id="text2" x="70" 
  
  transform="rotate(${random(0, 12)} ${random(0, 15)} ${random(0, 20)})"
    y="55">${text[1]}</text>
  <text id="text3" x="90" 
  
  transform="rotate(${random(0, 12)} ${random(0, 15)} ${random(0, 20)})"
    y="55">${text[2]}</text>
  <text id="text4" x="115" 
  
  transform="rotate(${random(0, 12)} ${random(0, 15)} ${random(0, 20)})"
    y="55">${text[3]}</text>
  <text id="text5" x="140" 
  
  transform="rotate(${random(0, 12)} ${random(0, 15)} ${random(0, 20)})"
    y="55">${text[4]}</text>
  <text id="text6" x="165" 
  
  transform="rotate(${random(0, 12)} ${random(0, 15)} ${random(0, 20)})"
     y="55">${text[5]}</text>
</svg>
    `;
      // <line y1="10" y2="90" x1="10" x2="190" id="l1"></line>
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
        .toFile(file)
        .then(() => {
          console.log('im here');
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
