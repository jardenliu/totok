module.exports = function(settings, cb) {
  fetch(settings.url, settings)
    .then(res => {
      let response = {
        headers: res.headers.map,
        body: res._bodyInit,
        statusCode: res.status
      }

      if (cb && typeof cb === 'function') {
        cb(null, response, response.body)
      }
    })
    .catch(e => {
      if (cb && typeof cb === 'function') {
        cb(e)
      }
    })
}
