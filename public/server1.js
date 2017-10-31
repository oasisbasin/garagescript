const submitB = document.getElementById('button');
submitB.onclick=()=>{
const XML = new XMLHttpRequest();
let nameV = document.getElementById('name').value;
let commentV = document.getElementById('comment').value;
  XML.open('get', `/test?name=${nameV}&comment=${commentV}`);
  XML.send();
};




