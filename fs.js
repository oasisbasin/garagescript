const fs = require('fs')
const get = (err, Name)=>{
  Name.forEach((e) => {
    let names = " ";
    if(e !== 'cw') {
      names = names + e;
   console.log(names);
    } else {
      names = names;
    };
  });
};

fs.readdir('/home', get);


