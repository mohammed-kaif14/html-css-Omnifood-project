'use strict';

function changeBg(){
  let navbar = document.getElementById('navbar');
  let scrollValue = window.scrollY;
  if(scrollValue > 100){
    navbar.classList.add('changeBg')
  }
  else{
    navbar.classList.remove('changeBg');
  }
}

window.addEventListener('scroll',changeBg);

let sidebar = document.getElementById('sidebar')
document.getElementById('bars').addEventListener('click',()=>{
  sidebar.style.display = "flex";
})

function side(){
  sidebar.style.display = "none";
}

document.getElementById('xmark').addEventListener('click',()=>{
  side();
})