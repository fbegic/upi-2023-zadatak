
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mojaBaza.db');

// Kreiranje tablice
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS namjernice (id INTEGER PRIMARY KEY, naziv TEXT, cijena INT,kolicina INT)');

  // Dodavanje podataka u tablicu
  const statement = db.prepare('INSERT INTO namjernice (naziv,cijena,kolicina) VALUES (?, ?, ?)');
  statement.run('Jabuke', 34, 10);
  statement.run('Jastog', 33, 15);
  statement.finalize();

  // Dohvaćanje podataka iz tablice
  db.each('SELECT id, naziv, cijena, kolicina FROM namjernice', (err, row) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(row.id, row.naziv, row.cijena, row.kolicina);
    }
  });
});

// Zatvaranje baze podataka nakon izvršavanja upita
db.close();