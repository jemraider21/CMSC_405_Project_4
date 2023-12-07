import path from 'path';

export default {
  entry: './src/main/frontend/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('./src/main/frontend/js'),
  },
};