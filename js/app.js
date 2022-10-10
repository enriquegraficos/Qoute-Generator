// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    frase: "Estoy orgulloso de ser el jugador más caro del mundo",
    person: 'Cristiano',
  
},
{
    frase: "Yo creo que por ser guapo, rico y un gran jugador las personas me tienen envidia",
    person: 'Cristiano'
}, 
{
    frase: "Si todos (mis compañeros) estuviesen a mi nivel estaríamos los primeros",
    person: 'Cristiano'
}, 
{
    frase: "Soy el mejor de la historia",
    person: 'Cristiano'
}, 
{
    frase: "Quiero ser recordado como parte del grupo de los mejores jugadores",
    person: 'Cristiano'
}, 
{
    frase: "El talento no lo es todo. Lo puedes tener desde la cuna, pero es necesario aprender el oficio para ser el mejor",
    person: 'Cristiano'
}, 
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].frase;
    person.innerText = quotes[random].person;
 
})