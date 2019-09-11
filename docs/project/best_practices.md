[主页](../../README.md)

## 配置修改
- npm run eject 来暴露配置、编译脚本

## 热更新
- 支持热更新（非刷新方式）
- Appwrapper来避免prod的react-hot-loader无用代码
- ts compile的类型校验改成异步，提升compile速度

## 目录结构规划
```
    C:.
    │  index.css
    │  Footer.tsx
    │
    ├─actions
    ├─assets
    │      logo.svg
    │
    ├─bootstrap
    │      Appwrapper.tsx
    │      registerServiceWorker.ts
    │
    ├─common
    ├─components
    ├─containers
    │      App.css
    │      App.test.tsx
    │      App.tsx
    │
    ├─reducers
    └─services

```

## tslint修改
```
    "ordered-imports": [false],
    "object-literal-sort-keys": [false],
    "member-access": false,
    "quotemark": false,
    "no-console": false,
    "semicolon": false,
    "jsx-no-lambda": false
```

## typedoc 
主要用于interface、action type、reducers、组件属性、通用方法的文档自动生成
```javascript
module.exports = {
  out: './docs_components/',
  readme: 'none',
  includes: [
    'src/actions/**/*',
    'src/common/**/*',
    'src/components/**/*',
    pages,
    'src/reducers/**',
  ],
  exclude: [
    HeadeHeader.tsx  'src/bootstrap/**',
    pages
  ],
  mode: 'file',
  target: 'ES6',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true
};
```