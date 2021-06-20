import { wrapToVdom } from "./utils";

/**
 *
 * @param type 类型
 * @param config 配置对象
 * @param children 第一个儿子
 * @returns {{type: *, props: *}}
 */
function createElement(type, config, children) {
  let props = {...config}
  if (arguments.length > 3) { // 如果参数大于3个，说明有多个儿子
    props.children = Array.prototype.slice.call(arguments, 2).map(wrapToVdom);
  } else {
    // children 可能是一个字符串，也可能是一个数字，也可能是null undefined，也可能是一个数组
    props.children = wrapToVdom(children)
  }
  return {
    type,
    props
  }
}

const React = {
  createElement
}

export default React
