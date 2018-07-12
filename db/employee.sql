SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE employeedb
CREATE TABLE IF NOT EXISTS employeedb.EMPLOYEE (
     ID int NOT NULL AUTO_INCREMENT,
     firstName varchar(20) NOT NULL,
     lastName varchar(255),
     address varchar(255),
     company varchar(255),
     salary DECIMAL(13,4),
     PRIMARY KEY (ID)
)AUTO_INCREMENT=100;

INSERT INTO employeedb.EMPLOYEE (firstName,lastName,address,company,salary) values ('Anamika','Singh', 'chappaqua,ny','IBM','160000');
INSERT INTO employeedb.EMPLOYEE (firstName,lastName,address,company,salary) values ('Anca','Sailer','scarsdale','IBM','180000');
INSERT INTO employeedb.EMPLOYEE (firstName,lastName,address,company,salary) values ('Ramesh','thumma','newjersey','Google','200000');
