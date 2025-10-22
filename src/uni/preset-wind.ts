import type { PresetWind3Options } from '@unocss/preset-wind3'

import { definePreset } from '@unocss/core'
import { presetWind3 } from '@unocss/preset-wind3'

export const presetWind = definePreset((opts: PresetWind3Options = {}) => {
  const purePresetWind3 = presetWind3({ ...opts, preflight: false })
  purePresetWind3.rules?.pop()
  purePresetWind3.variants?.splice(1, 1)

  return {
    ...purePresetWind3,
    name: 'uni-unocss/preset-wind',
  }
})
