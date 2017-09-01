// -------------------------------------------------------------------
// PASSO A PASSO - ENVIO DO EXERCÍCIO
// -------------------------------------------------------------------

// 1 - Clone o repositorio do seu usuário github
// 	git clone https://github.com/seu-usuario/dbfilmes.git 
// 2 - Entre na pasta que foi clonada
//	cd pasta
// 3 - Configura seu usuario e senha
//	git config user.name "Seu nome"
//	git config user.email "seuemail@email.com"
// 4 - Crie um novo arquivo "seu-nome-exercicioConsulta.js"
// 5 - Adicione o arquivo no git
//	 git add seu-nome-trabalho.md
// 6 - Comite o documento
//	 git commit -m "Escreva uma mensagem"
// 7 - Envie as alterações para o github
//	 git push -u
// 8 - Digite seu nome de usuário do github, depois digite a senha do usuário
// 9 - No seu repositório do github, clique no botão "New pull request"
// 10 - Depois clique no botão "Create pull request"


//--------------------------------------------------------------------
// EXERCICIOS CONSULTAS
//--------------------------------------------------------------------

// 01 - Filmes de ação lancados entre 2000 e 2003.
db.filmes.find({generos:{$in:["Action"]},data_estreia:{$gte:new Date(2000,1,1)
,$lte:new Date(2003,12,31)}},{_id:0,titulo:1,data_estreia:1,generos:1}).pretty()

// 02 - Filmes de comedia ou terror com menos de 2 horas.
db.filmes.find({$or:[{generos:{$in:["Comedy"]}},{Generos:{$in:["Horror"]}}],
duracao:{$lt:120}},{_id:0,titulo:1,duracao:1,generos:1}).pretty()

// 03 - Filmes onde bruce willis atuou.
db.filmes.find({atores:{$in:["Bruce Willis"]}},
{_id:0,titulo:1,generos:1,atores:1}).pretty()

// 04 - Quantos filmes arrecadarão mais de 1 milhao.
 db.filmes.count({arrecadacao:{$gt:1000000}})

// 05 - Quais os diretores dos 10 filmes com maior arrecadação.
db.filmes.find({},{_id:0,arrecadacao:1,titulo:1,genero:1}).sort({arrecadacao:-1}).limit(10)

// 06 - Filmes dirigidos por Steven Spierlberg na decada de 90.
db.filmes.find({diretores:{$in:["Steve Spierlberg"]},data_estreia:{$gte:new Date(1990,1,1),
$lte:new Date(1999,12,31)}},{_id:0,titulo:1,diretores:1,data_estreia:1})

// 07 - Qual o filmes com mais de 3 horas que teve a maior arrecadação.
db.filmes.find({duracao:{$gt:180}},{_id:0,titulo:1,arrecadacao:1}).
sort({arrecadacao:-1}).limit(1)

// 08 - Quantos diretores diferentes tivemos em 2005.
db.filmes.count({data_estreia:{$gte:new Date(2005,1,1),$lte:new Date(2005,12,31)}})

// 09 - Quais os atores de filmes de ação e comedia de 2010.
db.filmes.distinct("atores",{generos:{$in:["Action"],$in:["Comedy"]},
data_estreia:{$gte:new Date(2010,1,1),$lte:new Date(2010,12,31)}})
// 10 - Qual o filme com Brad Pitt com maior duração.
db.filmes.find({atores:{$in:["Brad Pitt"]}},
{_id:0,atores:1,arrecadacao:1}).sort({arrecadacao:-1}).limit(1)