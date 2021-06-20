import React from './react';
import ReactDOM from './react-dom';

// let element = (
//   <div className="title" style={{color: 'red'}}>
//     <span>hello</span>world
//   </div>
// )

// 实现 React.createElement 方法，返回一个 React 元素
let element = React.createElement("div", {
  className: "title",
  style: {
    color: 'red'
  }
}, React.createElement("span", null, "hello"), "world");

console.log(JSON.stringify(element, null, 2))

// 实现 render 方法，把 React 元素变成真实的 DOM 元素插入页面 root 里
ReactDOM.render(element, document.getElementById('root'))
