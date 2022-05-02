import createCache from '@emotion/cache'

export const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true })
}

export default createEmotionCache
