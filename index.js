
//Importando o express
import express from 'express';
import{ ler, inserir, lerUM, atualizar, excluir} from './src/aluno.js';


const app = express();
const porta = process.env.PORT ||  3306;

// adicionando suporte ao formato json
app.use(express.json()); 

// adicionando suporte a dados via 
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.redirect(`https://documenter.getpostman.com/view/29885803/2s9YJZ34cm`);
});



app.get('/alunos', (req, res) => {
    //res.send(`Exibindo dados de TODOS os alunos`)
    ler(res);
})

app.get('/alunos/:id', (req, res) => {
    /* res.send(`Exibindo dados de UM aluno`) */
    const id = parseInt(req.params.id);
    lerUM(id,res);
})

app.post('/alunos', (req, res) => {
    /* res.send(`Inserindo UM aluno`) */
    const novosAlunos = req.body;
    inserir(novosAlunos, res);
})

app.patch('/alunos/:id', (req, res) => {
    /* res.send(`Atualizando dados de UM aluno`) */
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id,aluno, res); 
    
})

//excluindo alunos
app.delete('/alunos/:id', (req, res) => {
    /* res.send(`Excluindo alunos`) */
    const id = parseInt(req.params.id);
    excluir(id, res)
})



// Executando o servidor

app.listen(porta, () =>{
    console.log(`Servidor NodeJS rodando na porta ${porta}`);

});