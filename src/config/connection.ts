import mysql from "mysql2/promise";
// create a pool mysql
const pool = mysql.createPool({
  host: "db",
  user: "root",
  password: "password",
  database: "userdb",
  connectionLimit: 10,
});

export default pool;
