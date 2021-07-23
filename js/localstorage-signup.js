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


