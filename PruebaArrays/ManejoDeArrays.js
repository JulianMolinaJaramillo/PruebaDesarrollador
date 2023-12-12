//1. Convertir una palabra en una cadena de texto

let palabra = "Computador";
let arreglo = Array.from(palabra);
console.log(arreglo);

/****************************************************************************************/

//2. Generar una contraseña a partir de una cadena de caracteres

let cadena = "qwertyuiopasdfghjklzxcvbnm0987654321QWERTYUIOPASDFGHJKLZXCVBNM";
let cantidadCaracteresPassword = 10;
let password = "";

for(let i=0; i<cantidadCaracteresPassword; i++ ){
    //Concatenamos una posicion random  y con floor nos aseguramos de que sea el valor minimo, multiplicado por la longitud para que este en el rango
    let random = Math.floor(Math.random() * cadena.length)
    //Concatenamos esa posicion en la variable
    password += cadena.charAt(random);
}

console.log(password);

/****************************************************************************************/

//3. Trabajando con el Array de pruebas

let arrayPruebas= [
    {"cantidadVendida":2,"NombreProducto":"Té Dharamsala","Proveedor":"Exotic Liquids","Categoria":"Bebidas","PrecioUnidad":"18"},
    {"cantidadVendida":20,"NombreProducto":"Cerveza tibetana Barley","Proveedor":"Exotic Liquids","Categoria":"Bebidas","PrecioUnidad":"19"},
    {"cantidadVendida":12,"NombreProducto":"Sirope de regaliz","Proveedor":"Exotic Liquids","Categoria":"Condimentos","PrecioUnidad":"10"},
    {"cantidadVendida":21,"NombreProducto":"Especias Cajun del chef Anton","Proveedor":"New Orleans Cajun Delights","Categoria":"Condimentos","PrecioUnidad":"22"},
    {"cantidadVendida":2,"NombreProducto":"Mezcla Gumbo del chef Anton","Proveedor":"New Orleans Cajun Delights","Categoria":"Condimentos","PrecioUnidad":"21.35"},
    {"cantidadVendida":32,"NombreProducto":"Mermelada de grosellas de la abuela","Proveedor":"Grandma Kelly's Homestead","Categoria":"Condimentos","PrecioUnidad":"25"},
    {"cantidadVendida":4,"NombreProducto":"Peras secas orgánicas del tío Bob","Proveedor":"Grandma Kelly's Homestead","Categoria":"Frutas/Verduras","PrecioUnidad":"30"},
    {"cantidadVendida":32,"NombreProducto":"Salsa de arándanos Northwoods","Proveedor":"Grandma Kelly's Homestead","Categoria":"Condimentos","PrecioUnidad":"40"},
    {"cantidadVendida":5,"NombreProducto":"Buey Mishi Kobe","Proveedor":"Tokyo Traders","Categoria":"Carnes","PrecioUnidad":"97"},
    {"cantidadVendida":4,"NombreProducto":"Pez espada","Proveedor":"Tokyo Traders","Categoria":"Pescado/Marisco","PrecioUnidad":"31"},
    {"cantidadVendida":7,"NombreProducto":"Queso Cabrales","Proveedor":"Cooperativa de Quesos 'Las Cabras'","Categoria":"Lácteos","PrecioUnidad":"21"},
    {"cantidadVendida":65,"NombreProducto":"Queso Manchego La Pastora","Proveedor":"Cooperativa de Quesos 'Las Cabras'","Categoria":"Lácteos","PrecioUnidad":"38"},
    {"cantidadVendida":8,"NombreProducto":"Algas Konbu","Proveedor":"Mayumi's","Categoria":"Pescado/Marisco","PrecioUnidad":"6"},
    {"cantidadVendida":6,"NombreProducto":"Cuajada de judías","Proveedor":"Mayumi's","Categoria":"Frutas/Verduras","PrecioUnidad":"23.25"},
    {"cantidadVendida":7,"NombreProducto":"Salsa de soja baja en sodio","Proveedor":"Mayumi's","Categoria":"Condimentos","PrecioUnidad":"15.5"},
    {"cantidadVendida":0,"NombreProducto":"Postre de merengue Pavlova","Proveedor":"Pavlova, Ltd.","Categoria":"Repostería","PrecioUnidad":"17.45"},
    {"cantidadVendida":7,"NombreProducto":"Cordero Alice Springs","Proveedor":"Pavlova, Ltd.","Categoria":"Carnes","PrecioUnidad":"39"},
    {"cantidadVendida":9,"NombreProducto":"Langostinos tigre Carnarvon","Proveedor":"Pavlova, Ltd.","Categoria":"Pescado/Marisco","PrecioUnidad":"62,5"},
    {"cantidadVendida":8,"NombreProducto":"Pastas de té de chocolate","Proveedor":"Specialty Biscuits, Ltd.","Categoria":"Repostería","PrecioUnidad":"9.2"},
    {"cantidadVendida":6,"NombreProducto":"Mermelada de Sir Rodney's","Proveedor":"Specialty Biscuits, Ltd.","Categoria":"Repostería","PrecioUnidad":"81"}

];

