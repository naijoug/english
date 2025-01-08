import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/english/',
  title: "English",
  description: "Something about English.",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Awesome', link: '/awesome' },
      { text: 'Words', link: '/words' },
    ],

    sidebar: [
      {
        text: 'Awesome',
        items: [
          { text: 'index', link: '/awesome/' },
        ]
      },
      {
        text: 'Words',
        collapsed: true,
        items: [
          { text: 'index', link: '/words/' },
          { text: 'A', link: '/words/a' },
          { text: 'B', link: '/words/b' },
          { text: 'C', link: '/words/c' },
          { text: 'D', link: '/words/d' },
          { text: 'E', link: '/words/e' },
          { text: 'F', link: '/words/f' },
          { text: 'G', link: '/words/g' },
          { text: 'H', link: '/words/h' },
          { text: 'I', link: '/words/i' },
          { text: 'J', link: '/words/j' },
          { text: 'K', link: '/words/k' },
          { text: 'L', link: '/words/l' },
          { text: 'M', link: '/words/m' },
          { text: 'N', link: '/words/n' },
          { text: 'O', link: '/words/o' },
          { text: 'P', link: '/words/p' },
          { text: 'Q', link: '/words/q' },
          { text: 'R', link: '/words/r' },
          { text: 'S', link: '/words/s' },
          { text: 'T', link: '/words/t' },
          { text: 'U', link: '/words/u' },
          { text: 'V', link: '/words/v' },
          { text: 'W', link: '/words/w' },
          { text: 'X', link: '/words/x' },
          { text: 'Y', link: '/words/y' },
          { text: 'Z', link: '/words/z' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/naijoug/english' }
    ]
  }
})
