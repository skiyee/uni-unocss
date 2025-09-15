import type { SourceCodeTransformer } from '@unocss/core'

import { UNSUPPORTED_SELECTOR_CHARS } from './constants'

export function transformerClasses(): SourceCodeTransformer {
  const unsupportedSelectorCharsPattern = `[${UNSUPPORTED_SELECTOR_CHARS.map(char => `\\${char}`).join()}]`
  const unsupportedSelectorCharsRegExp = new RegExp(unsupportedSelectorCharsPattern)
  const globalUnsupportedSelectorCharsRegExp = new RegExp(unsupportedSelectorCharsPattern, 'g')
  const negativeReplaceReg = /^-+/

  return {
    name: 'uni-unocss/transformer-uni',
    enforce: 'pre',
    async transform(code, id, ctx) {
      const codeStr = code.toString()

      const { uno, tokens } = ctx
      const { matched } = await uno.generate(codeStr, { preflights: false })

      const matchedList = Array.from(matched)
        .filter(i => unsupportedSelectorCharsRegExp.test(i)
          || !i.includes('=')
          || i.includes('[url('),
        )

      for (const token of matchedList) {
        const noNegativeToken = token.replace(negativeReplaceReg, '')

        const safeToken = token.replace(globalUnsupportedSelectorCharsRegExp, '_a_')
        const noNegativeSafeToken = safeToken.replace(negativeReplaceReg, '')

        const util = await uno.parseToken(token)
        const layer = util?.[0]?.[4]?.layer || 'default'

        uno.config.shortcuts.push([noNegativeSafeToken, noNegativeToken, { layer }])
        tokens.add(noNegativeSafeToken)

        code = code.replaceAll(noNegativeToken, noNegativeSafeToken)
      }

      code.overwrite(0, code.original.length, codeStr)
    },
  }
}
