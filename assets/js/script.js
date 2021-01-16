let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let comentario = document.querySelector('#comentario')
let nomeOk = false
let emailOk = false
let comentarioOk = false

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    } else{
        txt.innerHTML = 'Nome Valido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txt = document.querySelector('#txtEmail')
    if (email.value.indexOf ("@") == -1 || email.value.indexOf(".") == -1){
        txt.innerHTML = 'Email Invalido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Email Valido'
        txt.style.color = 'green'
        emailOk = true
    }
}

function validaComentario(){
    let txt = document.querySelector('#txtComentario')
    if(comentario.value.length < 5 ) {
        txt.innerHTML = 'faça um comentario com pelo menos 5 caracteres'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Comentario valido'
        txt.style.color = 'green'
        comentarioOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && comentarioOk == true) {
        alert ('formulario enviado com sucesso!')
    } else {
        alert ('preencha o formulario corretamente antes de enviar...')
    }
}