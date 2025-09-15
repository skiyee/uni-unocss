import { fileURLToPath, URL } from 'node:url'

import Uni from '@uni-helper/plugin-uni'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    UnoCSS(),
    // https://uni-helper.js.org/plugin-uni
    Uni(),
  ],

})
