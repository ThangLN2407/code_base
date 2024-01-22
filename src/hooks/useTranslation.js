import { useTranslation as useTranslationLib } from 'react-i18next'
import { useCallback } from 'react'

export const useTranslation = () => {
  const { t, i18n } = useTranslationLib()

  return {
    i18n,
    t: useCallback(
      (key, otps) => {
        const inErr = key.includes('error')
        return !i18n.exists(key) && inErr ? t('error:network') : t(key, otps)
      },
      [i18n, t],
    ),
  }
}
