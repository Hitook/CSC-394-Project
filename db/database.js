const { Pool, Client } = require('pg')
const connectionString = 'psql postgres://postgres:potatoes@database-hw3.c7ndfrbojbla.us-east-2.rds.amazonaws.com'
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

