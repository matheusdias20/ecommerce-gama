window.onload = function() {
    var btEmail = document.getElementById("btEmail")

    btEmail.onclick = salvarEmail;
}

function salvarEmail() {
    var inputEmail = document.getElementById("email")
    var email = inputEmail.value

    localStorage.setItem("emailSalvar", email)

    alert("Email cadastrado com sucesso")
}