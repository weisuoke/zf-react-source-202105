/**
 * 把虚拟DOM转成真实 DOM 插入容器中
 * @param vdom
 * @param container
 */
import {REACT_TEXT} from "./constants";

function render(vdom, container) {
  let newDOM = createDOM(vdom);
  container.appendChild(newDOM);  // 插入容器中
}

/**
 * 把虚拟DOM转成真实DOM
 * @param vdom
 */
function createDOM(vdom) {
  let { type, props } = vdom;
  let dom;  // 获取真实 DOM 元素
  if (type === REACT_TEXT) {  // 如果是一个文本元素，就创建一个文本节点
    dom = document.createTextNode(props.content)
  } else if(typeof type === 'function'){
    if (type.isReactComponent) {  // 说明它是一个类组件
      return mountClassComponent(vdom)
    } else {
      return mountFunctionComponent(vdom);
    }
  } else {
    dom = document.createElement(type); // 原生DOM类型
  }
  if(props) {
    updateProps(dom, {}, props);  // 根据虚拟DOM中的属性更新真实DOM中的属性
    if (typeof props.children == 'object' && props.children.type) { // 如果他是一个对象，只有一个儿子
      render(props.children, dom)
    } else if(Array.isArray(props.children)) {  // 如果是一个数组
      reconcileChildren(props.children, dom)
    }
  }

  // 让虚拟 DOM 的 dom 属性指向它的真实DOM
  // vdom.dom = dom

  return dom
}

function mountClassComponent(vdom) {
  let { type, props } = vdom;
  let classInstance = new type(props)
  let renderVdom = classInstance.render();
  return createDOM(renderVdom)
}

function mountFunctionComponent(vdom) {
  let { type, props } = vdom;
  let renderVdom = type(props)
  return createDOM(renderVdom);
}

function reconcileChildren(childrenVdom, parentDOM) {
  for (let i = 0; i < childrenVdom.length; i++) {
    let childVdom = childrenVdom[i];
    render(childVdom, parentDOM)
  }
}

function updateProps(dom, oldProps, newProps) {
  for (let key in newProps) {
    if (key === 'children') { continue; } // 后面会单独处理 children 属性，所以此处跳过去
    if (key === 'style') {
      let styleObj = newProps[key];
      for(let attr in styleObj) {
        dom.style[attr] = styleObj[attr]
      }
    } else {
      dom[key] = newProps[key];
    }
  }
}

const ReactDOM = {
  render
}

export default ReactDOM
