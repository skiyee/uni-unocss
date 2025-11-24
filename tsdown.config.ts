import { defineConfig } from 'tsdown'

import pkg from './package.json' with { type: 'json' }

const banner
  = '/*!\n'
    + ` * Uni UnoCSS v${pkg.version}\n`
    + ` * (c) 2025-${new Date().getFullYear()} skiyee\n`
    + ' * Released under the MIT License.\n'
    + ' */'

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  banner,
})
