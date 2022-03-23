# Languages:
- [English (en)](#javascript-captcha-production-module)
- [Persian (Farsi) (fa)](#%D9%85%D8%A7%DA%98%D9%88%D9%84-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%DA%A9%D9%BE%DA%86%D8%A7-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-%D9%86%D9%88%D8%AF-%D8%AC%DB%8C%D8%A7%D8%B3)

# JavaScript Captcha Production Module

## How to use:

- install:

npm:
```bash
npm i captcha-dot-js
```
yarn:
```bash
yarn add captcha-dot-js
```
pnpm:
```bash
pnpm i captcha-dot-js
```

- import:

```javascript
const captcha = require('captcha-dot-js');
```

- using:

Using the module is just same as how you call a function, and then as an object you send inputs to it that include the following values, It is mandatory for them to enter the value, All values are boolean type; For example:

```javascript
const captcha = require('captcha-dot-js');

(async () => {
  const myCaptcha = await captcha({
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: false,
    difficulty : 1,
  });
})();
```

| Value           	| Description                                          	|
|-----------------	|------------------------------------------------------	|
| ```numbers```   	| In captcha, have numbers or not                      	|
| ```lowercase``` 	| In captcha, have lowercase alphabet or not           	|
| ```uppercase``` 	| In captcha, have uppercase alphabet or not           	|
| ```symbols```   	| In captcha, have symbols (special characters) or not 	|
| ```difficulty```   	| Determines the hardness value of captcha  	|
| ```path```   	| Specifies the storage folder of captcha images   	|



- Recursive values:

‍‍The recursive values of an object is the same as the example below:

```javascript
{ file_name: 'kvacjoxqjwlveibk.png', captcha: 'pkcsos' }
```

Values:
| Value           	| Description                                        	|
|-----------------	|----------------------------------------------------	|
| ```file_name``` 	| Name of the image file (which captcha is drawn in) 	|
| ```captcha```   	| Captcha value (that is entered in photo)           	|

## Final sentence:

If you have problems or suggestions feel free to open issues; Also this module will be updated from time to time for security reasons, So don't forget to update!


#  ماژول تولید کپچا برای جاوا اسکریپت (نود جی‌اس)

## روش استفاده:

- نصب:

ان‌پی‌ام (npm):
```bash
npm i captcha-dot-js
```
یارن (yarn):
```bash
yarn add captcha-dot-js
```
پی‌ان‌پی‌ام (pnpm):
```bash
pnpm i captcha-dot-js
```

- وارد کردن به پروژه (import):
```javascript
const captcha = require('captcha-dot-js');
```

- استفاده:

استفاده از این ماژول مثل صدا زدن یک عملگر است؛ مقادیر را به صورت شیء به آن ارسال می‌کنیم؛ وارد نمودن تمامی مقادیر اجباری‌ست، تمامی مقادیر بولی (درست/نادرست) هستند؛ به عنوان مثال:
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
| مقادیر          	|                                        توضیحات 	|
|-----------------	|-----------------------------------------------:	|
| ```numbers```   	|                    در کپچا، اعداد باشند یا خیر 	|
| ```lowercase``` 	|                در کپچا، حروف کوچک باشند یا خیر 	|
| ```uppercase``` 	|                در کپچا، حروف بزرگ باشند یا خیر 	|
| ```symbols```   	| در کپچا، نمادها (کاراکترهای ویژه) باشند یا خیر 	|

- مقادیر بازگشتی:
مقادیر بازگشتی مثل مثال زیر است:
```javascript
{ file_name: 'kvacjoxqjwlveibk.png', captcha: 'pkcsos' }
```

مقادیر:
| مقادیر          	|                               توضیحات 	|
|-----------------	|--------------------------------------:	|
| ```file_name``` 	| نام عکس (که در آن کپچا کشیده شده است) 	|
| ```captcha```   	|      مقدار کپچا (که در عکس کشیده شده) 	|
## سخن پایانی:
برای هر گونه پیشنهاد و یا مشکل، ایشو جدیدی ایجاد فرمایید، ضمناً این ماژول (به دلایل امنیتی) زیاد به‌روزرسانی می‌شود؛ پس لطفاً ماژول را همواره آپدیت نگه دارید!
