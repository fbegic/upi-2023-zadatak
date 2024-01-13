
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


 document.addEventListener('DOMContentLoaded', function() 
 {
   var opcijeDodaci = document.getElementById('opcijeDodaci');

   // Dodajemo event listener na dugme za dodaci
  var DodBtn = document.getElementById('dodaci');
   DodBtn.addEventListener('click', function() {
       // Ako opcije dodataka već nisu prikazane, prikaži ih; inače, sakrij
       if (opcijeDodaci.style.display === 'none') {
           opcijeDodaci.style.display = 'block';
       } else {
           opcijeDodaci.style.display = 'none';
      }
   });
 });