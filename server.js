const express = require('express');
const fs = require('fs');
const app =express();
app.listen(3109);
/* allows your browser to use anything that is in the public folder */

app.use(express.static('public'));
/* writes name and comment into the text file */

const writeFile = (req,rsp) => {
  fs.appendFile('/home/cw/curriculum/input.txt', `name: ${req.query.name} comment: ${req.query.comment}`);
  rsp.send('success');
}
  
/* listen to the browser's request and call the writeFile function */
app.get('/test', writeFile);


