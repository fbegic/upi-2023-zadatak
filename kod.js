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
    var tekst = document.createTextNode(naziv+" "+cijena);
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

let hrana;
function biranje(b){
  let c=b.parentNode;
  hrana=c;
  console.log(b);
  console.log(c.id);
  var brojNarudzbiElement = c.querySelector('.brojNarudzbi');
  var brojNarudzbi = parseInt(brojNarudzbiElement.textContent);
  if(brojNarudzbi>0)
  { 
    
    let dod=document.getElementById("biranje");
    dod.classList.add("odabrano");
    oduzmiNarudzbu(c);
  }
  
}
let st;
function odabran(c){
    st=c
    console.log(c);
    let dod=document.getElementById("biranje");
    dod.classList.remove("odabrano")
    racun();
}
let Stol1=[];
let Stol2=[];
let Stol3=[];
let Stol4=[];
let Stol5=[];


function racun()
{
    let c=hrana;
    var dodatni=document.createElement('li');
    dodatni.id=c.id;
    var tekst = document.createTextNode(c.id);
    dodatni.appendChild(tekst);
    let lista = document.getElementById(st);
    lista.appendChild(dodatni);
    
    if(st=="Stol1")
    {
      Stol1.push(c.id);
    }
    else if(st=='Stol2')
    {
      Stol2.push(c.id);
    }
    else if(st=='Stol3')
    {
      Stol3.push(c.id);
    }
    else if(st=='Stol4')
    {
      Stol4.push(c.id);
    }
    else if(st=='Stol4')
    {
      Stol4.push(c.id);
    }
    else if(st=='Stol5')
    {
      Stol5.push(c.id);
    }
}
function zaklj(a){
  let st=a.parentNode;
  console.log(st);
  let dod=document.getElementById("zakljucni");
  meni(st);
    dod.classList.add("za")
    
}
function zat(){
    let dod=document.getElementById("zakljucni");
    dod.classList.remove("za")
}

function meni(a)
{
  let st=a.id;
  console.log(st);

  if(st=="Stol1")
    {
      for(let i=0;i<Stol1.length;i++)
      {
      var dodatni=document.createElement('li');
      dodatni.id=Stol1[i];
      var tekst = document.createTextNode(Stol1[i]);
      dodatni.appendChild(tekst);
      let lista = document.getElementById('zakljucni');
      lista.appendChild(dodatni);
      }
    }
    else if(st=='Stol2')
    {
      for(let i=0;i<Stol1.length;i++)
      {
      var dodatni=document.createElement('li');
      dodatni.id=Stol1[i];
      var tekst = document.createTextNode(Stol1[i]);
      dodatni.appendChild(tekst);
      let lista = document.getElementById('zakljucni');
      lista.appendChild(dodatni);
      }
      }
    else if(st=='Stol3')
    {
      for(let i=0;i<Stol1.length;i++)
      {
      var dodatni=document.createElement('li');
      dodatni.id=Stol1[i];
      var tekst = document.createTextNode(Stol1[i]);
      dodatni.appendChild(tekst);
      let lista = document.getElementById('zakljucni');
      lista.appendChild(dodatni);
      }
      
    }
    else if(st=='Stol4')
    {
      for(let i=0;i<Stol1.length;i++)
      {
      var dodatni=document.createElement('li');
      dodatni.id=Stol1[i];
      var tekst = document.createTextNode(Stol1[i]);
      dodatni.appendChild(tekst);
      let lista = document.getElementById('zakljucni');
      lista.appendChild(dodatni);
      }
    }
    else if(st=='Stol4')
    {
      for(let i=0;i<Stol1.length;i++)
      {
      var dodatni=document.createElement('li');
      dodatni.id=Stol1[i];
      var tekst = document.createTextNode(Stol1[i]);
      dodatni.appendChild(tekst);
      let lista = document.getElementById('zakljucni');
      lista.appendChild(dodatni);
      }
    }
    else if(st=='Stol5')
    {
      for(let i=0;i<Stol1.length;i++)
      {
      var dodatni=document.createElement('li');
      dodatni.id=Stol1[i];
      var tekst = document.createTextNode(Stol1[i]);
      dodatni.appendChild(tekst);
      let lista = document.getElementById('zakljucni');
      lista.appendChild(dodatni);
      }
    }
}


let odabraneStavke = [];

function dodajStavku(naziv, cijena) {
    odabraneStavke.push({ naziv, cijena });
    osvjeziOdabraneStavke();
}

function osvjeziOdabraneStavke() {
    const odabranaHranaElement = document.getElementById('odabranaHrana');
    odabranaHranaElement.innerHTML = "";
    odabraneStavke.forEach(stavka => {
        const stavkaElement = document.createElement('li');
        stavkaElement.textContent = `${stavka.naziv} - ${stavka.cijena}$`;
        odabranaHranaElement.appendChild(stavkaElement);
    });
}

function prikaziRacun() {
  // Redirekcija na stranicu za prikaz računa
  window.location.href = 'racun.html';
}
module.exports={dodaj,zatvori,citanje,slanje,bris,dodajNarudzbu,oduzmiNarudzbu,dodajStavku,biranje,zaklj,zat,odabran};

