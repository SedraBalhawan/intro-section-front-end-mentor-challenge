const f = document.getElementById("f");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const c = document.getElementById("c");
const big = document.getElementById("big");
const n = document.getElementById("n");
const nav = document.getElementById("nav");
const image = document.getElementById("image");
const nav4 = document.getElementById("nav4");
const icon = document.getElementById("icon");
const others = document.getElementById("others");
const login = document.getElementById("login");
const na = document.getElementsByClassName('na');
f.onclick = function(){
  nav2.classList.toggle('active');
  //big.classList.toggle('active');
  f.classList.toggle('active');
};
c.onclick = function(){
  nav3.classList.toggle('active');
  //big.classList.toggle('active');
  c.classList.toggle('active');
};
image.onclick = function(){
  nav.classList.add('active');
  nav4.classList.add('active');
  icon.classList.add('active');
  others.classList.add('active');
  login.classList.add('active');
  nav.classList.remove('disappear');
  na.classList.add('active');
}
icon.addEventListener('click', function(){
  nav.classList.add('disappear')}
);
//icon.addEventListener('click', function(e){
 //let clicked = e.target;
//  if(!clicked.classList.contains("icon") {
//    icon.classList.remove("disappear")
//  })
//})
