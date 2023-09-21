import mysql2 from 'mysql2';

const conexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    passoword : '',
    database : 'escola'
});

// Efetivando a conexão
// conexao.connect();
conexao.connect(erro => {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.code}`)
    }else {
        console.log(`Banco de dados conectado com sucesso!`)
    }
    
})
export default conexao;