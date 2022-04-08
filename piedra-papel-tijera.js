var nombre = prompt ("Cual es tu nombre?");

alert("Bienvenido a esta pagina " + nombre + " aca podras jugar piedra papel o tijera con la computadora, mucha suerte y que Arceus lo bendiga");

var escoja = prompt ("por favor, escoje entre piedra papel o tijera");

var maquina = Math.floor(Math.random()*3);

// tijera es N0, papel es N1 y piedra es N2

if (( escoja == "tijera") && (maquina == 0 )) {

    document.write ("Empate")

} 

else if (( escoja == "papel") && (maquina == 1 )) {

    document.write ("Empate")
   
} 

else if (( escoja == "piedra") && (maquina == 2 )) {


    document.write ("Empate")
        
} 

else if (( escoja == "tijera") && (maquina == 1 )) {

    document.write ("Ganaste")
            
} 

else if (( escoja == "tijera") && (maquina == 2 )) {

    document.write ("Pierdes")
                
} 

else if (( escoja == "papel") && (maquina == 0 )) {

    document.write ("Pierdes")
                                
} 

else if (( escoja == "papel") && (maquina == 2 )) {

    document.write ("Ganaste")
    
}   
    
else if (( escoja == "piedra") && (maquina == 0 )) {

    document.write ("Ganaste")
        
}     
else if (( escoja == "piedra") && (maquina == 1 )) {

    document.write ("pierdes")
            
}        
else {


document.write ("Verifica si escribiste correctamente las opciones y en minusculas");

}