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

    window.location.href = "https://gamashop.netlify.app/";
}



window.onload = function() {
    var btnSignUp = document.getElementById("btnSignUp")

    btnSignUp.onclick = loginSignUp 
}

function loginSignUp() {
    var inputNameSignUp = document.getElementById("nameSignUp")
    var inputEmailSignUp = document.getElementById("emailSignUp")
    var inputPasswordSignUp = document.getElementById("passwordSignUp")
    var inputTelSignUp = document.getElementById("telSignUp")
    var inputAddressSignUp = document.getElementById("addressSignUp")

    var nameSignUp = inputNameSignUp.value
    var emailSignUp = inputEmailSignUp.value
    var passwordSignUp = inputPasswordSignUp.value
    var telSignUp = inputTelSignUp.value
    var addressSignUp = inputAddressSignUp.value

    localStorage.setItem("nameSignUpSalvar", nameSignUp)
    localStorage.setItem("emailSignUpSalvar", emailSignUp)
    localStorage.setItem("passwordSignUpSalvar", passwordSignUp)
    localStorage.setItem("telSignUpSalvar", telSignUp)
    localStorage.setItem("addressSignUpSalvar", addressSignUp)

    alert("Registro Realizado com Sucesso!")
}