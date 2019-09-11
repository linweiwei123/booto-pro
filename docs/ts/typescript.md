[主页](../../README.md)

## 模块化
当使用ESM 引入 CommonJS时存在一个情况：
tsconfig: esModuleInterop: true

本项目中esModuleInterop 未设置，默认未false，typescript的import * as A from 'xx' 相等于babel的import A from 'xx'；如果设置了esModuleInterop为true，typescript与babel相同；

在typescript项目中以下也是等价的
```javascript
import * as React from 'react'; 
import React from 'react';
```
二者等价，之所以使用import * as React from 是多了一个type check

Import the entire module into a single variable, and use it to access the module exports #


### 分析
```
const A = require('A');

import B from 'A';

import * as C from 'A';
```

B = A.default;
C = {
   A.default,
   ...（A的其他属性）
}

import A from 'A' 此A等价于 const A = require(A).default 的A;


### 举例

bar.js

```javascript
module.exports = {
  name: 'lww',
  age: 30
};

```

```javascript
import bar from './bar';

console.log(bar);
```

{ name: 'lww', age: 30 }


```javascript
import * as bar from './bar';

console.log(bar);

```
{ name: 'lww', age: 30, default: { name: 'lww', age: 30 } }

### 对比babel

####  import * as A from 'xx';


esModuleInterop为true时，typescript的转换与babel相同

##### typescript的转换

```javascript
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bar = __importStar(require("./bar"));
console.log(bar);
```

##### babel的转换

```javascript
"use strict";

var bar = _interopRequireWildcard(require("./bar"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

console.log(bar);
```

### import A from 'xx';
##### typescript的转换

```javascript
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const bar_1 = __importDefault(require("./bar"));
console.log(bar_1.default);
```

##### babel的转换

```javascript
"use strict";

var _bar = _interopRequireDefault(require("./bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_bar["default"]);
```

### 结论
esModuleInterop为true时，typescript的转换与babel相同


## 复习ES6的模块化

### 有导出default
export与import的配对
```javascript
export default foo = 'lww';

import foo from './foo.js';
```
有默认default输出，则无需import * as

### 无导出default
```javascript
export const name = 'lww';
export const age = 30;

import * as foo './foo.js';
```
无default输出，则需要import * as


如果已经有default输出，再使用import * as foo，
会在外面再包一层的default，即： { default: foo };
