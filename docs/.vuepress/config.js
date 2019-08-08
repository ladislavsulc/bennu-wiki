let ogprefix = 'og: http://ogp.me/ns#'
let title = 'Bennu Wiki'
let description = 'Přehled učení nové energie. Poznejte své skutečné Já.'
let author = 'Ladislav Šulc'

module.exports = {
    lastUpdated: 'Last Updated', // string | boolean
    title: 'Bennu Wiki',
    description: 'Přehled učení nové energie. Poznejte své skutečné Já.',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'website' }],
        ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://wiki.bennu.cz' }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://wiki.bennu.cz/bennu-wiki-logo.png' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/css/uikit.min.css' }]
	],
	ga: '',
    themeConfig: {
        nav: [
          { text: 'Úvod', link: '/' },
          { text: 'Bashar', link: '/bashar/' },
          { text: 'Elan', link: '/elan/' },
          { text: 'Abraham', link: '/abraham-hicks/' },
          { text: 'Bennu.cz', link: 'https://www.bennu.cz' }
        ],
        sidebar: 'auto'
    },
    plugins: ['@vuepress/pwa']
}