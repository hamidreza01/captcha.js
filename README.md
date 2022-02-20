### JavaScript Captcha Production Module

## How to use:

- install :

```bash
npm i captcha-dot-js
```

- import :

```javascript
const captcha = require('captcha-dot-js');
```

- using :

Using the module is how you call a functional, and then as an object you send inputs to it that include the following, it is mandatory for them to enter the value, all values are boolean type , for example :

```javascript
const captcha = require('captcha-dot-js');

(async () => {
  const myCaptcha = await captcha({
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: false,
  });
})();
```

- Recursive value :

‍‍The recursive value of an object is the same as the example below

```javascript
{ file_name: 'kvacjoxqjwlveibk.png', captcha: 'pkcsos' }
```

The first value means file_name is the name of the file in which captcha is located and whatever you want to do, you have to use it, the second value is captcha is the captcha value that is entered in the photo.


## Final sentence :‌

If you have problems or suggestions, also this module will be updated from time to time for security reasons, so don't forget to update

