import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Documentation",
  description: "Documentaion du projet",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Rust', link: '/rust_explain' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Rust explained', link: '/rust_explain' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sonar-team' }
    ]
  }
})
