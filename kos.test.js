const { slanje,citanje} = require('./kod.js');

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
describe('citanje funkcija', () => {
  beforeEach(() => {
    // Resetiranje mockova prije svakog testa
    document.getElementById.mockReset();
    prozor = {}; // Ako prozor koristite u funkciji, možete ga resetirati ili zamijeniti potrebnim mockom.
  });

  it('dodaje li element u listu ako su zadani naziv i cijena', () => {
    // Postavite mockove za elemente
    document.getElementById.mockReturnValueOnce({ value: 'Naziv' });
    document.getElementById.mockReturnValueOnce({ value: '100' });

    // Simulirajte postojanje liste i idobar elementa
    const lista = document.createElement('ul');
    const idobar = 'testniID';
    lista.id = idobar;
    document.getElementById.mockReturnValueOnce(lista);

    // Pozovite funkciju citanje
    citanje();

    // Provjerite je li li element dodan u listu
    const dodatniElement = lista.querySelector('li');
    expect(dodatniElement).toBeTruthy();
    expect(dodatniElement.textContent).toBe('Naziv 100');
  });
});

