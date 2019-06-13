module.exports = function(settings, cb) {
  fetch(settings.url, settings)
    .then(res => {
      console.log(res)
      let response = {
        headers: res.headers.map,
        body: res._bodyInit,
        statusCode: res.status
      }
      console.log('TCL: response', response)

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
