//inicializamos con window.onload para que espere a que cargue la pag antes de operar
window.onload = iniciar;

function iniciar(){//en esta primera funcion LLAMAMOS al boton con el que vamos a calcular y e AÑADIMOS el evento de click
    let btnCalcular = document.getElementById('btnCalcular');//id btnCalcular en html que tiene el boton submit del formulario
    //LLAMAMOS al elemento html del boton y loguardamos enuna variable, esta variable, por coherencia normalnmente se epone el nomre del IS del elemento que señala
    btnCalcular.addEventListener('click', clickBtnCalcular); //DAMOS un evento al boton con la variable que hemos creado en a linea de arriba, un click que ejecute una funcion que la funcion que queremos que ejecutar es donde se encuentra el calculo del IMC

}

function clickBtnCalcular(){//esta funcion se ejecuta cuando se haga CLICK en el boton de HTML calcular
    //CON LAS AVRIABLES DE ABAJO obtenemos los datos mediante la interfaz por pantalla en lugar de como haciamos en otras ocasiones con el PROMPT
    let txtPeso = document.getElementById('txtPeso'); //LLAMAMOS al elemento html del input peso y lo guadamos en una variable
    let peso = txtPeso.value; //INTRODUCMOS el valor de peso en una variable con la propiedad VALUE
    
    let txtAltura = document.getElementById('txtAltura');//LLAMAMOS al del input peso y lo guadamos en una variable
    let altura = txtAltura.value; //INTRODUCMOS el valor de peso en una variable con la propiedad VALUE

    let imc = peso / (altura*altura); //con esta variable "imc" hace 

    alert("Tu IMC es: " + Math.round(imc));//Math.round(imc) -> para que la variable imc devueva sin tantos decimales
    //esta ultima variable que tiene la operacion de los datos se ejecuta a traves de auncion en la que la hemos metido y la funcion clickBtnCalcular se ejecuta porque esta dentro de la funcion iniciar
}


//todo este ejercicio funciona con eventos