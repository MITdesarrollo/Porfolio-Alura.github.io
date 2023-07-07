import { skills } from "./data.js";
import { renderImage } from "./render_image.js";

export const handler_stack = (body, imagenPrincipal) => {
    body.className = "";
    void body.offsetWidth; 
    body.className = "background-skill"
    informacion.textContent = "";
    imagenPrincipal.textContent = "";

    //etiquetas
    let title = document.createElement('span');
    let stack = document.createElement('ul');

    const imagen = "./asset/stack.png";
    renderImage(imagen, imagenPrincipal);

    //asignaciones
    informacion.append(title, stack);
    //clases/atributos
    title.classList.add('span_1');
    stack.classList.add('ul_stack')
    //contenido
    title.textContent = "My Skills";

    const skill_array = skills;

    skill_array.forEach(el => {
        //Etiquetas
        let li = document.createElement('li');
        //Asignaciones
        stack.appendChild(li);
        //Contenido/atributos
        li.textContent = el.nombre
        li.classList.add('skills')
    })
}