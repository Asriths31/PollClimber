let a=document.querySelector(".press")
let i=1

a.addEventListener("click",function(){
    document.querySelector(".menu").innerHTML=
    `<div class="navbar">
    <ul>
      <li>WHYTHIS</li>
      <li>COMPONENTS</li>
      <li>WORKING</li>

    </ul>
    </div>
    `


})
document.querySelector(".collapse").addEventListener("click",function(){
    document.querySelector(".menu").innerHTML=
    `<div class="menu">
    <button class="press"><i class="fa-solid fa-bars"></i></button>
    </div>
    `
})
