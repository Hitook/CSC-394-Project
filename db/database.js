const { Pool, Client } = require('pg')
const connectionString = ''
// currently connects to db setup for hw, will change later
const pool = new Pool({
  connectionString,
})

const client = new Client({
  connectionString,
})

client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

module.exports = pool;

