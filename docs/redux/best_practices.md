[主页](../../README.md)

## 数据流

=> Component的事件方法  
=> 调用属性上的dispatch方法   
=> redux传递action数据类型  
=> 经过reducer进行运算  
=> redux通过connect将数据传递给组件的props  
=> props属性变化  
=> 触发react重新渲染组件

### 示意图
![flow](http://static.seeyouyima.com/rn-applet/dataflow.jpeg)

## 什么样的数据适合放在store中？

不是所有的数据都适合房子store中  
适合放在store中的是全局使用到的，或者其他组件需要公用。
如果是按钮切换自身颜色的state、modal显示与隐藏等，更适合放组件自身的state中。

## 一个不靠谱的说法
思考：怀疑业界说的的redux通过state全部放到store中，每次变化上报state数据，以此来回放
用户的的整个页面操作过程这种说法非常不靠谱。只适合极少数的简单场景，大规模应用不太可能实现，
因为那样的话store会无比的巨大，设想下大数据分析平台。

## 使用redux的步骤
- 先规划->创建->添加storeState的数据结构interface
- 定义Action
    - 定义type常量、Action interface
    - 创建Action方法
- 创建reducers
    - 根据storeState划分合并reducer
    - 创建reducer方法，state运算逻辑
- 创建组件的container
    - mapStateToProps、mapDispatchToProps
- createStore，引用全部component
- store.subscribe，监听变化
- middleware
    - 常规日志记录，奔溃日志
- 异步action，异步数据流    

## 异步action