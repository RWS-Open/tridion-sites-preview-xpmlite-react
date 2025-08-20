import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts', // or index.tsx
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'] }),
    commonjs(),
    postcss({
      //extract:"HeadlessXpmEditor.css",
      minimize: true,
      sourceMap: true,
      modules: false,
      inject:true,
      extensions:[".css"]
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.json',
      clean: true,
    }),
    copy({
      targets:[
        {
          src:["README.md", "CHANGELOG.md"],
          dest:"dist"
        }
      ],
      verbose:true
    })
  ],
  external: ['react', 'react-dom'],
};
