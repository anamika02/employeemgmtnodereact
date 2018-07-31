;
var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'passw0rd',
database:'employeedb'


});
module.exports=connection;