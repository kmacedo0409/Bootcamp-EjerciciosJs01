function callMenu(){
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6.Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9. Edad \r\n 10. Nombre y edad \r\n 11. Determinar el bono \r\n 12. Salario del profesor \r\n 13. Número de aprobados y desaprobados \r\n 14. Numero de focos \r\n 15. Elecciones  ")
    );
    if (isNaN(nro_ejercicio)){
        alert("porfavor ingresa valores numericos");

    }else{
        MenuEjercicios(nro_ejercicio);
    }
}
function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingrese el valor 1:"));
            let valor2 = parseFloat(prompt("ingrese el valor 2:"));
            alert(ej1_sumarvalores(valor1,valor2));
            break;

        case 2:
            let ex1= parseFloat(prompt("ingreselaprimeranota"));
            let ex2= parseFloat(prompt("ingreselaprimeranota"));
            let ex3= parseFloat(prompt("ingreselaprimeranota"));
            let ex4= parseFloat(prompt("ingreselaprimeranota"));
            alert(ej2_calcularpromedio(ex1,ex2,ex3,ex4));
            break;
                
        case 3:
            let base_rect = parseFloat(prompt("ingrese la base del rectangulo"));
            let alt_rect = parseFloat(prompt("ingrese la altura del rectangulo"));
            alert(ej3_areadelrectangulo(base_rect,alt_rect));
            break;

        case 4:
            let base_trian= parseFloat(prompt("ingrese la base del triangulo"));
            let alt_trian= parseFloat(prompt("ingrese la alt del triangulo"));
            alert(ej4_areadeltriangulo(base_trian,alt_trian));
            break;

        case 5:
            let pi= parseFloat(prompt("ingrese pi"));
            let radio= parseFloat(prompt("ingrese radio"));
            alert(ej5_areacircunferencia(pi,radio));
            break;

        case 6:
            let horas= parseFloat(prompt("ingrese numero de horas trabajadas"));
            let costo= parseFloat(prompt("ingrese costo por hora"));
            alert(ej6_salarioporhorasdetrabajo(horas,costo));
            break;

        case 7:
            let largo_tela= parseFloat(prompt("ingrese metros de tela que requiere:"));
            alert(ej7_telaenpulgadas(largo_tela));
            break;

        case 8:
            let dolares=parseInt(prompt("Cuantos soles quieres cambiar por dolares"))
            alert(ej8_sepuedeadquirir(dolares))
        
        case 9:
                let anio_nacimiento = parseFloat(prompt("¿Ingrese el año de tu nacimiento?:"));
                alert(ej9_Determinarlaedad(anio_nacimiento));
                break;
    
        case 10:
                let persona1= (prompt("persona1-ingrese nombre"));
                let persona1Edad= parseInt(prompt("persona1-ingrese edad"));
                let persona2= (prompt("persona2-ingrese nombre"));
                let persona2Edad= parseInt(prompt("persona2-ingrese edad"));
                let persona3= (prompt("persona3-ingrese nombre"));
                let persona3Edad= parseInt(prompt("persona3-ingrese edad"));
                alert(ej10_personademenoredad(persona1,persona1Edad,persona2,persona2Edad,persona3,persona3Edad));
                break;
                    
        case 11:
                let anio = parseFloat(prompt("ingrese años de trabajo"));
                alert(ej11_Determinarbono(anio));
                break;
    
        case 12:
               
                alert(ej12_salariodelprofesor(anio2));
                break;
    
        case 13:
                let nroalumnos = parseFloat(prompt("Ingrese cantidad de alumnos"));
                alert(ej13_determinarcantidaddealumnosaprobadosydesaprobados(nroalumnos));
                break;
    
        case 14:
                let nroFocos= parseFloat(prompt("ingrese numero de focos:"));
                alert(ej14_ContarFocos(nroFocos));
                break;
    
        case 15:
                let edad2= parseFloat(prompt("ingrese su edad:"));
                alert(ej15_determinarvoto(edad2));
                break;

                 
    }
}

function ej1_sumarvalores(a,b){
    if(isNaN(a) || isNaN(b)){
        return"por favor ingrese valores";

    }else{
        return a+b;
    }

}

function ej2_calcularpromedio(ex1,ex2,ex3,ex4){
    if(isNaN (ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)){
        return"por favor ingrese valores";

    }else{
        return (ex1 + ex2 + ex3 + ex4) /4;
    }
}

function ej3_areadelrectangulo(base_rect, alt_rect){
    if(isNaN (base_rect) || isNaN(alt_rect)){
        return "por favor ingresa valores";

    }else{
        return (base_rect * + alt_rect);
    }
}

function ej4_areadeltriangulo(base_trian, alt_trian){
    if(isNaN (base_trian) || isNaN(alt_trian)){
        return "por favor ingresa valores triangulo";

    }else{
        return (base_trian * + alt_trian) /2;
    }
}

