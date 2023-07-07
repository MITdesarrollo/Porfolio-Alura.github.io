import { renderImage } from "./render_image.js";
import { proyects } from "./data.js";

export const handler_proyect = (body, imagenPrincipal) => {
    body.className = "";
    void body.offsetWidth; 
    body.className = "background-proyc"
    informacion.textContent = "";
    imagenPrincipal.textContent = "";

    //para hacer un cambio en la media query
    imagenPrincipal.classList.remove('imagen_principal');
    imagenPrincipal.classList.add('image-proyect');


    const imagen = "./asset/proyects.png";
    renderImage(imagen, imagenPrincipal);

    let titleProyect = document.createElement('span');
    let spanSubtitle = document.createElement('span');
    let navProyects = document.createElement('div');

    informacion.append(titleProyect, spanSubtitle, navProyects);

    titleProyect.classList.add('title_proyect');
    spanSubtitle.classList.add('subt_proyect');
 
    titleProyect.textContent = "Mis proyectos y";
    spanSubtitle.textContent = "experiencias";


    const proyect_array = proyects;
    proyect_array.forEach(el => {
        //Etiquetas
        let proyect = document.createElement('div');
        let name = document.createElement('span');

        let div_a = document.createElement('div');
        let a = document.createElement('a');
        let icon = document.createElement('img');

        //Asignaciones
        navProyects.appendChild(proyect);
        proyect.append(name,  div_a);
        div_a.append(a, icon)

        //Contenido/atributos
        a.setAttribute('href', el.link);
        icon.setAttribute('src', "./asset/enlace.png" );
      
        name.textContent = el.nombre;
        a.innerHTML = `${el.description}`;

        
        navProyects.classList.add('navProyec');
        proyect.classList.add('div_proyect');
        name.classList.add('name_proyc');
        
        div_a.classList.add('div_a');
        a.classList.add('descrip_proyc'); 
        icon.classList.add('icon');
    })
}