import { renderImage } from "./render_image.js";

export const handler_education = (body, imagenPrincipal ) => {
    body.className = "";
    void body.offsetWidth; 
    body.className = "background-courses"
    informacion.textContent = "";
    imagenPrincipal.textContent = "";
    
    let title = document.createElement('span');
    let title_1 = document.createElement('span')
    let courses_info = document.createElement('div')
    


    const imagen = "./asset/education.png";
    renderImage(imagen, imagenPrincipal);

    //Clases/atributos
    title.classList.add('span_1');
    title_1.classList.add('span_2');
    courses_info.classList.add('courses');
    
    //Asignaciones
    informacion.append(title, title_1, courses_info);
    
    //Contenido
    title.textContent = "Mi educación y";
    title_1.textContent = "certificaciones";

    //for redes

    let courses = [
        { lugar: "Alura | Oracle", descrip: "Front End" },
        { lugar: "CoderHouse", descrip: "Diseño UX/UI" },
        { lugar: "CoderHouse", descrip: "Angular" },
        { lugar: "Argentina Programa", descrip: "FullStack Jr" },
        { lugar: "Escuela de Educacion Tecnica", descrip: "Tec. Electromencanico" },
    ]
    courses.forEach(el => {
        //Etiquetas
        
        let subtitle = document.createElement('div')
        let description = document.createElement('span')
        let institution = document.createElement('p')
        //Asignaciones
        courses_info.append(subtitle)
        subtitle.append( description , institution)
        //Contenido/atributos
        description.textContent = el.descrip;
        institution.textContent = el.lugar;
        
        
        subtitle.classList.add('info_curso');
        description.classList.add('description_course');
    })
}
