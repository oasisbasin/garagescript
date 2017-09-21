const add=require('./add.js');
const test = (a,b,sum)=>{
  if(sum === add(a,b)) {
    console.log('Pass');
  }else{
    console.log('Fail');
  };
}
test(1,2,3);
test(1,1,3);

