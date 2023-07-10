
import { handler_sobreMi } from "./componentes/about_me.js";
import {handler_education } from "./componentes/education.js";
import {handler_stack } from "./componentes/stack.js";
import {handler_proyect } from "./componentes/proyects.js";
import {handler_form  } from "./componentes/form.js";


//Etiquetas principales
const body = document.body;
const informacion = document.getElementById('informacion');
const imagenPrincipal = document.getElementById('imagen');

imagenPrincipal.classList.add('imagen_principal');



const about = document.getElementById('about');
const education = document.getElementById('education');
const skills = document.getElementById('skills');
const proyects = document.getElementById('proyects')
const contact = document.getElementById('contact');


//funciones principales DOM
handler_sobreMi(body, imagenPrincipal);
about.addEventListener("click", () => handler_sobreMi(body, imagenPrincipal));
education.addEventListener("click",() => handler_education(body, imagenPrincipal));
skills.addEventListener("click", () => handler_stack(body, imagenPrincipal));
proyects.addEventListener("click", () => handler_proyect(body, imagenPrincipal));
contact.addEventListener("click", () =>  handler_form(body, imagenPrincipal));


  