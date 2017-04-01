const crypto = require('crypto')

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRegex = /^[\w0-9]{6,12}$/
const hasNumberRegex = /[0-9]/

function isEmail(email) {
  if (typeof email !== 'string') return false
  return emailRegex.test(email)
}

function isPasswordFormat(password) {
  if (typeof password !== 'string') return false
  return passwordRegex.test(password) && hasNumberRegex.test(password)  
}

function hashString(str) {
  const hash = crypto.createHash('sha256')
  
  hash.update(str)
  return hash.digest('hex')
}

function randomString(len) {
  // NOTE: extra 1 byte for odd number
  const b = crypto.randomBytes((len & 1 ? len + 1 : len) / 2).toString('hex')

  // NOTE: for odd number to slice the length
  return b.substr(0, len)
}

module.exports = {
  isEmail,
  isPasswordFormat,
  hashString,
  randomString,
}
