import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import alias from 'rollup-plugin-alias';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import svg from 'rollup-plugin-svg';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log(path.resolve(__dirname, 'src'));
const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss'],
});

export default [
  {
    input: './src/index.jsx',
    external: ['styled-components'],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'esm',
        exports: 'named',
      },
    ],
    plugins: [
      svg(),
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      alias({
        entries: [
          {
            find: 'src',
            replacement: path.resolve(__dirname, 'src'),
          },
          {
            find: 'components',
            replacement: path.resolve(__dirname, 'src/components'),
          },
          {
            find: 'stories',
            replacement: path.resolve(__dirname, 'src/stories'),
          },
          {
            find: 'constants',
            replacement: path.resolve(__dirname, 'src/constants'),
          },
          {
            find: 'assets',
            replacement: path.resolve(__dirname, 'src/assets'),
          },
          {
            find: 'helpers',
            replacement: path.resolve(__dirname, 'src/helpers'),
          },
          {
            find: 'containers',
            replacement: path.resolve(__dirname, 'src/containers'),
          },
          {
            find: 'hooks',
            replacement: path.resolve(__dirname, 'src/hooks'),
          },
        ],
        customResolver,
      }),
    ],
  },
];
