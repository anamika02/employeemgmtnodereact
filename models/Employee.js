var db=require('../dbconnection');


var Employee={

getAllEmployees:function(callback){

return db.query("Select * from EMPLOYEE",callback);

},
getEmployeeById:function(id,callback){

    return db.query("select * from EMPLOYEE where ID=?",[id],callback);
},
getSalaryByCompany:function(company,callback){
    console.log(company);
    
    return db.query("select SUM(salary) from EMPLOYEE where company=?",[company],callback);
},
addEmployee:function(Employee,callback){
   console.log("inside add employee service");
   console.log(Employee);
   console.log(Employee.employeeBeingAddedOrEdited);
   
return db.query("Insert into EMPLOYEE (firstName,lastName,address,company,salary) values(?,?,?,?,?)",[Employee.employeeBeingAddedOrEdited.firstName,Employee.employeeBeingAddedOrEdited.lastName,Employee.employeeBeingAddedOrEdited.address,Employee.employeeBeingAddedOrEdited.company,Employee.employeeBeingAddedOrEdited.salary],callback);

},
deleteEmployee:function(id,callback){
    
    return db.query("delete from EMPLOYEE where ID=?",[id],callback);
},
updateEmployee:function(id,Employee,callback){
    return  db.query("update employee set firstName=?,lastName=?, address=? , company=? , salary=? where ID=?",[Employee.firstName,Employee.lastName,Employee.address,Employee.company,Employee.salary,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from employee where Id in (?)",[delarr],callback);
}
};
module.exports=Employee;