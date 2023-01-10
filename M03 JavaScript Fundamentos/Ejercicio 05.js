/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve False.
   // Tu código:
   var salida;
   var cons=true;
   
   if(num>0){
      salida = 'Es positivo';
      return salida;
   }else if(num<0){
      salida = 'Es negativo';
      return salida;
   }else{
      cons=false;
      return cons;
   }

}

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:

   var exclamación= "!";
   var conca=str+exclamación;
   return conca;
}

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   var espacio = " ";
   var conca=nombre+espacio+apellido;
   return conca;
}

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   var saludo= 'Hola ';
   var exclamación= '!';
   var conca= saludo+nombre+exclamación;
   return conca;
}

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   var area=alto*ancho;
   return area;
}

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un rectángulo.
   // Debes retornar su perímetro.
   // Tu código:
   var perimetro=lado*4
   return perimetro;
}

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   var area= (base*altura)/2;
   return area;
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   var dolar=1.20
   conversion=euro*dolar;
   return conversion;

}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   var er= 'Dato incorrecto';
   var va=  'Es vocal';
   var cont= letra.length;
   if(cont>1){
      return er;      
   }else{
      if((letra == 'a') || (letra =='e') || (letra =='i' )|| (letra =='o') || (letra =='u' )){

         return va;
      } else{
         return er;
      }
   }


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
