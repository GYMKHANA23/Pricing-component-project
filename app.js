const button = document.querySelector('#switch');
const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3');


button.addEventListener('click' ,()=>{

  if(price1.innerText ==='199.9'){
    price1.innerText = '100';
  }
  else{
    price1.innerText = '199.9';
  }
  if(price2.innerText === "249.99"){
    price2.innerText = '200';
  }
  else{
    price2.innerText = '249.99';
  }
  if(price3.innerText === "399.99"){
    price3.innerText = '400';
  }
  else{
    price3.innerText = '399.99';
  }

});
