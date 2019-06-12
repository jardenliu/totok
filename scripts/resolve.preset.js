const config = require('../resolve.config')
let COMMAND = process && process.env && process.env._ ? process.env._ : ''

if (process.env.NODE_ENV === 'production') {
  COMMAND =
    process && process.env && process.env.RN_PLATFORM
      ? process.env.RN_PLATFORM
      : ''
  COMMAND = COMMAND.toLowerCase()
}

const isReactNativeMacos = COMMAND.includes('macos')

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
