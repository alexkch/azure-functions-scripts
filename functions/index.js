const { queryService } = require('./services')
const { httpStatus } = require('./configs')

module.exports = async (context, req) => {
  context.log('HTTP trigger to start functions')
  context.log(req.query)

  if (req.method !== 'GET') {
    return httpStatus._400
  } else {
    return queryService(req.query)
      .then(([res]) => {
        context.log(res)
        return {
          ...httpStatus._200,
          body: {
            result: res[0].value
          }
        }
      })
      .catch(err => {
        context.log(err)
        return httpStatus._500
      })
  }
}
