import presetSkiyeeUI from '@skiyee/ui-preset'
import {
  defineConfig,
  presetUni,
  transformerDirectives,
  transformerVariantGroup,
} from 'uni-unocss'

export default defineConfig({
  presets: [
    presetUni(),
    presetSkiyeeUI(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
