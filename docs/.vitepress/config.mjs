import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Documentation',
  title: "Documentation",
  description: "Documentaion du projet",
  themeConfig: {
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
