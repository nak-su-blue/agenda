// expandir menu

var  itemMenu = document.querySelectorAll('.item-menu')

function selectLink (){
    itemMenu.forEach((item)=>
        item.classList.remove('ativo')
    
    )
    this.classList.add('ativo')
}
itemMenu.forEach((item)=>
    item.addEventListener('click', selectLink)

)
// expandir menu

//clicar no icone e expandir barra lateral
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})