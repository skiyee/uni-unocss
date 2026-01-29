import {
  defineConfig,
  presetIcons,
  presetUni,
  transformerDirectives,
  transformerVariantGroup,
} from 'uni-unocss'

export default defineConfig({
  presets: [
    presetUni(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
