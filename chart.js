// const { CleaningServices } = require('@mui/icons-material');
let express = require('express')
let App= express();

App.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    next();
})

let profit=

{
    inox:100000,
    pvr:65789,
    others:98869
}

App.get('/profit',(req,res)=>{
    res.send(profit);

})


App.listen(4000,()=>{
    console.log(`server is running,,,,....`)
})