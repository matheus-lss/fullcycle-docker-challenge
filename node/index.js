const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

insertPeople(connection);

app.get("/", (req, res) => {
  getPeople(res, connection);
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});

async function insertPeople(connection) {
  const insert = `INSERT INTO people(name) VALUES 
  ('Emerson'),
  ('Maria'),
  ('Everaldo');`;

  connection.query(insert);
  console.log("Dados inserido no banco!");
}

function getPeople(res, connection) {
  const sql = "SELECT id, name FROM people";

  connection.query(sql, (error, results, fields) => {
    if (error) {
      throw error;
    }

    let table = "<table>";
    table += "<tr><th>ID</th><th>Nome</th></tr>";
    for (let people of results) {
      table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
    }

    table += "</table>";
    res.send("<h1>Full Cycle Rocks!</h1>" + table);
  });

  connection.end();
}
