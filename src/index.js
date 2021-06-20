import React from './react';
import ReactDOM from './react-dom';

/*
  函数组件其实是一个函数，接收 props, 返回一个 React 元素
 */
function FunctionComponent(props) {
  return React.createElement('h1', null, "hello,", props.name)
}

// let element = <Welcome name="zhufeng" />
let element = React.createElement(FunctionComponent, {name: 'zhufeng'})

// 实现 render 方法，把 React 元素变成真实的 DOM 元素插入页面 root 里
ReactDOM.render(element, document.getElementById('root'))
