//carrossel
document.addEventListener("DOMContentLoaded", function() {

    let track = document.querySelector(".carrossel-track");
    let slides = document.getElementsByClassName("carrossel-slide");
    let btnVoltar = document.querySelector(".voltar");
    let btnProx = document.querySelector(".prox");

    let indice = 0;

    // Atualiza a posição do carrossel
    function atualizar() {
        let largura = slides[0].offsetWidth; // largura de um slide
        let deslocamento = indice * largura; // quanto vai mover
        track.style.transform = "translateX(-" + deslocamento + "px)";
    }

    function proximo() {
        indice = indice + 1;

        if (indice >= slides.length) {
            indice = 0;
        }

        atualizar();
    }

    function anterior() {
        indice = indice - 1;

        if (indice < 0) {
            indice = slides.length - 1; 
        }

        atualizar();
    }

    btnProx.addEventListener("click", function() {
        proximo();
    });

    btnVoltar.addEventListener("click", function() {
        anterior();
    });
});
    //form
    function verifica() {
      let msg = "";

      if (document.getElementById("nome").value == "") {
        msg += "Campo Nome vazio\n";
      }

      let email = document.getElementById("email").value;
      if (email == "") {
        msg += "Campo Email vazio\n";
      } else {
        if (!(email.includes("@") && email.endsWith(".com"))) {
          msg += "Email inválido. Use o formato exemplo@exemplo.com\n";
        }
      }

      if (document.getElementById("end").value == "") {
        msg += "Campo Endereco vazio\n";
      }

      let senha = document.getElementById("senha").value;
      if (senha == "") {
        msg += "Campo Senha vazio\n";
      } else if (senha.length < 6) {
        msg += "A senha deve ter pelo menos 6 caracteres\n";
      }

      if (document.getElementById("telefone").value == "") {
        msg += "Campo Telefone vazio\n";
      } 

      if (document.getElementById("sexo").value == "seleciona") {
        msg += "Campo Sexo vazio\n";
      } 

      if (document.getElementById("data").value == "") {
        msg += "Campo Data vazio\n";
      } 

      if (document.getElementById("inst").value == "escolha") {
        msg += "Campo de Instrumento vazio\n";
      } 
      
      if (msg) {
        alert(msg);
      } else {
        alert("Cadastrado!");
      }
    }