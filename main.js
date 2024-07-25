const form = document.querySelector('form')

form.addEventListener('submit', function(a){
    a.preventDefault();

    let nomeContato = document.querySelector('input#lista-contato').value
    let numeroContato = document.querySelector('input#numero-contato').value
    let imprimirTabela = document.querySelector('tbody')

    console.log(imprimirTabela)

    let novaLinha = ''

    novaLinha += '<tr>'
    novaLinha += `<td>${nomeContato}:</td>`
    novaLinha += `<td>${numeroContato}</td>`
    novaLinha += '</tr>'

    imprimirTabela.innerHTML += novaLinha
    
})