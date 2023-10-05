const express = require("express");

const server = express();

server.get("/hello", (req, res) => {
  const nome = req.query.nome;
  return res.json({
    title: "Hello WOrld",
    message: `Olá ${nome}, tudo bem?`,
  });
});

server.listen(3000);
