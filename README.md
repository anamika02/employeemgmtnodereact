# employeemgmgtnodereact

Employee Management

NodeJS , React and Mysql based

Steps to install mysql on docker

1. docker pull mysql:5.7.22
2. docker run --name=mysql1 -d --env="MYSQL_ROOT_PASSWORD=passw0rd" -p 3307:3306 mysql:5.7
3. docker exec -it mysql1 mysql -u root -p 
4. mysql prompt - 
	- show databases;
	- use employee.sql and run each command

Steps to configure and start nodejs server

1. change to directory - employeemgmtnodereact  - 

    yarn install  ( install all required packages)
    start node server - PORT=3001 node ./bin/www
    
Steps to configure and start react app

    cd employeemgmtnodereact/client
    yarn install
    yarn start