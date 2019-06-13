const config = require('../resolve.config')
let COMMAND = process && process.env && process.env._ ? process.env._ : ''

let RN_ENV =
  process && process.env && process.env.RN_PLATFORM
    ? process.env.RN_PLATFORM
    : ''
RN_ENV = RN_ENV.toLowerCase()

const isReactNativeMacos = COMMAND.includes('macos') || RN_ENV.includes('macos')

module.exports = {
  presets: ['react-native'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native': isReactNativeMacos
            ? 'react-native-macos'
            : 'react-native',
          ...config.alias
        }
      }
    ]
  ]
}
