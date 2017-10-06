const fs = require('fs')
const get = (err, Name)=>{
  Name.forEach((e) => {
    let names = " ";
    if(e !== 'cw') {
      names = names + e;
   console.log(names);
    };
  });
};

fs.readdir('/home', get);


