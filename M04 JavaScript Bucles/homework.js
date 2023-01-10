/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   var mayor;
   if(x>y){
      return x;
   }else if(x<y){
      return y;
   }else {
      return x;
   }

}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   var c1= 'Allowed';
   var c2= 'Not allowed';
   if (edad>17){
      return c1;

   }else{
      return c2;
   }
   
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   var c1='Online';
   var c2= 'Away';
   var c3= 'Offline';
   if(status==1){
      return c1;
   }else if(status==2){
      return c2;
   }else{
      return c3;
   }
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   var c1;
   if(idioma=="aleman"){
      c1="Guten Tag!";
      return c1;
   }else if(idioma=="mandarin"){
      c1="Ni Hao!";
      return c1;
   }else if(idioma=="ingles"){
      c1="Hello!";
      return c1;
   }else{
      c1="Hola!";
      return c1;
   }


}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   var auxi;
   switch(color){
      case 'blue':
         auxi="This is blue";
         return auxi;
         break;

      case 'red':
         auxi="This is red"
         return auxi;
         break;

      case 'green':
         auxi="This is green";
         return auxi;
         break;

      case 'orange':
         auxi="This is orange";
         return auxi;
         break;

      default:
         auxi = "Color not found";
         return auxi;


   }
}

function esDiezOCinco(num) {
   // Retornar "true" si "num" es 10 o 5.
   // De lo contrario, retornar "false".
   // Tu código:
   var auxi;
   if(num==10 || num==5){
      auxi= true;
   }else{
      auxi=false;;
   }
   return auxi;

}

function estaEnRango(num) {
   // Retornar "true" si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar "false".
   // Tu código:
   var auxi;
   if(num<50 && num>20){
      auxi=true;
   }else{
      auxi=false;
   }
   return auxi;
}

function esEntero(num) {
   // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna "false".
   // Tu código:
   var c;
   var auxi1=Math.pow(num,2);
   var auxi2=Math.trunc(num);
   var auxi3=Math.pow(auxi2,2);
   var auxi4=auxi1-auxi3;
   if(auxi4==0){
      c=true;
   }else{
      c=false;
   }
   return c;
   
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // De lo contrario, retorna el número.
   // Tu código:
   var r1=num%3;
   var r2=num%5;
   var s1='fizzbuzz';
   var s2='fizz';
   var s3='buzz';

   if(r1==0 && r2==0){
      return s1;
   }else if(r1==0){
      return s2;
   }else if(r2==0){
      return s3;
   }else {
      return num;
   }


}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si alguno de los argumentos es cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   var c1='Numero 1 es mayor y positivo';
   var c2='Hay negativos';
   var c3='Error';
   var c4=false;

   if((num1>num2)&&(num1>num3)&&(num1>0)){
      return c1;
   }else if((num1<0)||(num2<0)||(num3<0)){
      return c2;
   }else if((num3>num1)&&(num3>num2)){
      num3=num3+1;
      return num3;
   }else if((num1==0)||(num2==0)||(num3==0)){
      return c3;
   }else{
      return c4;
   }

}

function esPrimo(num) {
   // Retornar True si "num" es primo.
   // De lo contrario retorna False.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   var primo=false;
   var contador=0;
   var auxi;
   var auxi2=num+1;
   for(var i=1;i<auxi2;i++){
      auxi=num%i
      if(auxi==0){
         contador++;
      }else{
         contador=contador;
      }      
   }
   if(contador==2){
      primo=true;
   }else{
      primo=false;
   }

   return primo;
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   var c1='Soy verdadero';
   var c2='Soy falso';
   if(valor==true){
      return c1;
   }else{
      return c2;
   }
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar True.
   // Caso contrario, retornar False.
   // Tu código:
   var c1;
   
   var z=num.toString().length;
   if(z==3){
      c1=true;
   }else{
      c1=false;
   }
   return c1;
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   var auxi;
   var contador=0;   
   do{
      num=num+5;
      contador++

   }while(contador<8)
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
