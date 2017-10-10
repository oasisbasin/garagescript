//(array, sum)
/*const last = (arr,i=0)=>{
  const length = arr.length
  if(i==length){
  console.log(arr[length-1]);
   return(arr[length-1]);
  }else{
    last(arr,i+1);
    };
  };

  last([1,2,3])

 
 */
const func=(a,i=0)=>{
  if(i!==a){
    console.log('Say Hello');
  }else{
    return('Say Hello');
  };
  func(a,i+1);
};
func(2);
