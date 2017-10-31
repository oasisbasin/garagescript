const express = require('express');
const fs = require('fs');
const app =express();
app.listen(3142, ()=> console.log('server running 3142'));
/* allows your browser to use anything that is in the public folder */

app.use(express.static('public'));
/* writes name and comment into the text file */

app.get('/test', (req,res)=>{
 const name = req.query.name;
  const comment = req.query.comment;
  fs.appendFile('/home/cw/curriculum/input.txt',name+comment);
  res.send('success');
});



