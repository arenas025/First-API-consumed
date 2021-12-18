/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const urlimg="https://platzi-avo.vercel.app/";
const url="https://platzi-avo.vercel.app/api/avo";
const nodeapp=document.querySelector("#app")

//Vamos a trabajar con fetch 
//primero iniciamos el server
//window
  //  .fetch(url)
//despues procesamos la respuesta, el fetch devuelve promesas
    //.then(response=>response.json()) //aqui se convirtió la respyesta en un json()
    //se pone data debido a que ya se paso el json a informacion y lo que va a retornar esa promesa es la data del json 
    //.then(respuestaenJson=>{
      //  respuestaenJson.data.forEach(cualquiernombre => {
        //    console.log(cualquiernombre.name//el name es el atributo que queremos mostrar
         //       )
       // });
   // })


    //--------------------Intento de hacerlo con async y await------------------------//
    
    //se crea una funcion async con x nombre
    async function fetchData() {

        //dentro de ella se crea una constante con un nombre x (en este casi se llama response) la cual va a contener el fetch que en este caso es el API, se usa await porque queremos esperar que la funcion no continue hasta que se obtenga esta respuesta 
        const response = await fetch(url),

        //aqui se usa el mismo await por lo mismo, no podemos seguir sin esta variable, y lo que se hace aca es que se pasa la respuesta a json 
        api = await response.json(),

        //se crea un array donde iran todos los documentos 
        allItems = []
        
        api.data.forEach(nombres => {
          //  console.log(nombres.name);

          //se crea una constante que va a crear el elemento en el que va a estar adentro el texto que queremos poner 
        const nombreScreen = document.createElement("h2");

        //se crea el nodo que irá adentro del texto, en este caso es el nombre 
        const texto= document.createTextNode(nombres.name);

        //se le hace push al elemento que se creó
        nombreScreen.append(texto);

//------Aplicando estilos-----------------//
        //se usa el atributo .style y se pasa el estilo como una cadena de texto 
        //nombreScreen.style="font-size:2rem";
        //Tambien los podemos usar en forma de objeto
        nombreScreen.style.fontSize="30px"; 
        nombreScreen.style.textAlign="center";
        nombreScreen.className="bg-green-500";
        nombreScreen.style.color="white"
//------Aplicando estilos-----------------//


        //mismo procedimiento
        const precioScreen = document.createElement("p");
        const precio= document.createTextNode(nombres.price);
        precioScreen.append(precio);
        precioScreen.style.textAlign="center"
//para usar tailwind, se debe crear una clase en el elemento para que se aplique el tailwind, la clase viene directamente de la 
        precioScreen.className="text-2xl"

        const imgScreen = document.createElement("img");
        //cuando se quiere añadir alguna imagen, entonces se usa el atributo .src y al frente el link
        // como en este caso en la API la url de la imagen esta en entorno local, se debe de unir con el url
        const imgsrc = nombres.image
        //aqui se concatena con el url y el item general(en este caso es acceder para el dato de la imagen)
        imgScreen.src = `${urlimg}${imgsrc}`;
        imgScreen.style.margin="0 auto";
        imgScreen.className="rounded-2xl"
        

        
        const imagen= document.createTextNode(nombres.price);
        precioScreen.append(precio);

        const containerScreen=document.createElement("div");
        containerScreen.append(nombreScreen,imgScreen,precioScreen);
        containerScreen.style.width="200px"
        containerScreen.style.margin="0 auto"
        containerScreen.className="border-8 border-green-700 rounded-2xl	"
        containerScreen.style.marginTop="20px"



        allItems.push(containerScreen)


        nodeapp.append(...allItems)
    })
    }

    fetchData()