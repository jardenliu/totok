const crypto = require('react-native-crypto')

const BUFFER_CONCAT = Buffer.concat

Buffer.concat = function concat(list, length) {
  for (let i = 0; i < list.length; i++) {
    if (!Buffer.isBuffer(list[i])) {
      list[i] = new Buffer(list[i])
    }
  }
  return BUFFER_CONCAT(list, length)
}

let randomBytes = crypto.randomBytes

crypto.randomBytes = function(length) {
  return new Buffer(randomBytes(length))
}

crypto.constants = {
  RSA_NO_PADDING: 3
}

module.exports = crypto
