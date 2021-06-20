import {REACT_TEXT} from "./constants";

/**
 * 不管原来是什么样的元素，都转成对象的形式，方便后续的DOMDiff
 * @param element
 * @returns {{type: symbol, props: {content: (string|number)}}|*}
 */
export function wrapToVdom(element) {
  if (typeof  element === 'string' || typeof element === 'number') {
    // 返回的也是 React 元素，也是虚拟 DOM
    return {type: REACT_TEXT, props: { content: element }}; // 虚拟 DOM props.content就是此文件的内容
  } else {
    return element
  }
}
