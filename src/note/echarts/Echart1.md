---
title: echarts图表
date: 2022-02-28
tag:
  - Echarts
category:
  - frontEnd
---

<!-- more -->

::: echarts Dynamic Data & Time Axis

```js
let chartData = [
  {
    name: '规划里程',
    dataList: [
      { name: '合计', value: 8200 },
      { name: '主线', value: 6300 },
      { name: '支线', value: 1800 },
      { name: '连接线', value: 700 }
    ]
  },
  {
    name: '完成里程',
    dataList: [
      { name: '合计', value: 6500 },
      { name: '主线', value: 800 },
      { name: '支线', value: 900 },
      { name: '连接线', value: 400 }
    ]
  }
]

let colorList = [
  ['#3276E2', '#57B1EE'],
  ['#61AE64', '#87BF90']
]

const option = {
  title: {
    text: '公里',
    top: 0,
    left: 10,
    textStyle: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'normal',
      fontFamily: 'Alibaba'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    borderColor: '#255DA9',
    backgroundColor: '#255DA9',
    textStyle: {
      color: '#fff',
      fontSize: 12
    }
  },
  grid: {
    top: '17%',
    right: '0',
    left: '12%',
    bottom: '10%'
  },
  legend: {
    top: 0,
    right: 0,
    itemGap: 20,
    data: chartData.map((item) => item.name),
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#3C5787'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#fff',
      fontSize: 12
    },
    data: chartData[0].dataList.map((item) => item.name)
  },
  yAxis: {
    axisLabel: {
      color: '#FFFFFF',
      fontSize: 12
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#B2C2D3',
        type: 'dashed'
      }
    }
  },
  series: chartData.map((item, index) => {
    return {
      name: item.name,
      type: 'bar',
      barWidth: 16,
      // itemStyle: {
      //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      //     {
      //       offset: 0,
      //       color: colorList[index][1] //结束颜色
      //     },
      //     {
      //       offset: 1,
      //       color: colorList[index][0] // 起始颜色
      //     }
      //   ])
      // },
      data: item.dataList.map((item) => item.value)
    }
  })
}
```

:::
