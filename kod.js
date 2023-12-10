//ZA Desert
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