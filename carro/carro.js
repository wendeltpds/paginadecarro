function anuncios(){
    let nome = document.getElementById('seach-input').value;
    let audi = document.getElementById('audi-tt');
    let tesla = document.getElementById('tesla');
    if(nome === "audi"){
        audi.scrollIntoView({behavior: "smooth"})
    }
    else if(nome === "tesla"){
        tesla.scrollIntoView({behavior:"smooth"})
    }

}


function login(){
    let botao = document.getElementById('button');
    let login = document.getElementById('login');
    login.scrollIntoView({behavior:"smooth"});
    window.alert('realize o login para prosseguir')
}