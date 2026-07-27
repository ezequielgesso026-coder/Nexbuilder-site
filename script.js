
// ANIMAÇÃO SUAVE AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(".card, section h2, .hero-text");


const aparecer = () => {

    elementos.forEach(elemento => {

        const posicao = elemento.getBoundingClientRect().top;

        const alturaTela = window.innerHeight;


        if(posicao < alturaTela - 100){

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

};



window.addEventListener("scroll", aparecer);






// CONFIGURAÇÃO INICIAL DAS ANIMAÇÕES

elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(40px)";

    elemento.style.transition = "0.8s ease";

});




aparecer();






// BOTÃO DE CONTATO

const botao = document.querySelector("button");


if(botao){

botao.addEventListener("click", function(e){

    e.preventDefault();


    alert(
    "Obrigado pelo contato! A Nex Builder retornará em breve."
    );


});

}





// ANO AUTOMÁTICO NO RODAPÉ

const ano = new Date().getFullYear();


const footer = document.querySelector("footer p");


if(footer){

footer.innerHTML =
"© " + ano + " Nex Builder - Construção Inteligente";

}