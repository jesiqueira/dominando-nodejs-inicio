# dominando-nodejs-inicio

Comando iniciais.

# Iniciar o projeto com yarn

yarn init -y

# Add express

yarn add express

# rodar servidor

node index ou arquivo de configuração do servidor

# instalar nodemon

yarn add nodemon -D para adicionar como dependencia de desenvolvimento

# Executar servicor com nodemon

npx nodemon arquivo.js de configuração do server.

# criar script no package.json para executar o nodemon via yarn

"scripts": {
"dev": "nodemon index.js"
}

# após colocar o script é só executar o comando com yarn para executar o servidor

yarn dev
