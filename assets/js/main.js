let state = {
    view:{
        cartoon: document.getElementById('cartoon'),
        language: document.getElementById('language'),
    },
    values:{
        languages:['csharp','golang','nodejs','js'],
    }
}

function sorteiaNumero(){
    // quantidade de imagens que tenho no repositorio cartoons
    const quantidadeImagensCartoon = 33
    let numeroSorteado = Math.floor(Math.random()*quantidadeImagensCartoon);
    return numeroSorteado;
}


function sorteiaLinguagem(){
    let numeroAleatorio = Math.floor(Math.random()*state.values.languages.length);
    let linguagemSelecionada = state.values.languages[numeroAleatorio];
    return linguagemSelecionada;
}

const iniciar = () =>{
    setInterval(()=>{
        let num = sorteiaNumero();
        let language = sorteiaLinguagem();
        state.view.cartoon.src=`./assets/img/cartoons/${num}.png`
        state.view.language.src=`./assets/img/linguagens/${language}.png`        
    },2000);
}


iniciar()