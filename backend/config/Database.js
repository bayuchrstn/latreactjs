import { Sequelize } from "sequelize";

const db = new Sequelize('cobajs','root','',{
    host: "localhost",
    dialect: "mysql"
});
export default db;