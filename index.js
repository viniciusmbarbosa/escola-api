
//Importando o express
import express from 'express';
import{ ler, inserir } from './src/aluno.js';


const app = express();

// adicionando suporte ao formato json
app.use(express.json()); 

// adicionando suporte a dados via 
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.send(`Raiz da API NodeJS + Express + MySQL`);
});



app.get('/alunos', (req, res) => {
    //res.send(`Exibindo dados de TODOS os alunos`)
    ler(res);
})

app.get('/alunos/:id', (req, res) => {
    res.send(`Exibindo dados de UM aluno`)
})

app.post('/alunos', (req, res) => {
    /* res.send(`Inserindo UM aluno`) */
    const novosAlunos = req.body;
    inserir(novosAlunos, res);
})

app.patch('/alunos/:id', (req, res) => {
    res.send(`Atualizando dados de UM aluno`)
})

//excluindo alunos
app.delete('/alunos/:id', (req, res) => {
    res.send(`Excluindo alunos`)
})



// Executando o servidor
const porta = 8080;
app.listen(porta, () =>{
    console.log(`Servidor NodeJS rodando na porta ${porta}`);

});