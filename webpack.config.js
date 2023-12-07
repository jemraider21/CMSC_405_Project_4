import path from 'path';

export default {
  entry: './src/main/frontend/js/main/main.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./src/main/frontend/js'),
  },
};