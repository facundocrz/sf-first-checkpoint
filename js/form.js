let form = document.getElementById('form')
let paragraph = document.getElementById('form-result')

form.onsubmit = function(event) {
event.preventDefault()
let data = {name:document.getElementById('autocomplete-input1').value,
            email:document.getElementById('autocomplete-input2').value,
            msj:document.getElementById('textarea').value
        }
paragraph.innerHTML = `Name: ${data.nombre} email: ${data.email} message: ${data.msj}`
}