[主页](../../README.md)

## CSS in JS
CSS是react的痛
[10余种解决方案](https://juejin.im/post/5b39e63ae51d4562aa017c81#heading-15)

- 样式与状态相关的情况越来越多，需要动态、能直接访问组件state的css。
- 现代web开发已经是组件化的天下，而css并不是为组件化而生的语言。
- 一切样式都是全局，产生的各种命名的痛苦，BEM等命名规则能解决一部分问题，但当你使用三方插件时却无法避免命名冲突

## typescript下的CSS模块化解决方案

### 使用typings-for-css-modules-loader
```javascript
 {
    loader: require.resolve('typings-for-css-modules-loader'),
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]__[local]___[hash:base64:5]',
      namedExport: true,
      camelCase: true
    },
  }
```
### 使用方式
```javascript
import styles from './home.css';
<div className={styles.hello}></div>
```
### 方案的不足
会额外生成css的ts文件声明，无用而且繁琐

## state CSS解决方案
使用classNames配合typescript CSS module方案实现 state CSS

### 使用方法
```javascript
import classNames from 'classnames';

const evenBlue = cx({
    [styles.title]: true,
    [styles['button--blue']]: level%2 === 0
});

<div className={evenBlue} />

```

## sass的方案
```javascript
// ------------------------ add sass-loader -----------------------------//
{
    test: /\.scss$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('typings-for-css-modules-loader'),
        options: {
          modules: true,
          sass: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          namedExport: true,
          camelCase: true
        },
      },
      require.resolve('sass-loader')
    ]
}
```
          
### 不足
较为繁琐