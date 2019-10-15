const Connection = require('tedious').Connection
const Request = require('tedious').Request
const { connection: connectionCfg } = require('../configs')
const { query, timeslice } = require('../utils')

module.exports = async options =>
  new Promise((res, rej) => {
    let result = []
    const connection = new Connection(connectionCfg)

    connection.on('connect', err => {
      if (err) {
        rej(err)
      } else {
        executeQuery()
      }
    })

    const executeQuery = () => {
      const { client, startDate, endDate, timesliceId } = options
      const config = {
        ...(client ? { client } : { error: 'No client provided' }),
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        ...timeslice(timesliceId)
      }
      if (config && config.error) rej(config.error)

      request = new Request(query(config), err => {
        if (err) {
          rej(err)
        }
      })

      request.on('row', columns => {
        result.push(columns)
      })

      request.on('requestCompleted', () => res(result))
      connection.execSql(request)
    }
  })
