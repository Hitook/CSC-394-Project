const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:potatoes@database-hw3.c7ndfrbojbla.us-east-2.rds.amazonaws.com'
// currently connects to db setup for hw, will change later
const pool = new Pool({
  connectionString,
})

const client = new Client({
  connectionString,
})

module.exports = pool;


export function addUser(username, password, admin){
  var query = 'insert into users (username, password, admin) values(${username}, ${password}, admin);'

  client.connect()
  client.query(query, (err, res) => {
    if (err) {
      return null;
    }
    client.end()
  })

}
