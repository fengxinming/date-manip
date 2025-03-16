import { appendFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import camelcase from 'camelcase';
import { build, defineConfig, Plugin } from 'vite';
import pluginCombine from 'vite-plugin-combine';
import pluginCP from 'vite-plugin-cp';
import pluginDTS from 'vite-plugin-dts';
import pluginExternal from 'vite-plugin-external';

import pkg from './package.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function buildUMD() {
  let currentCmd: string;

  return {
    name: 'build-umd',
    config(config, { command }) {
      currentCmd = command;
    },
    closeBundle() {
      if (currentCmd !== 'build') {
        return;
      }

      ['dist/index.mjs', 'dist/chain.mjs'].forEach((esPath) => {
        build({
          configFile: false,
          build: {
            emptyOutDir: false,
            minify: false,
            lib: {
              formats: ['umd'],
              name: camelcase(pkg.name),
              fileName(format, entryName) {
                return `${entryName}.${format}.js`;
              },
              entry: esPath
            }
          }
        });
      });

      appendFileSync(
        join(__dirname, 'dist/index.d.ts'),
        'export * from \'./types\';',
        'utf-8'
      );
    }
  } as Plugin;
}


export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: ['src/chain.ts'],
      formats: ['es', 'cjs'],
      fileName(format, entryName) {
        return `${entryName}${format === 'es' ? '.mjs' : '.js'}`;
      }
    },
    rollupOptions: {
      output: {
        banner: `/*! ${pkg.name} v${pkg.version} | ${pkg.license} License */`
      }
    }
  },
  plugins: [
    pluginCombine({
      src: ['src/*.ts', '!src/chain.ts'],
      target: 'src/index.ts'
    }),
    pluginExternal({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(pkg.dependencies).concat(pkg.name)
    }),
    pluginDTS({
      tsconfigPath: './tsconfig.build.json'
    }),
    pluginCP({
      targets: [
        { src: 'src/types', dest: 'dist/types' }
      ]
    }),
    buildUMD()
  ],
  test: {
    name: pkg.name,
    dir: './test'
  }
});
