const a = require('express');
const app =a();
app.listen(3109);
const c=(req,rsp)=>{
  const fs = require('fs');
  fs.readdir('/home',(err,data)=>{
   let name = "";
    data.forEach((e)=>{
      if(e!=='cw'){
        name = name + e + '<br />';
        };
    });
      rsp.send(name);
  if(err) throw err;
  });
};
  
app.get('/name',c);


