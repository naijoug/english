import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Phonetic from '../components/Phonetic.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义发音组件
    app.component('Phonetic', Phonetic)
  }
} satisfies Theme