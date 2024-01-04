let popup=document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}
let idobar;
function slanje(gumb)
{
  idobar=gumb.id;
}


let rez=document.getElementById("rezervacija");
function rezerv()
{
  rez.classList.add("rez_st");
}
function rezerv_close()
{
  rez.classList.remove("rez_st");
}

let bojanje1=document.getElementById("stol1");
let bojanje2=document.getElementById("stol2");
let bojanje3=document.getElementById("stol3");
let bojanje4=document.getElementById("stol4");
let bojanje5=document.getElementById("stol5");

function boj1()
{
  if(idobar==bojanje1.id) {
    bojanje1.style.backgroundColor = "#501313";
  }
  else if(idobar==bojanje2.id) bojanje2.style.backgroundColor = "#501313";
  else if(idobar==bojanje3.id) bojanje3.style.backgroundColor = "#501313";
  else if(idobar==bojanje4.id) bojanje4.style.backgroundColor = "#501313";
  else if(idobar==bojanje5.id) bojanje5.style.backgroundColor = "#501313";
}
function boj2()
{
  if(idobar==bojanje1.id) bojanje1.style.backgroundColor = "#2b1253";
  else if(idobar==bojanje2.id) bojanje2.style.backgroundColor = "#2b1253";
  else if(idobar==bojanje3.id) bojanje3.style.backgroundColor = "#2b1253";
  else if(idobar==bojanje4.id) bojanje4.style.backgroundColor = "#2b1253";
  else if(idobar==bojanje5.id) bojanje5.style.backgroundColor = "#2b1253";
  
}
function boj3()
{
  if(idobar==bojanje1.id) bojanje1.style.backgroundColor =  "#0d4f19";
  else if(idobar==bojanje2.id) bojanje2.style.backgroundColor =  "#0d4f19";
  else if(idobar==bojanje3.id) bojanje3.style.backgroundColor =  "#0d4f19";
  else if(idobar==bojanje4.id) bojanje4.style.backgroundColor =  "#0d4f19";
  else if(idobar==bojanje5.id) bojanje5.style.backgroundColor =  "#0d4f19";
  
}
function otvaranjemeni()
{
  
  window.location.href = 'hrana.html';
  let stol1=[];
}

function bris(c)
{
  var e=c.id;
  let elem=document.getElementById(e);
  elem.remove();
}