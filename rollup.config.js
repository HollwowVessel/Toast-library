import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import alias from 'rollup-plugin-alias';

export default [
  {
    input: './src/index.js',
    external: ['styled-components'],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      alias({
        '@': `${__dirname}/src`,
        components: `${__dirname}/src/components`,
        stories: `${__dirname}/src/stories`,
        constants: `${__dirname}/src/constants`,
        assets: `${__dirname}/src/assets`,
        helpers: `${__dirname}/src/helpers`,
        containers: `${__dirname}/src/containers`,
      }),
    ],
  },
];
