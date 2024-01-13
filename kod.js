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

//   //popup prozor za rezervaciju stola ili meni

// //tu je stalo

function dodaj(){
  let dod=document.getElementById("dodavanje");
    dod.classList.add("dod_open")
}
function zatvori(){
    let dod=document.getElementById("dodavanje");
    dod.classList.remove("dod_open")
}

var idobar;
function slanje(gumb)
{
  idobar=gumb.id;
}

function citanje()
{
  const n=document.getElementById("Nazivjela");
  const c=document.getElementById("Cijenajela");
  let naziv=n.value;
  let cijena=c.value;
  if(naziv=="" || cijena=="")
  {
    zatvori();
  }
  else
  {
    var dodatni=document.createElement("li");
    dodatni.id=naziv;
    var tekst = document.createTextNode(naziv);
    dodatni.appendChild(tekst);
    let lista = document.getElementById(idobar);
    dodatni.innerHTML = naziv+" "+cijena+'<span class="brojNarudzbi">0</span> <span class="dugmeDodaj" onclick="dodajNarudzbu(this)">+</span> <span class="dugmeOduzmi" onclick="oduzmiNarudzbu(this)">-</span><span id="cijena">25</span><img class="smece" id="smece" onclick="bris(this.parentNode)" src="smece.png" />';
    lista.appendChild(dodatni);
  }
}

function bris(c)
{
  var e=c.id;
  let elem=document.getElementById(e);
  elem.remove();
}

module.exports={dodaj,zatvori,citanje,slanje,bris,dodajNarudzbu,oduzmiNarudzbu};