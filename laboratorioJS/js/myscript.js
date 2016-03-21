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

//lezione del 2016/03/07
//Accedere al DOM 
// individua i single element della pagina 

//by Id
var header = document.getElementById("header");
var navItems = document.getElementById("nav");
var container = document.getElementById("container");
var footer = document.getElementById("footer");

var demoSezione = document.getElementById("demo");
var titoloSezione = document.getElementById("demoSectionTitle");
var titoloArticolo = document.getElementById("demoArticleTitle");
var firstParagraph = document.getElementById("first_paragraph");
var secondParagraph = document.getElementById("second_paragraph");
var demoFooterTitle = document.getElementById("demoFooterTitle");

var rightSidebar = document.getElementById("right_sidebar");
var listaFunzioni_js1 = document.getElementById("lista_funzioni_js1");

//by tagname
var allLinks = document.getElementsByTagName("a");
var allH2 = document.getElementsByTagName("h2");
var unorderedLists = document.getElementsByTagName("ul");
var orderedLists = document.getElementsByTagName("ol");
var mainContent = document.getElementsByTagName("main");

//combinati
var linkNav = document.getElementById("nav").getElementsByTagName("a");
var linkSide = document.getElementById("right_sidebar").getElementsByTagName("a");



function pulisciArticolo () {
	//sostituisci testo
	 first_paragraph.innerHTML = "";
}

function scriviArticolo (argument) {
	//sostituisci testo
	// first_paragraph.innerHTML = argument;

	//aggiungi testo metodo 1

	var nuovoParagrafo = document.createElement("p");
	nuovoParagrafo.innerHTML = argument;
	first_paragraph.appendChild(nuovoParagrafo);

}

function scriviTitolo (argument) {
	titoloArticolo.innerHTML = argument;
}


//array di allievi
		var allievi = [
			"Avvisato", "Barbero", "Bavato", "Brandozzi", "Borgo", "Brean", "Castagno", "Delmastro", "Lanzetti", "Lo Rillo", "Narese", "Paschetta", "Perrone", "Piazza", "Quartero", "Quatrale", "Savasta", "Scudeler", "Spano", "Zeppegno", "Bianco", "Contessa", "Donofrio", "Libore", "NKomp", "Sacchetto", "Salarzehi", "Torresin"    ];



