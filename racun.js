const nam=require('./kod');

function ispis()
{
    for(let i=0;i<nam.leight;i++)
    {
        var dodatni=document.createElement("li");
        dodatni.id=naziv;
        var tekst = document.createTextNode(nam[i]);
        dodatni.appendChild(tekst);
        let lista = document.getElementById('racun-lista');
        dodatni.innerHTML = nam[i]+'<span class="brojNarudzbi">0</span> <span class="dugmeDodaj" onclick="dodajNarudzbu(this)">+</span> <span class="dugmeOduzmi" onclick="oduzmiNarudzbu(this)">-</span><span id="cijena">25</span><img class="smece" id="smece" onclick="bris(this.parentNode)" src="smece.png" />';
        lista.appendChild(dodatni);
    }
    
  }

document.addEventListener('DOMContentLoaded', function () {
    const odabraneStavke = [];

    function dodajNaRacun(stavka) {
        odabraneStavke.push(stavka);
        osvjeziRacun();
    }

    function osvjeziRacun() {
        const racunLista = document.getElementById('racun-lista');
        const ukupnoElement = document.getElementById('ukupno');
        
        // Isprazni trenutni prikaz računa
        racunLista.innerHTML = '';
        
        let ukupno = 0;

        // Dodaj odabrane stavke na prikaz računa
        odabraneStavke.forEach(function (stavka) {
            const stavkaElement = document.createElement('li');
            stavkaElement.textContent = stavka.naziv + ' - ' + stavka.cijena + '$';
            racunLista.appendChild(stavkaElement);

            ukupno += stavka.cijena;
        });

        // Prikazi ukupan iznos
        ukupnoElement.textContent = 'Ukupno: ' + ukupno + '$';
    }

    // Funkcija koja se poziva nakon klika na tipku Zaključak
    function zakljucak() {
        // Ovdje pretpostavljamo da imate formu s ID-om 'forma'
        const forma = document.getElementById('forma');

        // Dohvati odabrane opcije hrane i pića iz forme
        const odabranaHrana = forma.elements['food'].value;
        const odabranoPice = forma.elements['opcijePića'].value;

        // Dodaj odabrane stavke na račun
        dodajNaRacun({ naziv: 'Hrana: ' + odabranaHrana, cijena: parseInt(odabranaHrana) });
        dodajNaRacun({ naziv: 'Piće: ' + odabranoPice, cijena: parseInt(odabranoPice) });
    }

    // Postavljanje event listenera za tipku Zaključak
    const zakljucakTipka = document.getElementById('zakljucak-tipka');
    zakljucakTipka.addEventListener('click', zakljucak);
});

