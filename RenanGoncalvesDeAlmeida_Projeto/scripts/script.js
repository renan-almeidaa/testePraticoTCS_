var lastPag = "home";



//carrega a página na tela
function carregar(pagina){
    $('#conteudoHome').hide();
    $("#conteudo").load(pagina)
    $('#conteudo').show();
    focoMenu(pagina)
}

//altera a classe do menu selecionado para "selected" para o CSS reconhecer e dar destaque para a aba do menu que está aberta no momento
function focoMenu(pagina){
    if(pagina!="home")
    menu_selected = pagina.substr(0, pagina.length-5)
    else {
        menu_selected = pagina
        $('#conteudoHome').show();
    }
    let el = document.getElementById(menu_selected)
    console.log(el)
    el.classList.add('selected')
    let elLast = document.getElementById(lastPag)
    elLast.classList.remove('selected')
    lastPag = menu_selected
}

function valida_form (){
    if(document.getElementById("name").value == ""){
    alert('Por favor, preencha o campo nome');
    document.getElementById("name").focus();
    return false;
    } else if(document.getElementById("mail").value == ""){
        alert('Por favor, preencha o campo email');
        document.getElementById("mail").focus();
        return false;
    }
}
