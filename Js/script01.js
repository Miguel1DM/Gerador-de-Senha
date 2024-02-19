function gerarSenha() {
    let caracteres = "!@#$%&*()+=-*./;";
    let letras = "qwertyuiopasdfghjklzxcvbnm";
    let letraM = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let nums = "1234567890";
    let br = document.createElement('br');
    let senhaContainer = document.getElementById('senhaContainer');
    senhaContainer.innerHTML = "";

    let box1 = document.getElementById('numeros');
    let box2 = document.getElementById('caracter');
    let box3 = document.getElementById('letraM');
    let tam = document.getElementById('tamS').value;
    let qua = document.getElementById('quaS').value;

    for (let j = 0; j < qua; j++) {
        let senha = letras;

        if (box1.checked) {
            senha += nums;
        }

        if (box2.checked) {
            senha += caracteres;
        }

        if (box3.checked) {
            senha += letraM;
        }

        let senhaGerada = "";
        for (let i = 0; i < tam; i++) {
            senhaGerada += senha[Math.floor(Math.random() * senha.length)];
        }

        senhaContainer.appendChild(document.createTextNode(senhaGerada + "\n"));
        senhaContainer.appendChild(br.cloneNode())
    }
}
