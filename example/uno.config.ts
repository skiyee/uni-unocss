import presetUni from 'uni-unocss'
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUni(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
