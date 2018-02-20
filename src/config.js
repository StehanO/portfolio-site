const description =
  "Hi! I'm Francois. I'm currently working at MADE Code as a front end developer building anything with React, Redux and Node. For the past few years I've worked as a full stack developer in the JavaScript world. I've done some ASP.NET development a long time ago in a galaxy far, far away too."

module.exports = {
  title: 'Francois Laubscher - JavaScript Developer',
  description,
  head: {
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        name: 'description',
        content: description
      },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-16x16.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-32x32.png',
        sizes: '16x16'
      },
      { rel: 'manifest', href: 'manifest.json' },
      { rel: 'mask-icon', href: 'msapplication-TileColor', content: '#000000' },
      {
        rel: 'mask-icon',
        href: 'msapplication-TileImage',
        content: 'mstile-144x144.png'
      }
    ],
    htmlAttributes: {
      lang: 'en'
    }
  }
}
