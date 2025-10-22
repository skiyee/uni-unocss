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
