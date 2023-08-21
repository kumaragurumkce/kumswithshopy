<<<<<<< HEAD
let btn = document.querySelector('.Cartbtn i');
let clicks=0;
btn.addEventListener('click', function (){
   if(clicks%2===0){
     btn.style.color='green'
   }
else{
    btn.style.color='red'
}
clicks++;

});

let optionCart=document.getElementsByClassName('Cartbtn')
function cartPop(){
  console.log("okknow");
=======
let btn = document.querySelector('.Cartbtn i');
let clicks=0;
btn.addEventListener('click', function (){
   if(clicks%2===0){
     btn.style.color='green'
   }
else{
    btn.style.color='red'
}
clicks++;

});

let optionCart=document.getElementsByClassName('Cartbtn')
function cartPop(){
  console.log("okknow");
>>>>>>> b587389391ce3fab86f7f09a116d240daae32c2c
}