import type { Postprocessor } from '@unocss/core'

import { UNSUPPORTED_SELECTOR_CHARS } from './helper/constants'

export function safeSelector(): Postprocessor {
  const unsupportedSelectorCharsPattern = UNSUPPORTED_SELECTOR_CHARS.map(char => `\\\\\\${char}`).join('|')
  const unsupportedSelectorCharsRegExp = new RegExp(unsupportedSelectorCharsPattern, 'g')

  return (util) => {
    if (!util.selector) {
      return
    }

    util.selector = util.selector.replaceAll(unsupportedSelectorCharsRegExp, '_a_')
  }
}

export function safeSize(): Postprocessor {
  const remRE = /(-?[.\d]+)rem/g

  return (util) => {
    util.entries.forEach((i) => {
      const value = i[1]
      if (value && typeof value === 'string') {
        if (remRE.test(value)) {
          i[1] = value.replace(remRE, (_, p1) => `${p1 * 32}rpx`)
        }
      }
    })
  }
}
