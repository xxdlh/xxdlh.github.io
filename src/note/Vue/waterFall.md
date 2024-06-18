---
title: 瀑布流图片
date: 2024-03-14
tag:
  - Vue
category:
  - frontEnd
---

瀑布流图片实现

<!-- more -->

::: vue-demo Vue 演示 1

```vue
<template>
  <div class="wrap">
    <div
      v-for="(item, index) in waterList"
      :key="index"
      class="wrap-item"
      :style="{ height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px' }"
    ></div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
const list = reactive([
  {
    height: 300,
    background: "red"
  },
  {
    height: 400,
    background: "pink"
  },
  {
    height: 500,
    background: "blue"
  },
  {
    height: 200,
    background: "green"
  },
  {
    height: 300,
    background: "gray"
  },
  {
    height: 400,
    background: "#CC00FF"
  },
  {
    height: 200,
    background: "black"
  },
  {
    height: 100,
    background: "#996666"
  },
  {
    height: 500,
    background: "skyblue"
  },
  {
    height: 300,
    background: "#993366"
  },
  {
    height: 100,
    background: "#33FF33"
  },
  {
    height: 400,
    background: "skyblue"
  },
  {
    height: 200,
    background: "#6633CC"
  },
  {
    height: 300,
    background: "#666699"
  },
  {
    height: 300,
    background: "#66CCFF"
  },
  {
    height: 300,
    background: "skyblue"
  },
  {
    height: 200,
    background: "#CC3366"
  },
  {
    height: 200,
    background: "#CC9966"
  },
  {
    height: 200,
    background: "#FF00FF"
  },
  {
    height: 500,
    background: "#990000"
  },
  {
    height: 400,
    background: "red"
  },
  {
    height: 100,
    background: "#999966"
  },
  {
    height: 200,
    background: "#CCCC66"
  },
  {
    height: 300,
    background: "#FF33FF"
  },
  {
    height: 400,
    background: "#FFFF66"
  },
  {
    height: 200,
    background: "red"
  },
  {
    height: 100,
    background: "skyblue"
  },
  {
    height: 200,
    background: "#33CC00"
  },
  {
    height: 300,
    background: "#330033"
  },
  {
    height: 100,
    background: "#0066CC"
  },
  {
    height: 200,
    background: "skyblue"
  },
  {
    height: 100,
    background: "#006666"
  },
  {
    height: 200,
    background: "yellow"
  },
  {
    height: 300,
    background: "yellow"
  },
  {
    height: 100,
    background: "#33CCFF"
  },
  {
    height: 400,
    background: "yellow"
  },
  {
    height: 400,
    background: "yellow"
  },
  {
    height: 200,
    background: "#33FF00"
  },
  {
    height: 300,
    background: "yellow"
  },
  {
    height: 100,
    background: "green"
  }
]);
onMounted(() => {
  window.onresize = () => init();
  init();
});

const waterList = reactive([]);
const init = () => {
  const heightList = [];
  const width = 130;
  const x = document.body.clientWidth;
  const colunm = Math.floor(x / width);
  for (let i = 0; i < list.length; i++) {
    if (i < colunm) {
      list[i].top = 10;
      list[i].left = i * width;
      heightList.push(list[i].height + 10);
      waterList.push(list[i]);
    } else {
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h, hIndex) => {
        if (h < current) {
          current = h;
          index = hIndex;
        }
      });
      list[i].top = current + 10;
      list[i].left = index * width;
      heightList[index] = current + list[i].height + 10;
      waterList.push(list[i]);
    }
  }
};
</script>
<style>
.wrap {
  height: 100%;
  position: relative;
  .wrap-item {
    position: absolute;
    width: 120px;
  }
}
</style>
```

:::
