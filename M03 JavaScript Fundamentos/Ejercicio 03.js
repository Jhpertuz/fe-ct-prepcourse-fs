/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.
   // Tu código:
   var z;
      if (x==y) {
         z=true;    
      }  else{
         z=false;
   }
   return z;
   
}

function tienenMismaLongitud(str1, str2) {
   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:
   var c1=str1.length;
   var c2=str2.length;  
   var z; 
   if(c1===c2){
      z=true;
      return z;
   }else{
      z=false;
      return z;
   }
   

}

function menosQueNoventa(num) {
   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:
   var z;
   if(num<90){
      z=true;   
   }else{
      z=false;
   }
   return z;
}

function mayorQueCincuenta(num) {
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
   var z;
   if(num>50){
      z=true;   
   }else{
      z=false;
   }
   return z;
}

function esPar(num) {
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
   var z;
   var cont= num%2;
   if(cont==0){
      z=true;   
   }else{
      z=false;
   }
   return z;
}

function esImpar(num) {
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
   var z;
   var cont= num%2;
   if(cont!=0){
      z=true;   
   }else{
      z=false;
   }
   return z;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
