window.onload = function() {
    var btnRegister = document.getElementById("btnRegister")

    btnRegister.onclick = productRegister 

}

function productRegister() {
    var inputUrlRegister = document.getElementById("urlRegister")
    var inputNameRegister = document.getElementById("nameRegister")
    var inputPriceRegister = document.getElementById("priceRegister")
    var inputEmailRegister = document.getElementById("emailRegister")

    var urlRegister = inputUrlRegister.value
    var nameRegister = inputNameRegister.value
    var priceRegister = inputPriceRegister.value
    var emailRegister = inputEmailRegister.value

    localStorage.setItem("urlRegisterSalvar", urlRegister)
    localStorage.setItem("nameRegisterSalvar", nameRegister)
    localStorage.setItem("priceRegisterSalvar", priceRegister)
    localStorage.setItem("emailRegisterSalvar", emailRegister)

    alert ("Produto Cadastro com Sucesso!")

}

