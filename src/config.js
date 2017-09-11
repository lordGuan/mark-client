export const SERVER_URL = (process.env.NODE_ENV === 'production')
  ? 'http://10.1.4.107:8004' : 'http://localhost:8004'

export const LOCAL_URL = (process.env.NODE_ENV === 'production')
  ? 'http://10.1.4.107:8004/json' : 'http://localhost:8080/static/json'

// Cookie需要一个域名进行存储
export const CookieDomain = (process.env.NODE_ENV === 'production')
  ? 'localhost'
  : ''

// 设置Cookie的过期时间
export const CookieExpire = (process.env.NODE_ENV === 'production')
  ? '30m'
  : '30m'
