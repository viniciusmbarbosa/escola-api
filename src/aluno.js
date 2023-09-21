import conexao from './banco.js';

// CRUD

// LER/EXIBIR  todos os alunos do banco de dados

function ler(res) {
    const sql = " SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultado) => {
        // verificação para ver se há conteúdo
        if(resultado.length === 0) {
            res.status(204).end(); // É importante trabalhar com os status http. 204 = sem conteúdo. .end()  encerra a execução. 
            return;
        }
        if(erro){
            res.status(400).json(erro.code); // BAD 400 = Resquest
        }else{
            res.status(200).json(resultado);
        }


    });
}
function inserir(aluno, res){
    const sql = "INSERT INTO alunos SET ?";
    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        }else{
            res.status(201).json({"Status" : "Aluno inserido"});
        }
    });
}

export{ler, inserir};