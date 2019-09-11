[主页](../../README.md)

## 概念
### 高阶组件
```
// 函数接受一个组件参数……
function withSubscription(WrappedComponent, selectData) {
  // ……返回另一个新组件……
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ……注意订阅数据……
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ……使用最新的数据渲染组件
      // 注意此处将已有的props属性传递给原组件
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
```

## Hook
什么是Hook？

### 官方解释：
Hook是一种函数，该函数允许你从函数式组件中“勾住（hook into）” React状态和生命周期功能，Hook在类的内部不起作用，他们允许你无需使用类就能使用React。

### 我的理解
Hook是一种让函数式组件使用React的能力，让函数式组件有状态。Class based组件转换为Function based的组件。

带来的好处：1、逻辑复用 2、解决生命周期隔断代码的问题

## useEffect

