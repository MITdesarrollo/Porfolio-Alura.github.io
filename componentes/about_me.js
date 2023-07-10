import { redes } from "./data.js"
import { renderImage } from "./render_image.js";

export const  handler_sobreMi = (body, imagenPrincipal) => {
    
    body.className = "";
    void body.offsetWidth; 
    body.className = "background-about";
    informacion.textContent = "";
    imagenPrincipal.textContent = "";
    //Etiquetas
    let title = document.createElement('span');
    let spanTitle = document.createElement('span')
    let spanTitle2 = document.createElement('span')
    let description = document.createElement('span');
    let navLinks = document.createElement('ul');


    const imagen = "./asset/about_me.png";
    renderImage(imagen, imagenPrincipal);

    //Asignaciones
    informacion.append(title, spanTitle, spanTitle2, description, navLinks);
    //Clases
    navLinks.classList.add('link_redes');
    title.classList.add('span_1');
    spanTitle2.classList.add('span_2');
    description.classList.add('description');

    //Contenido
    title.textContent = "Hola, mi nombre es";
    spanTitle.textContent = "Mariel Torres y soy"
    spanTitle2.textContent = "desarrolladora FrontEnd"
    description.textContent = "Soy estudiante de programación y diseño UX/UI, apasionada por el dibujo. Mi objetivo es poder plasmar todas mis ideas en proyectos y trabajos, aprovechando al máximo mis habilidades en estas áreas."

    //for redes
   const redes_array = redes;
    redes_array.forEach(el => {
        //Etiquetas
        let li = document.createElement('li');
        let link = document.createElement('a');
        //Asignaciones
        navLinks.appendChild(li);
        li.appendChild(link);
        //Contenido/atributos
        link.setAttribute('href', el.link);
        link.setAttribute('target', '_blank');

        link.textContent = el.nombre
        link.classList.add('redes')
    })
}

