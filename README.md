# Listagem de provas

Esta aplicação teste contém lista de provas e filtros.
Para essa aplicação, foi usado AngularJS, Gulp, Sass, Bootstrap (apenas CSS, parte dele).

Abaixo segue todas as necessárias para rodar o app na versão de desenvolvimento.

### Requisitos:

* Node.js
* NPM
* Gulp (sudo npm install -g gulp)
* Angularj JS 1.6
* Diretiva para paginação (ainda em teste) https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination

Para iniciar o projeto, utilize o comando `npm install` para instalar as demais dependências abaixo:
* angular
* bootstrap
* browser-sync
* gulp
* gulp-concat
* gulp-cssmin
* gulp-gh-pages
* gulp-if
* gulp-imagemin
* gulp-ngmin
* gulp-rename
* gulp-sass
* gulp-uglify
* gulp-useref

Para gerar versão de build, execute a task do Gulp `gulp build`
(esta task minifica e concatena css, js e imagens).

Para rodar a versão de desenvolvimento, execute a task `gulp watch` que atualiza no navegador alterações feitas durante o desenvolvimento.

Dúvidas a respeito das tasks, consultar arquivos gulpfile.js.
