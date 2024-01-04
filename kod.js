
// const { JSDOM } = require('jsdom');
// const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

// // Emulirajte globalni objekt "window" i "document"
// global.window = dom.window;
// global.document = dom.window.document;

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('mojaBaza.db');

// // Kreiranje tablice
// db.serialize(() => {
//   db.run('CREATE TABLE IF NOT EXISTS namjernice (id INTEGER PRIMARY KEY, naziv TEXT, cijena INT,kolicina INT)');

//   // Dodavanje podataka u tablicu
//   const statement = db.prepare('INSERT INTO namjernice (naziv,cijena,kolicina) VALUES (?, ?, ?)');
//   statement.run('Jabuke', 34, 10);
//   statement.run('Jastog', 33, 15);
//   statement.finalize();

//   // Dohvaćanje podataka iz tablice
//   db.each('SELECT id, naziv, cijena, kolicina FROM namjernice', (err, row) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log(row.id, row.naziv, row.cijena, row.kolicina);
//     }
//   });
// });

// // Zatvaranje baze podataka nakon izvršavanja upita
// db.close();
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

//tu je stalo
let dod=document.getElementById("dodavanje");
function dodaj(){
    dod.classList.add("dod_open")
}
function zatvori(){
    dod.classList.remove("dod_open")
}
let prozor;
function sl(a)
{
  prozor=a;
}
function citanje()
{
  const n=document.getElementById("Nazivjela");
  const c=document.getElementById("Cijenajela");
  let v=prozor;
  let naziv=n.value;
  let cijena=c.value;
  if(naziv=="" || cijena=="")
  {
    zatvori();
  }
  else
  {
    var dodatni=document.createElement("li");
    var tekst = document.createTextNode(naziv+" "+cijena);
    dodatni.appendChild(tekst);
    let lista = document.getElementById(idobar);
    lista.appendChild(dodatni);
    
    
  }
}
