window.onload = function() {
    var btnSignIn = document.getElementById("btnSignIn")

    btnSignIn.onclick = loginSignIn;
}

function loginSignIn() {
    var inputEmailSignIn = document.getElementById("emailSignIn")
    var inputPasswordSignIn = document.getElementById("passwordSignIn")

    var emailSignIn = inputEmailSignIn.value
    var passwordSignIn = inputPasswordSignIn.value

    localStorage.setItem("emailSignInSalvar", emailSignIn)
    localStorage.setItem("passwordSignInSalvar", passwordSignIn)

    alert ("Login Realizado com Sucesso!")
}
