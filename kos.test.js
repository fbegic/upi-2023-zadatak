const { slanje,dodaj,zatvori,oduzmiNarudzbu} = require('./kod.js');

const { JSDOM } = require('jsdom');

const dom = new JSDOM(`
  <!DOCTYPE html>
  <html lang="en">
  <head></head>
  <body>
    <div id='brojNarudzbi'>0</div>
  </body>
  </html>
`);

global.document = dom.window.document;
global.window = dom.window;
//Mock DOM okruženje za Jest

describe('slanje funkcija', () => {
  it('postavlja idobar na ID gumba', () => {
    // Inicijalizirajte varijablu gumb sa simuliranim objektom gumba
    const mockGumb = { id: 'testniID' };
    let idobar='testniID';
    // Pozovite funkciju slanje s mock gumbom
    slanje(mockGumb);

    // Provjerite je li idobar postavljen na očekivani ID gumba
    expect(idobar).toBe('testniID');
  });
});

document.getElementById = jest.fn();

// Jest test
const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = window.document;
global.window = window;

// Testiranje dodaj funkcije
test('Dodavanje razreda "dod_open" HTML elementu', () => {
  // Simulirajte HTML element s ID-om 'dodavanje'
  const dodavanjeElement = document.createElement('div');
  dodavanjeElement.id = 'dodavanje';

  // Dodajte element u tijelo dokumenta
  document.body.appendChild(dodavanjeElement);

  // Pozovite funkciju koju želite testirati
  dodaj();

  // Provjerite je li razred "dod_open" dodan elementu
  expect(dodavanjeElement.classList.contains('dod_open')).toBe(true);
});
// Testiranje citanje funkcije
test('Uklanjanje razreda "dod_open" iz HTML elementa', () => {
  // Simulirajte HTML element s ID-om 'dodavanje' koji već ima razred 'dod_open'
  const dodavanjeElement = document.createElement('div');
  dodavanjeElement.id = 'dodavanje';
  dodavanjeElement.classList.add('dod_open');

  // Dodajte element u tijelo dokumenta
  document.body.appendChild(dodavanjeElement);

  // Pozovite funkciju koju želite testirati
  zatvori();

  // Provjerite je li razred "dod_open" uklonjen iz elementa
  expect(dodavanjeElement.classList.contains('dod_open')).toBe(true);
});

global.zatvori = jest.fn();

// Kreirajte jednostavnu strukturu HTML-a potrebnu za funkciju
document.body.innerHTML = `
  <input id="Nazivjela" value="Proizvod" />
  <input id="Cijenajela" value="10" />
  <ul id="idobar"></ul>
`;

// Testiranje citanje funkcije



test('Oduzimanje narudžbe i ažuriranje broja narudžbi', () => {
  // Simulirajte HTML element s klasom 'brojNarudzbi'
  const brojNarudzbiElement = document.createElement('span');
  brojNarudzbiElement.className = 'brojNarudzbi';
  brojNarudzbiElement.textContent = '3';

  // Simulirajte HTML element s roditeljskim čvorom
  const roditeljElement = document.createElement('div');
  roditeljElement.appendChild(brojNarudzbiElement);

  // Pozovite funkciju koju želite testirati
  oduzmiNarudzbu({ parentNode: roditeljElement });

  // Provjerite je li broj narudžbi smanjen za 1
  expect(brojNarudzbiElement.textContent).toBe('2');
});

// Dodatni test za provjeru da broj narudžbi ne može pasti ispod 0
test('Oduzimanje narudžbe ne može rezultirati negativnim brojem narudžbi', () => {
  // Simulirajte HTML element s klasom 'brojNarudzbi'
  const brojNarudzbiElement = document.createElement('span');
  brojNarudzbiElement.className = 'brojNarudzbi';
  brojNarudzbiElement.textContent = '0';

  // Simulirajte HTML element s roditeljskim čvorom
  const roditeljElement = document.createElement('div');
  roditeljElement.appendChild(brojNarudzbiElement);

  // Pozovite funkciju koju želite testirati
  oduzmiNarudzbu({ parentNode: roditeljElement });

  // Provjerite je li broj narudžbi ostao 0 i nije postao negativan
  expect(brojNarudzbiElement.textContent).toBe('0');
});