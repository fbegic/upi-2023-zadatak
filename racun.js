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
