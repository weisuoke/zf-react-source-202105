import React from './react';
import ReactDOM from './react-dom';

/**
 * 组件分为内置原生组件和自定义组件
 * 内置组件 p h1 span type字符串
 * 自定义组件，类型是一个函数，类组件的父类 Component 的原型上有一个属性 isReactComponent
 * 自定义组件的名称必须是大写字母开头
 * 自定义组件的返回值有且只能有一个根元素
 */
class ClassComponent extends React.Component{
  render() {
    return (
      <h1 style={{color: 'red'}} className="title"><span>hello</span>, {this.props.name}</h1>
    )
  }
}

function FunctionComponent() {
  return (
    <h1 style={{color: 'red'}} className="title"><span>hello</span>, {this.props.name}</h1>
  )
}

let element1 = <ClassComponent name="zhufeng" />
let element2 = <FunctionComponent name="zhufeng" />
console.log(element1)
console.log(element2)

// 实现 render 方法，把 React 元素变成真实的 DOM 元素插入页面 root 里
ReactDOM.render(<ClassComponent name="zhufeng" />, document.getElementById('root'))
