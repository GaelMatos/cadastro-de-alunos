let alunos = [
    {
        nome: "gleidson",
        email: "gleidson@gmail.com",
        telefone: "(00) 12345-6789",
        cidade: "Fortaleza" 
    },
    {
        nome: "Bruno caucaia",
        email: "brunão@gmail.com",
        telefone: "(00) 12345-6789",
        cidade: "Caucaia"
    },
    {
        nome: "Kevin",
        email: "kevin@gmail.com",
        telefone: "(00) 12345-6789",
        cidade: "Fortaleza"
    },
    {
        nome: "Sarah",
        email: "sarah@gmail.com",
        telefone: "(00) 12345-6789",
        cidade: "Fortaleza"
    }
];

function listarAluno(){
    let tabela = document.querySelector("#tabela");
     tabela.innerHTML= "";

    let lista = JSON.parse(localStorage.getItem("lista")) || []
    for(let i = 0; i < lista.length; i++){
        tabela.innerHTML += `<tr>
                                <td>${lista[i].nome}</td>
                                <td>${lista[i].email}</td>
                                <td>${lista[i].telefone}</td>
                                <td>${lista[i].cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger" onclick = "deletarAluno(${i})">Deletar</button>
                                </td>
                            </tr>`
    }

 } listarAluno();


function adicionarAluno(){
    event.preventDefault();

    let lista = JSON.parse(localStorage.getItem("lista")) || [];

    //pegar a lista de alunos
   
   

    // criando o objeto aluno

    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    }

    //insere o aluno na lista
    lista.push(aluno);

    // salvando no localstore

    localStorage.setItem("lista", JSON.stringify(lista));

    //  limapnado os campos do formulario
    cadastro.reset();

    // fechar o modal
    let fechar = document.querySelector("#cadastro-fechar");
    fechar.dispatchEvent(new Event ("click"));

    // listando alunos novamente
    listarAluno(); 
}

functioneditarAluno()

function deletarAluno(posicao){

   let lista = JSON.parse(localStorage.getItem("lista")) || [];
   let novaLista = [];
   for (let i = 0; i < lista.length; i++){
    if(i!= posicao){
        novaLista.push(lista[i]);
    }
   }
   localStorage.setItem("lista", JSON.stringify(novaLista))
   listarAluno();

}