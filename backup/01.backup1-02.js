import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 1. JSX 表达式 表达式就是 变量 常量 操作符混合在一起的组合
 * 表达式是可以计算的，而且 肯定会有一个返回值
 * jsx更想JS
 * class => className for => htmlFor
 */

let title = 'hello'
let style = {backgroundColor: 'green', color: 'red'}
let element = <h1 style={style}>{title}</h1>

/**
 * JSX 可以作为函数的参数和返回值
 */
function greeting(name) {
  if (name) {
    return <h1>hello, {name}</h1>
  } else {
    return <h1>hello, Stranger</h1>
  }
}

ReactDOM.render(
  element,
  document.getElementById('root')
);
