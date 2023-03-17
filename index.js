const tag = document.querySelector('.tag');
const modeloTag = tag.cloneNode(true);
const botaoAdicionar = document.querySelector('#botao-adicionar');
const container = document.querySelector('#container');
const dataKey = 'database'

function adicionarTag() {
    const novaTag = modeloTag.cloneNode(true);
    escutarLixeira(novaTag)
    container.appendChild(novaTag);
}

function escutarLixeira(tagPai){
    const lixeira = tagPai.querySelector('.lixeira');
    lixeira.addEventListener('click', () => {
        tagPai.remove()
    })
}

function saveData(){
    
}

function loadData(){

}

botaoAdicionar.addEventListener('click', adicionarTag);
escutarLixeira(tag);