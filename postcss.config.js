module.exports = process.env.NODE_ENV === 'production' ? {
  plugins: [
    require('css-mqpacker'),
    require('postcss-merge-rules'),
    require('autoprefixer')({
      browsers: [
        '> 1%',
        'not ie <= 10'
      ]
    })
  ]
} : {};
