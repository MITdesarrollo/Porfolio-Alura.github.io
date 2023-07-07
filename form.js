import { renderImage } from "./render_image.js";

export const handler_form = (body, imagenPrincipal) => {
    body.className = "";
    void body.offsetWidth;
    body.className = "background-form"
    informacion.textContent = "";
    imagenPrincipal.textContent = "";

    const imagen = "./asset/form.png";
    renderImage(imagen, imagenPrincipal);

    // Crear el formulario
    const form = document.createElement('form');
    form.action = '';
    form.id = 'form';
    form.method = 'POST';

    // Div contenedor principal
    const formContainer = document.createElement('div');
    formContainer.className = 'form';

    // Título
    const title = document.createElement('h1');
    title.textContent = 'registro';
    formContainer.appendChild(title);

    // Campo de nombre
    const nombreGroup = document.createElement('div');
    nombreGroup.className = 'grupo';

    const nombreLabel = document.createElement('label');
    nombreLabel.textContent = 'name';
    nombreGroup.appendChild(nombreLabel);

    const nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.name = 'nombre';
    nombreInput.id = 'nombre';
    nombreInput.required = true;
    nombreGroup.appendChild(nombreInput);

    const nombreBar = document.createElement('span');
    nombreBar.className = 'barra';
    nombreGroup.appendChild(nombreBar);

    formContainer.appendChild(nombreGroup);

    // Campo de email
    const emailGroup = document.createElement('div');
    emailGroup.className = 'grupo';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'email';
    emailGroup.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailGroup.appendChild(emailInput);

    const emailBar = document.createElement('span');
    emailBar.className = 'barra';
    emailGroup.appendChild(emailBar);

    formContainer.appendChild(emailGroup);

    // Campo de asunto
    const asuntoGroup = document.createElement('div');
    asuntoGroup.className = 'grupo';

    const asuntoLabel = document.createElement('label');
    asuntoLabel.textContent = 'Asunto';
    asuntoGroup.appendChild(asuntoLabel);

    const asuntoInput = document.createElement('input');
    asuntoInput.type = 'text';
    asuntoInput.name = 'asunto';
    asuntoInput.id = 'affair';
    asuntoInput.required = true;
    asuntoGroup.appendChild(asuntoInput);

    const asuntoBar = document.createElement('span');
    asuntoBar.className = 'barra';
    asuntoGroup.appendChild(asuntoBar);

    formContainer.appendChild(asuntoGroup);

    // Campo de mensaje
    const mensajeGroup = document.createElement('div');
    mensajeGroup.className = 'grupo';

    const mensajeLabel = document.createElement('label');
    mensajeLabel.textContent = 'mensaje';
    mensajeGroup.appendChild(mensajeLabel);

    const mensajeTextarea = document.createElement('textarea');
    mensajeTextarea.name = 'mensaje';
    mensajeTextarea.id = 'message';
    mensajeTextarea.required = true;
    mensajeGroup.appendChild(mensajeTextarea);

    const mensajeBar = document.createElement('span');
    mensajeBar.className = 'barra';
    mensajeGroup.appendChild(mensajeBar);

    formContainer.appendChild(mensajeGroup);

    // Botón de enviar
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'enviar';
    formContainer.appendChild(submitButton);

    // Mensaje de advertencia
    let warningText = document.createElement('p');
    warningText.className = 'warning';
    warningText.id = 'warning';
    formContainer.appendChild(warningText);

    // Agregar el contenedor principal al formulario
    form.appendChild(formContainer);

    // Agregar el formulario al documento
    informacion.appendChild(form);

    /* validaciones */
    let error = false;
    warningText.innerHTML = "";

    nombreInput.addEventListener("blur", () => {
        const errorNombre = "El nombre excede los 50 caracteres";
        if (nombreInput.value.length > 50) {
            nombreBar.innerHTML = errorNombre;
            error = true
        }
        if (nombreInput.value.length == 0 || nombreInput.value.length <= 50) {
            nombreBar.innerHTML = "";
        }
    });
    emailInput.addEventListener("blur", () => {
        const errorEmail = "El email no es valido";
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!regexEmail.test(emailInput.value)) {
            emailBar.innerHTML = errorEmail;
            error = true

        }
    });
    asuntoInput.addEventListener("blur", () => {
        const errorAsunto = "Asunto muy largo";

        if (asuntoInput.value.length > 50) {
            asuntoBar.innerHTML = errorAsunto;
            error = true
        }
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!error) {
            warningText.textContent = "Enviado"
        }
    })
}








