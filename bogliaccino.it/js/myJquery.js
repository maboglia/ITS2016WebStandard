$(document).ready(function() {
// $( "ul li:nth-child(2n)" ).append( "<span> - 2nd!</span>" );

// $("#primoUL + p").css("border", "3px solid green");
// $("#primoUL ~ ul").css("border", "3px solid red");

var mioElem = $("#secondoUL");

// mioElem.prev().prev().css('font-size', '1.3em');
// mioElem.find('li.evidenzia').css('background-color', 'red');

var i = 0;
mioElem.find('li').each(function(index, el) {
	i++;
	$(el).css('border', i+'px solid red');	
});


	// $("#primoUL li.evidenzia").text("nuovo testo").css('color', 'red');
	 //$(".evidenzia ").css("background-color","yellow");
	// $("ul > .evidenzia").css("background-color","yellow");
	//$("ul li:first").css("background-color","red");
	//$("#primoUL li:last, #secondoUL li:last").css("background-color","red");



	// $("li:even").css({
	// 	color: 'yellow',
	// 	backgroundColor: 'blue'
	// });

	$("li:contains('esercizio1')").parent().parent().css('border', '1px solid black');


	$("#btnTester").click(
		function(event) {
		
		var test = $("#tester").val();
		// alert(test);
		$("li").css('color', 'black');
	// $("li:contains(" + test + ")").html("<a href='#'>approvato</a>");
	$("ul:nth-child(3)").css("color", "green");

	});


	var contatore = 0;

	function slideshow(){

		var img = 'banksy' + contatore + '.jpg';

		$("#content").html('<img src="images/' + img +'" />');

		if(contatore < 8)		contatore++; else contatore = 0;

	}

	//var intervallo = setInterval(slideshow, 1000);



	//var myContent = document.getElementById("content");
	//var myPortfolio = $("#portfolio");

	$("#btnLab").click(function(event) {

		//console.log(event);
		/*$("#content p:first")
			.css("border","2px solid red")
			.css("font-size","45px");

		$("#portfolio").css("border","2px solid green");
		$(".evidenzia").css("background-color", "yellow")
		
		$("#sidebar li:odd").css("background-color", "#ccc");
		*/



		$("section").hide(300);
		$("#content").show(3000);
		$("#content p").addClass('red');
		$("#content p:first").removeClass('red');
		$("#content p").toggleClass('red');
		clearInterval(intervallo);
		
	});





		$("#btn1").click(function(event) {
			//mi collego al file php/json
			$.getJSON( "js/aula_mobile.json", function( data ) {
				//creo un array js vuoto
			  var items = [];
			  //per ogni elemento del json inserisco un item nell'array JS
			  $.each( data.elenco_allievi, function( key, val ) {
				//alert(val.nome);
				items.push("<div>");
			    items.push( "<h2>" + val.nome + " " + val.cognome + "</h2>" );
			    items.push("<ul>");
			    items.push("<li>"+ val.job_title +"</li>");
			    items.push("<li>"+ val.residenza +"</li>");

			    items.push(val.skills);
		    		// for (var i = 0; i < val.skills.length; i++) {
			    		
			    		// items.push("<li>"+ val.skills +"</li>");
			    		// items.push("<li>"+ val.skills +"</li>");
			    		// items.push("<li>"+ val.skills +"</li>");
		    			
		    		// };

			    items.push("</ul>");
			    items.push("<img class='img-responsive img-circle' src='images/"+val.image+"' alt='foto di'/>");

				items.push("</div>");
			  });
			 
			//alert(items.join( "" ));
	  		//$("#secondo_paragrafo").text("");

			 //creo un elemento ul e lo riempio con il contenuto dell'array JS
			 //infine aggiungo il nuovo elemento al dive lateraleSx della mia pagina
			  // $( "<div/>", {
			  //   "class": "my-new-list",
			  //   html: items.join( "" )
			  // }).appendTo( "#secondo_paragrafo" );
				alert();
		  	$( "#slideshow" ).html(items.join( "" ));

			});





			//$("#lateraleDx img").hide("slow");
			//$("#lateraleDx img").show("fast", function(){});
			//$("#lateraleDx img").toggle(3000);
			// $("#lateraleDx img").fadeTo("fast", 0.3)
   //                          .fadeTo("fast", 1.0)
   //                          .fadeTo("fast", 0.3)
   //                          .fadeTo("fast", 1.0);
		
   				// $("#lateraleDx img").slideUp(500);
   				// $("#lateraleSx p").animate({fontSize:"10px", textAlign:"right"}, 1500);


   				$


		});


		$("#btn2").click(function(event) {
 				 $("#lateraleSx p").animate({fontSize:"20px", textAlign:"left"}, 1500);


   				 //$("#lateraleDx img").slideDown(500).fadeTo("fast", 0.3);
			// $("#lateraleDx img").fadeOut(300);
			

		});





		// $("#primoBox").on('mouseover mouseleave',  function(event) {
		// 	//event.preventDefault();
		// 	$("#lateraleDx img").toggle(3000);
		// 	/* Act on the event */
		// });
		// $("#btn2").off('mouseover mouseleave',  function(event) {
		// 	//event.preventDefault();
		// 	$("#lateraleDx img").show(3000);
		// 	/* Act on the event */
		// });

	$("#editText1").on("keypress", function(e){
		alert(e.charCode);
		$("#primoParagrafo").text(String.fromCharCode(e.charCode));
	});





});