function scriviArticoloCOMPLETO (argument1,argument2) {
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







function infoDOM () {
	// body...

// che tipo di nodo
console.log("Node of type: ", titoloSezione.nodeType);
console.log("Inner HTML: ", titoloSezione.innerHTML);
console.log("Child nodes: ", titoloSezione.childNodes.length);

// quanti link ci sono nella pagina?
console.log("Links: ", allLinks.length);
// quante liste?
console.log("Ordered lists: ", orderedLists.length);
console.log("Unordered lists: ", unorderedLists.length);

// elementi combinati
console.log("Link  in mainNav: ", linkNav.length);
console.log("Link  in sidebar: ", linkSide.length);

}

//risistema tutto
function restore_home(){
	header.style.border = "none";
	demoSezione.style.color = "black";

	scriviTitolo("");
	scriviArticolo("");

	
}
//modificare il DOM
function modificaDOM_1(){
	header.style.border = "1px solid black";
	//allH2.style.color = "#C00";
	demoSezione.style.color = "#C00";

	
}

//mainTitle = document.getElementById("mainTitle");
//console.log(mainTitle.innerHTML);

//var sidebar = document.getElementById("sidebar");
//console.log(sidebar.innerHTML);

//var arrayOfH1s = mainContent.getElementsByTagName("h1");
//arrayOfH1s[0].innerHTML = "This is a new title";

//funzioni aritmetiche

function Calcola(){
	op1 = 5;
	op2 = 4;
	somma = op1 + op2;
	differenza = op1 - op2;
	prodotto = op1 * op2;
	quoziente = op1 / op2;
	var testo;
	testo = ("<br/>Il risultato dell'addizione è " + somma);
	testo += ("<br/>Il risultato della sottrazione è " + differenza);
	testo += ("<br/>Il risultato della moltiplicazione è " + prodotto);
	testo += ("<br/>Il risultato della divisione è " + quoziente);
	
	scriviTitolo("Funzione Calcola: le 4 operazioni aritmetiche dati i parametri 5 e 4");
	scriviArticolo(testo);
	}

function CalcolaTable()
	{	var test = ('<table border="1">');
		for (i=1;i<=10;i++)
			{	test += ('<tr>');
				for (j=1;j<=10;j++)
				{	test += ('<td align="center">');
					test += (i*j);
					test += ('</td>');
				}
				test += ('</tr>');
			}
		test += ('</table>');
	scriviTitolo("La tavola pitagorica");
	scriviArticolo(test);
	//document.write(test);
	}

function Quadrati(){	
			document.writeln("Stampo i quadrati dei primi 15 numeri");
		for (i=1;i<=15;i++)
			document.writeln(i*i + "<br>");
			document.writeln("Fine elaborazione");
			document.writeln("Torna indietro col tasto del browser");
	}


function TestaCroce(){
	var coinFace = Math.floor(Math.random() * 2);
	while(coinFace === 0){
		console.log("Testa! Prova ancora...");
		var coinFace = Math.floor(Math.random() * 2);
	}
	console.log("Croce! Terminato.");
}

function Divisore35 () {
	
	for(var i = 1; i < 21; i++){
	    if(i % 3 === 0 && i % 5 === 0){
	        console.log(i + " è divisibile per 3 e per 5!");
	    }else if(i % 3 === 0){
	        console.log(i + " è divisibile per 3!");
	    }else if(i % 5 === 0){
	        console.log(i + " è divisibile per 5!");
	    }else{
	        console.log(i);
	    }
	}

}

function arrayCitta (argument) {
// Introduction to 'For' Loops in J  excercise 11/13

	var cities = ["Torino", "Milano", "Roma", "Napoli","Venezia","Bologna"];

	for (var i = 0; i < cities.length; i++) {
	    console.log("Vorrei visitare " + cities[i]);
	}


}

function arrayNomi (argument) {
// Introduction to 'For' Loops in J  excercise 12/13

	var names = ["Mauro","Paolo","Marco","Matteo","Giovanni"];
	for (var i = 0; i < names.length; i ++) {
	    console.log("Un mio amico si chiama " + names[i]);
	}
}


function promptColori (argument) {
// More on Control Flow in JS 5/14
	var color = prompt("Qual è il tuo colore primario preferito?","Scrivi il tuo colore preferito qui");

	switch(color) {
	  case 'rosso':

	    console.log("Red's a good color!");
	    scriviArticolo("Red's a good color!");
	    break;
	  case 'blu':
	    console.log("That's my favorite color, too!");
	    scriviArticolo("That's my favorite color, too!");
	    break;
	  case 'giallo':
	      console.log("makes me think of parasols in spring");
	      scriviArticolo("makes me think of parasols in spring");
	      break;  
	  default:
	    console.log("I don't think that's a primary color!");
	    scriviArticolo("I don't think that's a primary color!");
	}
}

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



//------------------------------------------------
//Cambia lo sfondo della pagina

var Colori = new Array("red", "green", "blue", "black", "cyan", "#660099");
var count = 0;
var stop = false;

function setcolor()     
{
	if (stop!=true)           
    	{
		document.bgColor=Colori[count];

		

		count++;

		if (!Colori[count])
		{
			count = 0;	
		}
		window.setTimeout("setcolor()",2000);
	}
}

//---------------------------------------20160321---------

var studente = {
	nome		:	"Paolo",
	cognome		:	"Bogliaccino",
	eta			:	1,
	coloreOcchi	: "azzurri",
	vivace		: true,
	giochi		: ['orsetto', 'puzzle', 'trenino']
};

var corsoITS = {
	istituto		:	"ITS",
	indirizzo		:	"Piazza dei Mestieri 2",
	numeroAllievi	:	28,
	annoDiCOrso		: 	[1,2],
	primoAnno		: 	true,
	secondoAnno		: 	false,
	aule			: 	[3, 4, 5, 8],
	materie			: 	['Web Standard II', 'Java per Android'] 
};


function presentaStudente(){

var studente = {
	nome		:	"Paolo",
	cognome		:	"Bogliaccino",
	eta			:	1,
	coloreOcchi	: "azzurri",
	vivace		: true,
	giochi		: ['orsetto', 'puzzle', 'trenino']
};
	var articolo = "Nome: " + studente.nome + "<br/> ";
	 articolo += "cognome: " + studente.cognome + "<br/> ";
 articolo += "giochi: " +   "<br/> ";
 articolo += "<ul> ";
	 for (var i = 0; i < studente.giochi.length; i++) {
	 	
		 articolo += "<li>giochi: " + studente.giochi[i] + "</li> ";
	 };

 articolo += "</ul> ";

	scriviArticolo(articolo);

}


//----------------------------costruisco slideshow con setInterval()------

function swapImage(){
	var miaImg = document.getElementsByTagName("img");

	alert(miaImg.getAttribute("src"));

	
}


//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------











