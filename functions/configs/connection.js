module.exports = {
  authentication: {
    options: {
      userName: process.env.APP_DB_USERNAME,
      password: process.env.APP_DB_PASSWORD
    },
    type: 'default'
  },
  server: process.env.APP_DB_SERVER,
  options: {
    database: process.env.APP_DB_NAME,
    encrypt: true
  }
}
