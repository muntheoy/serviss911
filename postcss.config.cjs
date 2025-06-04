const { purgeCSSPlugin } = require('@fullhuman/postcss-purgecss');

// Простой экстрактор для CSS Modules и стандартных классов
const simpleExtractor = (content) => content.match(/[^<>\'\"\`\\s]+/g) || [];

module.exports = {
  plugins: [
    purgeCSSPlugin({
      content: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
      css: ['./src/**/*.scss', './src/**/*.css'],
      extractor: {
        extractor: simpleExtractor,
        extensions: ['html', 'js', 'jsx', 'ts', 'tsx'],
      },
      safelist: [
        /^html/,
        /^body/,
        /^[a-zA-Z0-9-_]+$/,
        /_.*$/,
        /:\S+$/,
        /::\S+$/,
        /\[.+\]/,
        // Более широкий паттерн для сгенерированных имен классов CSS Modules
        /[a-zA-Z0-9_-]+__[a-zA-Z0-9]+$/,
        // Добавляем основные HTML теги и более общие классы
        'div', 'p', 'h1', 'h2', 'h3', 'span', 'a', 'button', 'img', 'section', 'header', 'footer', 'nav', 'ul', 'li', 'main',
        // Добавляем паттерны для псевдоклассов и состояний
        /:hover/, /:focus/, /:active/, /\.active/, /\.open/
      ]
    })
  ]
}; 