function ej5_areacircunferencia(pi,radio ){
    if(isNaN (pi) || isNaN(radio)){
        return "por favor ingresa valores circunferencia";

    }else{
        return (pi * + radio * + radio);
    }
}

function ej6_salarioporhorasdetrabajo(horas,costo ){
    if(isNaN (horas) || isNaN(costo)){
        return "por favor ingresa valores";

    }else{
        return (horas* + costo);
    }
}
    
function ej7_telaenpulgadas(largo_tela ){
    if(isNaN (largo_tela)){
        return "por favor ingresa valores";

    }else{
        return (largo_tela)/0.0254;
    }
}
function ej8_sepuedeadquirir(dolares){
    if(isNaN (dolares)){
        return "por favor ingresa valores";

    }else{
        return "Usted puede cambiar" + (dolares) /3.90;
    }
}
function ej9_Determinarlaedad(anio_nacimiento){
    if(isNaN(anio_nacimiento)){
        return"por favor ingrese valores validos";

    }else{
        let anioactual= new Date().getFullYear();
        return (anioactual-anio_nacimiento);
    }

}
function ej10_personademenoredad(persona1,persona1Edad,persona2,persona2Edad,persona3,persona3Edad){
    if(isNaN (persona1Edad) || isNaN(persona2Edad) || isNaN(persona3Edad) ){
        return "por favor ingrese valores validos";
    }else if (persona1Edad<persona2Edad && persona1Edad<persona3Edad ){
        return ("Persona de menor edad es :" + persona1 + " y su edad es " + persona1Edad) ;
    }
    else if (persona2Edad<persona1Edad && persona2Edad<persona3Edad ){
        return ("Persona de menor edad es :" + persona2 + " y su edad es " + persona2Edad) ;

    } else if (persona3Edad<persona1Edad && persona3Edad<persona2Edad ){
        return ("Persona de menor edad es :" + persona3 + " y su edad es " + persona3Edad) ;
    }
}
function ej11_Determinarbono(anio) {
    let bono;
    switch(anio){
        case 1:
            bono = 100;
            break;
        case 2:
            bono = 200;
            break;
        case 3:
            bono = 300;
            break;
        case 4:
            bono = 400;
            break;
        case 5:
            bono = 500;
            break;
        default:
            bono = 1000;
            break
    }
    return ("Lo que le corresponde es:" + bono); 
}
function ej12_salariodelprofesor(anio2) {
    let sueldoini = 1500;
    let sueldoparcial;
    let respuesta = "El salario inicial es 1500.";
    for (let i = 1 ; i <= anio2 ; i++ ) {
        sueldoparcial = sueldoini*0.1 + sueldoini
        respuesta = respuesta + "El sueldo en anio " + i + " es:" + sueldoparcial + "." ;
        sueldoini = sueldoparcial
        //console.log("Valor de i:" +i)   
    }
    return respuesta;
}
function ej13_determinarcantidaddealumnosaprobadosydesaprobados(nroalumnos) {
    let nroaprobados=0
    let nrodesaprobados=0
    let notas = []
    for (let i = 1 ; i <= nroalumnos ; i++ ) {
        nota = parseInt(prompt("Ingresar nota valida de alumno "+i));
        notas.push(nota);
        if (nota <= 10 && nota > 0) {
            nrodesaprobados = nrodesaprobados +1
        }
        else if (nota > 10 && nota <= 20){
            nroaprobados++
        }
        else {
            alert("Ingresaste nota incorrecta")
        }
    }
    return ("La cantidad de aprobados es:"+nroaprobados + ", la cantidad de desaprobados es:"+nrodesaprobados + "\r\n las notas fueron:"+notas);    
}
function ej14_ContarFocos(nroFocos) {
    let nroverde=0
    let nroblanco=0
    let nrorojo=0
    let focos = []
    for (let i = 1 ; i <= nroFocos ; i++ ) {
        colorFoco = prompt("Ingresar color del foco "+i);
        focos.push(colorFoco);
        if (colorFoco == "verde") {
            nroverde++
        }
        else if (colorFoco == "rojo"){
            nrorojo++;
        }
        else if (colorFoco == "blanco"){
            nroblanco++;
        }
        else {
            alert("Ingresaste color de foco incorrecto")
        }
    }
    return ("La cantidad de focos verdes es:"+nroverde + ", la cantidad de focos rojos es:"+nrorojo + ", la cantidad de focos blancos es:"+nroblanco+ "\r\n Los focos ingresados fueron:"+focos);    
}
function ej15_determinarvoto(edad2){
    if(isNaN (edad2)){
        return "por favor ingresa valores validos"; }
        else if (edad2<18){
        return ("Usted no puede votar") ; } 
        else if (edad2>=18){
        return("Usted si puede votar")}
    }
