//alert("funziona!");
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

//individua elementi della pagina by Id
var header = document.getElementById("header");
var container = document.getElementById("container");
var nav = document.getElementById("nav");
var footer = document.getElementById("footer");
var demo = document.getElementById("demo");
var main = document.getElementById("main");
var first_paragraph = document.getElementById("first_paragraph");
var second_paragraph = document.getElementById("second_paragraph");
var demoSectionTitle = document.getElementById("demoSectionTitle");
var right_sidebar = document.getElementById("right_sidebar");
var titoloDemo = document.getElementById("demoArticleTitle");
var titoloArticolo = document.getElementById("demoArticleTitle");


//individua elementi della pagina by tagname
var allLinks = document.getElementsByTagName("a");
var allH2 = document.getElementsByTagName("h2");
var unorderedLists = document.getElementsByTagName("ul");
var orderedLists = document.getElementsByTagName("ol");
var mainContent = document.getElementsByTagName("main");


// body.onload = function () {
// 	scriviTitolo("caricato il DOM");
// } ;

//combinati
var linkNav = document.getElementById("nav").getElementsByTagName("a");
//equivale a scrivere:
//var linkNav = nav.getElementsByTagName("a");
var linkSide = document.getElementById("right_sidebar").getElementsByTagName("a");

//array di allievi
		var allievi = [
			"Avvisato", "Barbero", "Bavato", "Brandozzi", "Borgo", "Brean", "Castagno", "Delmastro", "Lanzetti", "Lo Rillo", "Narese", "Paschetta", "Perrone", "Piazza", "Quartero", "Quatrale", "Savasta", "Scudeler", "Spano", "Zeppegno", "Bianco", "Contessa", "Donofrio", "Libore", "NKomp", "Sacchetto", "Salarzehi", "Torresin"    ];

function scriviTitolo (argument) {
	titoloArticolo.innerHTML = argument;
}

function scriviArticolo (argument1,argument2) {
	first_paragraph.innerHTML = argument1;
	second_paragraph.innerHTML = argument2;
}



function elencoAllievi() {
		first_paragraph.innerHTML = "<h3>Elenco allievi</h3>";
		second_paragraph.innerHTML = "";

			var testo = "";
		for (var i = 0; i < allievi.length; i++) {
		
			testo += "<li>" + allievi[i] + "</li>";
		//alert(allievi[i]);
						
		};

		second_paragraph.innerHTML = "<ol>" +testo+"</ol>" ;

}


function modificaDOM() {

	header.style.border = "3px dotted #fc3";
	titoloDemo.style.color = "#fc3";

}



function infoDOM() {
	demo.innerHTML = "<h1>prova</h1>";
	//tutti i link della pagina sono:
	console.log("Tipo di nodo: " + right_sidebar.nodeType);
	console.warn("Il contenuto di demo: " + demo.innerHTML);
	console.log("I link in questo documento sono: " + allLinks.length);
	console.info("I link nella sidebar sono: " + linkSide.length);
}


function ripristina_home() {
	header.style.border = "none";
	titoloDemo.style.color = "black";

	scriviTitolo("<h1>titolo iniziale</h1>");
	scriviArticolo("<p>Primo paragrafo: articolo</p", "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>");

}

function tabellina () {
	//inizializzo la variabile test con una tabella html
	var test = ("<table border='1'>");
		//ciclo for
		for (var i = 1; i <= 10; i++) {
			//stampo le righe
			test += ('<tr>');
				//stampo le colonne
				for (var j = 1; j <= 10; j++) {
					if ((i * j ) % 2 == 0)
					test += ('<td class="bkg_red">');
					else
					test += ('<td>');

					//calcolo il prodotto di riga x colonna
					test += i * j ;					
					test += ('</td>');
				};

			test += ('</tr>');

		};

	//chiudo la tabella html
	test += "</table>";

	scriviArticolo("<h3>Tavola Pitagorica</h3", test);
}

function potenze() {
	document.writeln("Stampo i primi 15 quadrati");	
	for (var i = 1; i < 15; i++) {
		  document.writeln(i*i);
	};
}
titoloArticolo.onclick = function cambiaColore (argument) {
	var colore = prompt("Qual è il tuo colore preferito", "Scrivi qui il tuo colore preferito");

	scriviTitolo("il mio colore preferito è " + colore);
	titoloArticolo.style.color = colore;

}

