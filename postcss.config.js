// postcss.config.js
// const plugins = ['tailwindcss', 'autoprefixer'];

module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    },
  },
};
