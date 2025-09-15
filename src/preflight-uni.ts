import type { Preflight } from '@unocss/core'
import type { Theme } from '@unocss/preset-wind3'

import { entriesToCss, toArray } from '@unocss/core'

export function preflightUni(): Preflight<Theme> {
  return {
    layer: 'uni-unocss/preflight-uni',
    getCSS({ theme }) {
      if (theme.preflightBase) {
        const entries = Object.entries(theme.preflightBase)
        if (entries.length > 0) {
          const css = entriesToCss(entries)
          const roots = toArray(theme.preflightRoot ?? [':not(not),::before,::after', '::backdrop'])
          return roots.map(root => `${root}{${css}}`).join('')
        }
      }
    },
  }
}
