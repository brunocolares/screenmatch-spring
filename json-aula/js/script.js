const objs = [
    {
        "nome": "Bruno",
        "idade": 30,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissao":"Programador",
            "empresa":"Usiminas"
        },
        "hobbies": ["Programar", "Correr", "Ler"],
    },
    {
        "nome": "Matheus",
        "idade": 25,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao":null,
            "empresa":null,
        },
        "hobbies": ["Jogar", "Academia"],
    }
]
// Converter objeto pra JSON
const jsonData = JSON.stringify(objs);
console.log(jsonData);

// Converter JSON para objeto
const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
})