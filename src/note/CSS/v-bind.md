---
title: css通过v-bind绑定script变量
date: 2024-03-13
tag:
  - Css
category:
  - frontEnd
---

Vue3 中，css 中可以通过 v-bind 绑定 script 变量,变量值改变，样式随之改变

<!-- more -->

```js
<script setup>const color = ref('red')</script>
```

```css
.box {
  background-color: v-bind(color);
}
```
