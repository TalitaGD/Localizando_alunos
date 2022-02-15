const alunos = ["João", "Juliana", "Caio", "Ana"]
const mediaDosAlunos = [10, 7, 9, 6]

const listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos [0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ", sua média é " + listaDeNotasEAlunos[1][indice]
    }   else {
        return "O aluno(a) não está cadastrado(a)"
    }
}
     
    console.log(exibeNomeNota("Ana"))
    console.log(exibeNomeNota("Julia"))
    console.log(exibeNomeNota("Caio"))