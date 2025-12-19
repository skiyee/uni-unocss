import type { Preset } from '@unocss/core'
import type { PresetWind3Options, Theme } from '@unocss/preset-wind3'

import process from 'node:process'

import { definePreset } from '@unocss/core'
import { presetLegacyCompat } from '@unocss/preset-legacy-compat'
import { presetWind3 } from '@unocss/preset-wind3'

import { safeSelector, safeSize } from './postprocessor'
import { preflightUni } from './preflights'
import { presetWind } from './preset-wind'
import { transformerClasses } from './transformers'
import { variantMiddle, variantWildcard } from './variants'

interface Options {
  /**
   * 运行平台
   * @default 自动检测环境
   */
  platform: 'web' | 'miniapp';
  /**
   * @unocss/preset-wind3 配置信息
   */
  wind?: PresetWind3Options;
}

export const presetUni = definePreset((opts: Options = {
  platform: (process.env.UNI_PLATFORM || '').startsWith('mp-') ? 'miniapp' : 'web',
}) => {
  const uniPreset: Preset<Theme> = {
    name: 'uni-unocss',
    presets: [
      presetWind(opts.wind),
      presetLegacyCompat({
        commaStyleColorFunction: true,
        legacyColorSpace: true,
      }),
    ],
    variants: [
      variantMiddle(),
      variantWildcard(),
    ],
    preflights: [
      preflightUni(),
    ],
    postprocess: [
      safeSize(),
      safeSelector(),
    ],
    configResolved(config) {
      config.transformers ??= []
      config.transformers.push(transformerClasses())
    },
  }

  const unoPreset = presetWind3(opts.wind)

  return opts.platform === 'miniapp' ? uniPreset : unoPreset
})

export default presetUni
