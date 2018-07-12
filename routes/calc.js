
var express = require('express');
var router = express.Router();
var Employee=require('../models/Employee');

router.get('/:id?',function(req,res,next){
    console.log(req.params.id);
    if(req.params.id){
        Employee.getSalaryByCompany(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }
});


module.exports=router;