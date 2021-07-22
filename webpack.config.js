module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: [/node_modules/, /bower_components/],
      },
      {
        test: /\.(js|jsx)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}