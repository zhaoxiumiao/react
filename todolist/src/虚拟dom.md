1. state 数据
2. JSX模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的dom, 替换原始的DOM
   
缺陷:
第一次生成一个完整的DOM片段
第二次生成一个完整的DOM片段
第二次的DOM替换第一次的DOM, 非常耗性能

1. state 数据
2. JSX模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的dom, 并不直接替换原始的DOM
6. 新的DOM (DoucumentFragment) 和原始的DOM 做对比， 找差异
7. 找出input框发生了变化
8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

缺陷:
性能的提升并不明显

1. state 数据
2. JSX模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
`<div id='abc'><span>hello world</span></div>`
4. 生成虚拟DOM(虚拟DOM 就是一个JS对象，用它来描述真实DOM) (损耗了性能)
`['div',{id:'abc'}, ['span', {}, 'hello world']]`
5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
`['div',{id:'abc'}, ['span', {}, 'bye bye']]`
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容 (极大的提升了性能)
8. 直接操作DOM, 改变span中的内容

## 虚拟DOM原理
// JSX -> createElement -> js 对象 -> 真实的DOM
```js
    jsx: <div>item1<span>item2</span></div> 会转换成下边的这个createElement

    React.createElement('div', {}, 'item1',React.createElement('span',{},'item2'))
```

1. state 数据
2. JSX模板
3. 数据 + 模板 结合，生成虚拟DOM(虚拟DOM 就是一个JS对象，用它来描述真实DOM) (损耗了性能)
`['div',{id:'abc'}, ['span', {}, 'hello world']]` 
4. 用虚拟DOM的结构生成真实的DOM，来显示
`<div id='abc'><span>hello world</span></div>`
5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
`['div',{id:'abc'}, ['span', {}, 'bye bye']]`
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容 (极大的提升了性能)
(Diff, diffrence)
8. 直接操作DOM, 改变span中的内容

优点:
1. 性能提升了。
2. 它使得跨端应用得以实现。React Native

## Diff(diffrence)算法
### this.setState为什么设计成异步
   - 为了提高react底层性能
### diff
   - 同层比对
   - 利用不同key值来提升性能