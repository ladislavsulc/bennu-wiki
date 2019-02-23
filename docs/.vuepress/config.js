module.exports = {
    lastUpdated: 'Last Updated', // string | boolean
    title: 'Bennu Wiki',
    description: 'Přehled učení zaměřených na sebepoznání',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js' }]
	],
	ga: '',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Bashar', link: '/bashar/' },
          { text: 'Abraham', link: '/abraham-hicks/' },
          { text: 'Bennu.cz', link: 'https://www.bennu.cz' },
        ],
        sidebar: 'auto'
    }
}