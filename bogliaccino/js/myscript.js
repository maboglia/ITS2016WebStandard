/*

6+4
10
6-4
2
6*4
24
6/4
1.5
6%4
2
6+4/2
8
(6+4)/2
5
6>4
true
6<4
false
6<=4
false
6<=6
true
6==6
true
6==6.0
true
6===6.0
true
6!=6.0
false
"hello" + "world"
"helloworld"
"hello " + " world"

"hello  world"

"hello" + " " + "world"
"hello world"
"hello" + " 2 " + "world"
"hello 2 world"
"hello" + 2 + "world"
"hello2world"
"hello " + 2 + " world"
"hello 2 world"
3 + " hello " + 2 + " world"
"3 hello 2 world"
3 + " hello " + 2  " world = " + 3+2 +" helloworld"
SyntaxError: missing ; before statement
	

3 + " hello " + 2  " world = " + 3+2 +" helloworld"

/* EXPR...oworld" (riga 2)
3 + " hello " + 2 + " world = " + 3+2 +" helloworld"
"3 hello 2 world = 32 helloworld"
 3+2 +" helloworld"
"5 helloworld"
	  3 + " hello " + 2;  " world = " + 3+2 +" helloworld"  
" world = 32 helloworld"
alert();
undefined
alert(5+6);
undefined
alert(5>6);
undefined
alert(5<6);
alert("non mangio da " + 5 + " minuti");
alert("non mangio da " == " minuti");
alert(" minuti" == " minuti");
alert(" minuti" == " Minuti");
(" minuti" == " Minuti");
false
(" minuti" == " minuti");
true
(" minuti" == "minuti");
false
("\tminuti \tsecondi");

"	minuti 	secondi"

("\tminuti \t\t\tsecondi");

"	minuti 			secondi"

("\tminuti \t\t\t\nsecondi");

"	minuti 			
secondi"

("Lorem ipsum dolor sit amet, consectetur adipisi...officia deserunt mollit anim id est laborum.i");
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.i"
alert("Lorem ipsum dolor sit amet, consectetur ad...officia deserunt mollit anim id est laborum.i");
alert("Lorem ipsum dolor sit amet\n\n, consectetu...officia deserunt mollit anim id est laborum.i");
("Lorem ipsum dolor sit amet\n\n, consectetur adi... deserunt mollit anim id est laborum.i".length);
449
("Lorem ".length);
6
("Lorem".length);
5
("Lorem".length > "Lorem ".length);



*/

var miaVariabile = 5;
var miaVariabile2 = 3.4;
var miaVariabile3 = 'scrivo qualcosa';
var miaVariabile4 = true;
var miaVariabile5 = miaVariabile * miaVariabile2;

// if(miaVariabile > 10) 
// 	alert(miaVariabile4);
// else
// 	console.log(miaVariabile3);

//questo è un commento su una riga
miaVariabile2 = 4;
//alert(miaVariabile5);

/*
mentre 	questo 

è un commento su più righe
*/
miaVariabile5 =  miaVariabile * miaVariabile2;
//alert();



//console.log(miaVariabile + miaVariabile2);
//alert(miaVariabile + miaVariabile2);

function faiAddizioni(x, y){
	// alert("messaggio dalla funzione");
	//console.log("rimessaggio dalla mia funzione");

	//memorizzo in una variabile locale il risultato della somma tra due variabili esterne
	if (x <10) 
		x=10;

	var somma = x + y;

	//console.log("Il valore della somma delle variabili è "      +        somma);

	//ritorna il valore dell'addizione e interrompe il flusso del codice della funzione
	return somma;


}

// console.log(faiAddizioni(5,4));
//alert(faiAddizioni(5,4));
var somma1 = faiAddizioni(6,5);
var somma2 = faiAddizioni(51,14);
var somma3 = faiAddizioni(somma1, somma2);

function modificaPagina(){



var barralaterale = document.getElementById("sidebar");
var nuovaTestatina = document.createElement("h1");
nuovaTestatina.innerHTML = "testo nuova testatina";
barralaterale.innerHTML = "";
barralaterale.appendChild(nuovaTestatina);

//document.write(barralaterale.innerHTML);
//document.write(miaVariabile3 + miaVariabile3);
}

//console.log(somma3);


