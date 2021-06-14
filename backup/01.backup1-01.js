import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 * 老的版本，我们只要用到JSX,就需要在顶部引入 React 变量
 * 但是在新的版本里，不再需要引入 React 变量了
 * JSX javascript + xml html
 * jsx 其实只是 react 提供的一个语法糖
 * React 元素是构建 React 应用的最小单位
 * 虚拟DOM
 */
let element = <h1>Hello</h1>;

// jsx 在执行的时候其实是一个函数调用，它是一个创建元素的工厂函数
// let element = React.createElement("h1", null, "Hello")
// 新的转换后的结果 Object(s.jsx)("h1", {children: "Hello"})

console.log(JSON.stringify(element))

/**
 * 也就是所谓的虚拟DOM，其实就是一个普通的JS对象
 {
    "type":"h1", //  元素的类型
    "key":null, //  是用来区分同一个父亲的不同儿子 （DOMDIFF会用到）
    "ref":null,  // 这个可以用来获取真实真的DOM元素
    "props":{
      "children":"Hello"
    },
    "_owner":null,
    "_store":{

    }
  }
 */

// 所谓的渲染就是按照 react 元素所描述的结构，创建真实的DOM元素，并插入 root 容器内
// 会由 ReactDOM 来确定浏览器的真实DOM和虚拟DOM是一致的
ReactDOM.render(
  element,
  document.getElementById('root')
);
