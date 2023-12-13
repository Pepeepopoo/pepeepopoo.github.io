const {Client } = require('pg')
const client = new Client({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "basa"

})
module.exports = client

client.query('Select * from users',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
});