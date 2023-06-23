const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const { exec } = require("child_process");
const fs = require('fs');


const app = express();
app.use(cors());
const port = 80;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'dmarc',
  password: 'Uy2G9Fgxk',
  database: 'dmarc'
});

db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});


app.get('/uploads/count', (req, res) => {
  fs.readdir('./uploads', (err, files) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send({ count: files.length });
  });
});

app.post('/upload', upload.single('file'), (req, res) => {
  // Exécuter le programme Python avec le fichier téléchargé comme argument
  exec(`./report-parser.pl -x ${req.file.path}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      res.status(500).send(error.message);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      res.status(500).send(stderr);
      return;
    }
    console.log("uploaded");
    // Envoyer la sortie du programme Python en réponse
    res.send(stdout);
  });
});


// Marquer un enregistrement comme traité
app.put('/rptrecord/treated/:id', (req, res) => {
  const id = req.params.id;
  db.query('UPDATE rptrecord SET treated = 1 WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// Supprimer un enregistrement
app.delete('/rptrecord/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM rptrecord WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
	console.log("successfully deleted");
});


app.get("/", (req, res) => {
  db.query("SELECT * FROM rptrecord", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
