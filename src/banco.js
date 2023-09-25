/* import mysql2 from 'mysql2';

const conexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    passoword : '',
    database : 'escola'
}); */

//BANCO DE DADOS DB4FREE

const conexao = mysql2.createConnection({
    host : 'DB4FREE.NET',
    user : 'senaquinho',
    passoword : 'Senac*123',
    database : 'apiescola1'
})
// Efetivando a conexão
// conexao.connect();
conexao.connect(erro => {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.code}`)
    }else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`); 
    }
    
})
export default conexao;