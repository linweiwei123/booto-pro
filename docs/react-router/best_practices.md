[主页](../../README.md)

## 用redux管理router
### react-redux-router

## 路由规划

## 动态router
通过codesplitting分割页面模块，通过异步组件加载页面模块，从而达到动态路由的目的

### 通用异步组件
```typescript jsx
import * as React from 'react';
import { IAsyncComponentState } from './interface';
import { ComponentType } from 'react';
import { delayLoad } from '../utils/commonUtils';

const asyncComponent = (loadComponent: any, LoadingComponent: any) => {
  return class AsyncComponent extends React.Component<any, IAsyncComponentState> {
    constructor(props: any){
      super(props);
      this.state = {
        component: null
      };
    };

    componentWillMount(){
      if(!this.hasLoadedComponent()){
        loadComponent()
          .then((module: { default: any; }) => delayLoad(module.default))
          .then((component: ComponentType) => {
            console.log('component', component);
            this.setState({
              component: component
            })
          })
          .catch( (err: Error) => {
            console.error(`Cannot load component in <AsyncComponent />`);
            throw err;
          })
      }
    }

    hasLoadedComponent(){
      return this.state.component !== null;
    }

    render(){
      const Component= this.state.component;
      return Component ? (
        <Component {...this.props} />
      ) : LoadingComponent? (
        <LoadingComponent {...this.props}/>
      ) : null;
    }

  }
};


export default asyncComponent;
```

### 代码分割