module.exports = {
  test: /\.(js|jsx)?(\.erb)?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: ['react', 'es2015', 'stage-1', ['env', { modules: false }]],
    plugins: [
      'transform-class-properties',
      'transform-object-rest-spread',
    ],
  }
}
