//render de las imagenes principales
export  const renderImage = (image, imagenPrincipal) => {

    let imagen = document.createElement('img');
    let shadow = document.createElement('div');
    imagen.setAttribute('src', image);
    imagen.classList.add('image_info');
    imagenPrincipal.append(imagen, shadow);
 
    shadow.className = "";
    if(document.body.className === 'background-about') shadow.className = 'div_shadow_about';
    if(document.body.className === 'background-courses') shadow.className = 'div_shadow_edu';
    if(document.body.className === 'background-form')shadow.className = 'div_shadow_form';
    if(document.body.className === 'background-skill')shadow.className = 'div_shadow_skill';
    if(document.body.className === 'background-proyc')shadow.className = 'div_shadow_proy';
}