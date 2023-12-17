//ZA Desert
// const sql=require("msnodesqlv8");

// const connestionString="putanja do baze";

// const query="ime svoje tablice iz baze kojoj uzimate podatke";
// sql.query(connestionString,query,(err,rows)=>{
//   console.log(rows);
// })
document.addEventListener('DOMContentLoaded', function() 
 {
   var opcijeDesertaDiv = document.getElementById('opcijeDeserta');

   // Dodajemo event listener na dugme za desert
  var desertBtn = document.getElementById('desert');
   desertBtn.addEventListener('click', function() {
       // Ako opcije deserata već nisu prikazane, prikaži ih; inače, sakrij
       if (opcijeDesertaDiv.style.display === 'none') {
           opcijeDesertaDiv.style.display = 'block';
       } else {
           opcijeDesertaDiv.style.display = 'none';
      }
   });
 });


 //Za Pića
 document.addEventListener('DOMContentLoaded', function() 
 {
   var opcijePićaDiv = document.getElementById('opcijePića');

   // Dodajemo event listener na dugme za desert
  var pićeBtn = document.getElementById('pice');
   pićeBtn.addEventListener('click', function() {
       // Ako opcije deserata već nisu prikazane, prikaži ih; inače, sakrij
       if (opcijePićaDiv.style.display === 'none') {
           opcijePićaDiv.style.display = 'block';
       } else {
           opcijePićaDiv.style.display = 'none';
      }
   });
 });
 
 //Za Predjelaa
 document.addEventListener('DOMContentLoaded', function() 
 {
   var opcijePredjDiv = document.getElementById('opcijePredjela');

   // Dodajemo event listener na dugme za desert
  var predjeloBtn = document.getElementById('predjelo');
   predjeloBtn.addEventListener('click', function() {
       // Ako opcije deserata već nisu prikazane, prikaži ih; inače, sakrij
       if (opcijePredjDiv.style.display === 'none') {
           opcijePredjDiv.style.display = 'block';
       } else {
           opcijePredjDiv.style.display = 'none';
      }
   });
 });


 //Za glavno jelo
 document.addEventListener('DOMContentLoaded', function() 
 {
   var opcijeGlavnojelo = document.getElementById('opcijeGlavnojelo');

   // Dodajemo event listener na dugme za desert
  var glavnoBtn = document.getElementById('glavnoJelo');
   glavnoBtn.addEventListener('click', function() {
       // Ako opcije deserata već nisu prikazane, prikaži ih; inače, sakrij
       if (opcijeGlavnojelo.style.display === 'none') {
           opcijeGlavnojelo.style.display = 'block';
       } else {
           opcijeGlavnojelo.style.display = 'none';
      }
   });
 });


 //za dodavanje vise vrsta na plus
function dodajNarudzbu(element) 
{
  var brojNarudzbiElement = element.parentNode.querySelector('.brojNarudzbi');

  var brojNarudzbi = parseInt(brojNarudzbiElement.textContent);
  brojNarudzbi++;
  brojNarudzbiElement.textContent = brojNarudzbi;
}

//za oduzimanje broja jedne vrste (na minus)
function oduzmiNarudzbu(element) 
{
  var brojNarudzbiElement = element.parentNode.querySelector('.brojNarudzbi');

  var brojNarudzbi = parseInt(brojNarudzbiElement.textContent);
  if (brojNarudzbi > 0) {
      brojNarudzbi--;
      brojNarudzbiElement.textContent = brojNarudzbi;
  }
}

  //popup prozor za rezervaciju stola ili meni

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

let dod=document.getElementById("dodavanje");
function dodaj(){
    dod.classList.add("dod_open")
}
function zatvori(){
    dod.classList.remove("dod_open")
}

class Namjernica{

  constructor(a,b)
  {
    this.naziv=a;
    this.cijena=b;
  }
}
function citanje()
{
  const n=document.getElementById("Nazivjela");
  const c=document.getElementById("Cijenajela");
  let naziv=n.value;
  let cijena=c.value;
  var dodatni=document.createElement("li");
  var tekst = document.createTextNode(naziv+" "+cijena);
  dodatni.appendChild(tekst);
  var lista = document.getElementById("vrstePredjela");
  lista.appendChild(dodatni);
  
}