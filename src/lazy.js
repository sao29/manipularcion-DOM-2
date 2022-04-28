// let totalImages = 0;
// let loadedImages = 0;
// //recibe una accion o funcion para hacer por imagen 
// const observer = new IntersectionObserver((entries) => {
//     //y pasa todas las entradas que estan pasando 
//   entries.filter(isIntersecting)
  
//   .forEach(loadImage); //
//   //las entradas son un array y se filtran por una interceccion 
//   //interceptar significa lo que se estan viendo en el viewport
// });

// const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

// const loadImage = (intersectionEntry) => {
//   const imgNode = intersectionEntry.target;
//   imgNode.src = imgNode.dataset.src;
//   imgNode.onload = () => {
//     loadedImages += 1;
//     logState();
//   };
//   observer.unobserve(imgNode);
// };
// //esta funcion recibe la imagen y le dise al
// export const registerImage = (image) => {
// //oberver que obeserve la imagen que se le manda 
//   observer.observe(image);
//   totalImages += 1;
//   logState();
// };

// function logState() {
//   console.log(`⚪️ Total Imágenes: ${totalImages}`);
//   console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
//   console.log("--------------------------------------");
// }


const isIntersecting = entry => {

    return entry.isIntersecting;

}

const loadImage = entry => {

    const container = entry.target;
    const imagen = container.querySelector("img");
    const url = imagen.dataset.src;
    imagen.src = url;

    loadedImages++;
    printLog();

    observer.unobserve(container)

}

const observer = new IntersectionObserver(entries => {

    entries
        .filter(isIntersecting)
        .forEach(loadImage);

});

export const registerImage = imagen => {

    observer.observe(imagen);

}