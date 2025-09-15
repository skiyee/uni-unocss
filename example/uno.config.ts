import presetSkiyeeUI from '@skiyee/ui-preset'
import presetUni from 'uni-unocss'
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

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
