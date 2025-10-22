import type { Variant } from '@unocss/core'
import type { Theme } from '@unocss/preset-wind3'

import { SUPPORTED_ELEMENTS } from './helper/constants'

export function variantMiddle(): Variant<Theme> {
  return (matcher) => {
    if (matcher.startsWith('_')) {
      return
    }

    if (/space-[xy]-.+$/.test(matcher) || /divide-/.test(matcher)) {
      return {
        name: 'uni-unocss/variant-middle',
        matcher,
        selector: (input) => {
          const selectors = SUPPORTED_ELEMENTS.map(el => `${input}>${el}:not(:first-child)`)
          return selectors.join(',')
        },

      }
    }
  }
}

export function variantWildcard(): Variant<Theme> {
  return (matcher) => {
    if (matcher.startsWith('_')) {
      return
    }

    if (/\*:.*/.test(matcher)) {
      return {
        name: 'uni-unocss/variant-wildcard',
        matcher,
        handle: (input, next) => {
          const { selector, pseudo } = input
          const rawSelector = selector.replace(/\s?>\s?\*/g, '')
          let newSelectors = SUPPORTED_ELEMENTS.map(el => `${rawSelector}>${el}`)
          if (pseudo) {
            newSelectors = newSelectors.map(selector => `${selector}${pseudo}`)
          }

          return next({
            ...input,
            selector: newSelectors.join(','),
            pseudo: '',
          })
        },
      }
    }
  }
}
