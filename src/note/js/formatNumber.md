---
icon: pen-to-square
date: 2022-01-01
category:
  - util
tag:
  - formatter
  - number
---

# 格式化输入框

## 限制输入框，只能输入数字，并保留小数位

::: vue-playground Vue 交互演示

@file App.vue

```vue
<template>
  <div>
    <input />
  </div>
</template>

<script setup>
  const { ref } = Vue

  const inputValue = ref('')

  //限制数字，保留小数位decimalPlaces
  const formatNumber = (decimalPlaces = 2) => {
    return (num) => {
      if (num == null || num == undefined) return ''
      num = num.replace(/[^\-\d.]/g, '') //清除"数字"和"."以及"-"以外的字符
      num = num.replace(/^\./g, '') //验证第一个字符是数字
      num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.') //只能有一个小数点
      // num = num.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); //只能输入两个小数

      const regex = new RegExp(`^(\\-)*(\\d+)\\.(\\d{${decimalPlaces}}).*`)
      return num.toString().replace(regex, '$1$2.$3')
    }
  }
</script>
```

:::
