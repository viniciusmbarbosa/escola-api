
//Importando o express
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(`Raiz da API NodeJS + Express + MySQL`);
});

app.get('/alunos', (req, res) => {
    res.send(`alunos`)
})

app.get('/alunos/id:', (req, res) => {
    res.send(`alunos`)
})

app.post('/alunos', (req, res) => {
    res.send(`Inserindo UM aluno`)
})

app.patch('/alunos/id:', (req, res) => {
    res.send(`Atualizando dados de UM aluno`)
})

//excluindo alunos
app.delete('/alunos/id:', (req, res) => {
    res.send(`Excluindo alunos`)
})

// Executando o servidor
const porta = 8080;
app.listen(porta, () =>{
    console.log(`Servidor NodeJS rodando na porta ${porta}`);

});