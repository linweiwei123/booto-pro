- [原README](./README_OLD.md)
- [project架构](./docs/project/best_practices.md)
- [业务架构](./docs/business/index.md)
- [typescript](./docs/ts/typescript.md)
- [react最佳实践](./docs/react/best_practices.md)
- [redux](./docs/redux/best_practices.md)
- [react-router](./docs/react-router/best_practices.md)
- [CSS解决方案](./docs/css-in-js/best_practices.md)

## 使用

### 安装
```
yarn install
```

### 启动
```
npm run start
```

## Feature
### 大项目量身设计
### 常规标配
- ✅typescript
- ✅redux/connected-redux-router
- ✅CSS Modules/Stateful CSS
- ✅代码分割、动态router、按需加载
- http模块设计
- redux中间价
- 鉴权设计/JWT方案

### 高级配置
- 服务端渲染
- 日志记录/奔溃日志
- 状态记录、页面回放设计
- 埋点方案

### server
- 架构
  - NodeJS（Nest） + mysql(sequelize) + redis
  - JOI api参数校验
  - JWT鉴权/RBAC权限设计模型
  - React SSR封装
  - 缓存方案
  - 微信/QQ/微博/支付宝 等第三方登录
    
### 线上部署
- 结合pm2部署
- gitlab持续集成