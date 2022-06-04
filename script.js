// DOM (Document Object Model) => modelo que transforma as tags HTML em objetos e dessa forma conseguimos manipulá-lo. 

// ordem renderização JAVASCRIPT > STYLE > PAINTING

// 1. Seletores 

// POR ID => getElementById(<"id">) => RETORNA somente 1 elemento

const titleElement = document.getElementById("title") 

const divElement = document.getElementById("div-exemplo") 

// POR CLASS => getElementsByClassName(<"class">) => RETORNA uma lista viva => HTMLCollection
    // intera sob essa lista => usar "for" => como não é uma array, não podemos urtilizar métodos array. 

const paragraphElement = document.getElementsByClassName("descricao")
const liElementsList = document.getElementsByClassName("item")

// POR TAG => getElementByTagName(<"tag">) => retorna uma lista viva => HTMLCollection
const liElement = document.getElementsByTagName("li")

const h1Element = document.getElementsByTagName("h1")

// QUERYSELECTOR => GENERICO => SINTAXE INDICA SE A BUSCA É POR ID, CLASS OU TAG => igual a do CSS
// retorna um único elemento (primeira ocorrência)

    //id
    const titleElement2 = document.querySelector("#title") 

    //class => retorna a primeira ocorrência
    const liElement2 = document.querySelector(".item")
    const paragraphElement2 = document.querySelector(".descricao")

    // tag => retorna a primeira ocorrencia
    const h1Element2 = document.querySelector("h1")
    const liElementList3 = document.querySelector("li")

    // busca mais específica
    const liElementList5 = document.querySelector("li.item1")
    const liElementList6 = document.querySelector("div#div-exemplo ul li.item1")


// QUERYSELECTORALL => RETORNA um NODELIST
    const liElementList2 = document.querySelectorAll(".item")
    const liElementListByQuerySelectorAll = document.querySelectorAll("li")


// 2.Manipulação 

    // 1. Selecionar o elemento a ser manipulado
    const ulElement1 = document.querySelector("ul") // a partir do documento html como um todo
    const ulElement2 = divElement.querySelector("ul") // a partir do divElement já selecionado

// 2.0 MODFICAR O TEXTO 
titleElement.innerText = "DOM intro"

paragraphElement2.innerText = "descrição do texto"
paragraphElement[0].innerText = "descrição do texto 2"

// 2.1 ADICIONAR OU REMOVER UMA CLASSE => atributo classList => metodo add() remove()
ulElement2.classList.remove("hidden")

ulElement2.classList.add("cor_de_fundo")

// utilizando o contains => ele verifica se o elemento contem a class especificada. 

// const btnList = document.getElementsByClassName("btn")

// for(let i=0; i<btnList.length; i++){
//     console.log(btnList[i].classList.contains("btn-add"))
// }

// 2.2 MODIFICAR O CONTEÚDO HTML

// ulElement2.innerHTML = ulElement2.innerHTML + "<li class=item>SOU UMA NOVA LI</li>"
ulElement2.innerHTML += "<li class=item>SOU UMA NOVA LI</li>"

ulElement2.innerHTML = "<li class=item>SOU UMA NOVA LI</li>"
ulElement2.innerText = "li com innerText alterado por JS DOM"


// 2.3 MODIFICAR O POSICIONAMENTO
ulElement2.style.position = "absolute"
ulElement2.style.backgroundColor = "red"
ulElement2.style.bottom = "0"
ulElement2.style.left = "500px"

// 3.Eventos
// identificar a interação do usuário com a minha página
    // 1. Selecionar o elemento q será manipulado
    const inputElement = document.getElementById("text-input")
    const taskList = document.querySelector(".task_list")

// addEventListener => escutador de eventos
// event => ação q eu quero q seja "escutada" 

// eventos que detectam alterações de teclado => 
// keydown : dispara quando qualquer tecla é pressionada.
// keypress : dispara quando uma tecla que retorna um valor de caractere é pressionada. Por exemplo, se você pressionar a tela a , este evento vai disparar a letra a , que retorna o valor 97 . ...
// keyup : dispara quando qualquer tecla é liberada.

const addBtn = document.querySelector(".btn-add")

const newLiElement = document.createElement("li")

inputElement.addEventListener("keyup", function (){
    inputElement.value = inputElement.value.toUpperCase()
})

// Manipulando nosso título
titleElement.addEventListener("click", function(){
    titleElement.style.color = "green"
})





