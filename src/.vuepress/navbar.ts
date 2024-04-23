import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  {
    text: '博文',
    icon: 'pen-to-square',
    prefix: '/note/',
    children: [
      {
        text: 'JS',
        icon: 'pen-to-square',
        prefix: 'js/',
        children: [
          { text: '移动端调试工具', icon: 'pen-to-square', link: '1' }
          // { text: '苹果2', icon: 'pen-to-square', link: '2' }
        ]
      }
    ]
  }
  // {
  //   text: 'V2 文档',
  //   icon: 'book',
  //   link: 'https://theme-hope.vuejs.press/zh/'
  // }
])
