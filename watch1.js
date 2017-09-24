const fs = require('fs');

const c= () =>{
  console.log("ji");
  fs.appendFile('/home/cw/Log.txt',"Vim.txt has been changed", (err) =>{
    console.log("err", err);
  });
};
fs.watchFile('/home/cw/curriculum/vim.txt',c);

