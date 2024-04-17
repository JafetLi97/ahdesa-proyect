// Declaración de un objeto para almacenar referencias a los campos del formulario
const formInputs = {
    "nombre": null,   // Campo para el nombre, inicialmente nulo
    "email": null,    // Campo para el email, inicialmente nulo
    "apellido": null, // Campo para el apellido, inicialmente nulo
    "telefono": null, // Campo para el teléfono, inicialmente nulo
};






// Evento que se dispara cuando todo el contenido del DOM se ha cargado
document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad(); // Llama a la función initPageLoad
});






// Función para inicializar la página
function initPageLoad(){
    // Asigna al objeto formInputs las referencias a los elementos del formulario
    formInputs.nombre = document.getElementById("txtNombre"); // Obtiene el elemento del nombre
    formInputs.apellido = document.getElementById("txtApellido"); // Obtiene el elemento del apellido
    formInputs.email = document.getElementById("txtEmail");   // Obtiene el elemento del email
    formInputs.telefono = document.getElementById("txtnumero"); // Obtiene el elemento del teléfono

    // Agrega un listener de evento 'submit' al formulario
    document.getElementById("formulario").addEventListener("submit", (e)=>{
        const [errors, isValid] = validateForm(); // Llama a validateForm y recibe errores y estado de validez
        if(!isValid) { // Si el formulario no es válido
            alert("Formulario no Valido"); // Muestra una alerta
            console.log("Form Errors", errors); // Muestra los errores en la consola
            e.preventDefault(); // Previene la acción por defecto (envío del formulario)
            e.stopPropagation(); // Detiene la propagación del evento
        }
    });
}






// Función para validar el formulario
function validateForm() {
    let errors = []; // Inicializa un array para almacenar errores

    // Valida el campo nombre
    if (isEmpty(formInputs.nombre.value)) {
        errors.push("El campo nombre no puede estar vacio");
        window.alert("El campo nombre no puede estar vacio"); // Alerta al usuario
    } else if (!isNameLastName(formInputs.nombre.value)) {
        errors.push("El nombre tiene caracteres no válidos");
        window.alert("El nombre tiene caracteres no válidos"); // Alerta al usuario
    }else{
        if (isEmpty(formInputs.apellido.value)) {
            errors.push("El campo apellido no puede estar vacio");
            window.alert("El campo apellido no puede estar vacio"); // Alerta al usuario
        } else if (!isNameLastName(formInputs.apellido.value)) {
            errors.push("El apellido tiene caracteres no válidos");
            window.alert("El apellido tiene caracteres no válidos"); // Alerta al usuario
        }else{
            if (isEmpty(formInputs.email.value)) {
                errors.push("El campo email está vacío");
                window.alert("El campo email está vacío"); // Alerta al usuario
            } else if (!isEmail(formInputs.email.value)) {
                errors.push("El email no es válido");
                window.alert("El email no es válido"); // Alerta al usuario
            }else{
                if (isEmpty(formInputs.telefono.value)) {
                    errors.push("El campo teléfono está vacío");
                    window.alert("El campo teléfono está vacío"); // Alerta al usuario
                } else if (!isPhone(formInputs.telefono.value)) {
                    errors.push("El número de teléfono no es válido");
                    window.alert("El número de teléfono no es válido"); // Alerta al usuario
                }
            }
        }
    }

    // Valida el campo apellido


    // Valida el campo email


    // Valida el campo teléfono


    console.log("Form Inputs", formInputs); // Muestra el estado actual de los campos del formulario
    return [errors, errors.length == 0]; // Devuelve los errores y un booleano indicando si hay errores o no
}










// Función para verificar si un valor está vacío
function isEmpty(value){
    return /^\s*$/.test(value); // Retorna true si el valor está vacío o solo contiene espacios
}

function isNameLastName(value){
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ .]*$/.test(value);
}

// Función para verificar si un valor es un email válido
function isEmail(value){
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value); // Retorna true si el valor cumple con el formato de email
}

// Función para verificar si un valor es un número de teléfono válido
function isPhone(value) {
    // Retorna true si el valor cumple con el formato de teléfono especificado
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}
