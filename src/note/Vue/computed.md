---
title: computed计算属性的两种写法
date: 2024-03-13
tag:
  - Vue
category:
  - frontEnd
---

1.选项式写法，2.函数式写法

<!-- more -->

### 选项式写法,get 函数支持传入对象，set 函数自定义操作

```js
let firstName = ref('张')
let lastName = ref('三')

let name = computed({
  get () {
    return firstName.value + '-' + lastName.value
  },
  set (newValue) {
    let [firstName.value, lastName.value] = newValue.split('-')
  }
})

const changeName = () => {
  name.value = '李-四'
}

```

### 函数式写法，只能支持一个 getter 函数，不允许修改值

```js
let firstName = ref('张')
let lastName = ref('三')

let name = computed(() => firstName.value + '-' + lastName.value)

//不允许修改值，无法修改name
// const changeName = () => {
//   name.value = '李-四'
// }
```
