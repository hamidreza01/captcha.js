const captcha = require('captcha-dot-js');

(async () => {
  const myCaptcha = await captcha({
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: false,
    difficulty : 1,
    path : './public'
  });
})();
