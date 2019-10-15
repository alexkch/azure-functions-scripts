const HttpStatus = require('http-status-codes')

module.exports = {
  _200: {
    status: HttpStatus.OK
  },
  _400: {
    status: HttpStatus.BAD_REQUEST,
    body: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST)
  },
  _404: {
    status: HttpStatus.NOT_FOUND,
    body: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
  },
  _500: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    body: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}