// Producto mas vendido
let productoMasVendido = "";
let catidadProducto = 0;

for(let i=0; i<arrayPruebas.length; i++ ){
    //Buscamos el producto que mas vendió
    if(arrayPruebas[i].cantidadVendida > catidadProducto){       
        productoMasVendido = arrayPruebas[i].NombreProducto;
        catidadProducto = arrayPruebas[i].cantidadVendida;
    }
}

console.log("El producto mas vendido es: " + productoMasVendido + " Con una cantidad total de: " + catidadProducto + " Unidades");



//Proovedores que mas productos venden de Mayor a Menor
//Nos ayudamos del metodo sort para ordenar
const mejoresProveedores = arrayPruebas.sort((a,b) => {
    return b.cantidadVendida - a.cantidadVendida;
})

for(let i=0; i<arrayPruebas.length; i++){
    //mostramos los proveedores
    console.log(mejoresProveedores[i].Proveedor);
}



//Producto que mas generó ganancias
let productoMayorGanancia = 0;
let ganancia = 0;
let gananciaMayor = 0;

for(let i=0; i<arrayPruebas.length; i++ ){
    
   ganancia = arrayPruebas[i].cantidadVendida * arrayPruebas[i].PrecioUnidad;
   if(ganancia > gananciaMayor){
       gananciaMayor = ganancia;
       productoMayorGanancia = arrayPruebas[i].NombreProducto;
   }
}

console.log("El producto que mas ganancias generó fue: " + productoMayorGanancia + " Con una cantidad total vendida de: " +"$"+gananciaMayor);


//Ganancias por categoria

let gananciaBedidas = 0;
let gananciaB = 0;
let gananciaCondimentos = 0;
let gananciaC = 0;
let gananciaFrutas = 0;
let gananciaF = 0;
let gananciaCarnes = 0;
let gananciaCa = 0;
let gananciaPescado = 0;
let gananciaP = 0;
let gananciaLacteos = 0;
let gananciaL = 0;
let gananciaReposteria = 0;
let gananciaR = 0;

for(let i=0; i<arrayPruebas.length; i++ ){
   if(arrayPruebas[i].Categoria == "Bebidas"){
        gananciaBedidas = arrayPruebas[i].cantidadVendida * arrayPruebas[i].PrecioUnidad;
        gananciaB += gananciaBedidas;
   }
   
   if(arrayPruebas[i].Categoria == "Condimentos"){
        gananciaCondimentos = arrayPruebas[i].cantidadVendida * arrayPruebas[i].PrecioUnidad;
        gananciaC += gananciaCondimentos;
        
   }
   
   if(arrayPruebas[i].Categoria == "Frutas/Verduras"){
        gananciaFrutas = arrayPruebas[i].cantidadVendida * arrayPruebas[i].PrecioUnidad;
        gananciaF += gananciaFrutas;
        
   }
   
   if(arrayPruebas[i].Categoria == "Carnes"){
        gananciaCarnes = arrayPruebas[i].cantidadVendida * arrayPruebas[i].PrecioUnidad;
        gananciaCa += gananciaCarnes;
        
   }
   
   if(arrayPruebas[i].Categoria == "Pescado/Marisco"){
        gananciaPescado = arrayPruebas[i].cantidadVendida * arrayPruebas[i].PrecioUnidad;
        gananciaP += gananciaPescado;
        
   }
   
   if(arrayPruebas[i].Categoria == "Lácteos"){
        gananciaLacteos = arrayPruebas[i].cantidadVendida * arrayPruebas[i].PrecioUnidad;
        gananciaL += gananciaLacteos;
        
   }
   
   if(arrayPruebas[i].Categoria == "Repostería"){
        gananciaReposteria = arrayPruebas[i].cantidadVendida * arrayPruebas[i].PrecioUnidad;
        gananciaR += gananciaReposteria;
        
   }
   
}

console.log("Ganancias por categoria: ");
console.log("Ganancias de Bebidas: $" + gananciaB);
console.log("Ganancias de Condimentos: $" +gananciaC);
console.log("Ganancias de Frutas/Verduras: $" +gananciaF);
console.log("Ganancias de Carnes: $" +gananciaCa);
console.log("Ganancias de Pescado/Marisco: $" +gananciaP);
console.log("Ganancias de Lácteos: $" +gananciaL);
console.log("Ganancias de Repostería: $" +gananciaR);