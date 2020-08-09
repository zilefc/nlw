//procurar botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//quando clicar executar uma accao 
function cloneField() {
 //duplicar os campos. que campos?
 const newFieldContainer=document.querySelector('.schedule-item').cloneNode(true)
 //limpar os campos. que campos?
 const fields =newFieldContainer.querySelectorAll('input')

fields.forEach(function(field){
    field.value = ""
})

//colocar na pagina, onde?
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
 

