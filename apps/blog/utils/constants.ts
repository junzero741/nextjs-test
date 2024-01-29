const env = process.env.NODE_ENV; 
export const DOMAIN = {
  origin: env === 'development' ? 'http://localhost:3000' : 'https://www.junyoung.site'
}