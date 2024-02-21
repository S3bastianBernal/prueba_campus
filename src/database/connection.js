import mysql from 'promise-mysql'
import config from './config.js'

console.log(config);

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const dbconnection = () =>{
    return connection
};

export default dbconnection;