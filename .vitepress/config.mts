import { defineConfig } from 'vitepress'
// import react from '@vitejs/plugin-react'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Librarian Docs",
  description: "Librarian for your shows and movies",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/emadhsiddiqui97/mediaLibraray' }
    ]
  },
  // plugins:[react()],
  base:"/LibrarianDocs/"
})
