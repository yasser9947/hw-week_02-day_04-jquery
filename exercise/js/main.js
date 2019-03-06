/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and 
* move on to the next question.
 */


//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the font color to blue.
 * We've started you off, ONLY replace everything instance of "replaceMe" with correct code.
 */

function question1() {
	$("p").css("color", "blue");
}

$("#button1").on('click', question1);

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 */

	function question2(){
	 	$("h2").text("yasser");
	}

 $("#button1").on('click', question2);

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 * Uncomment the code below and solve the problem
 */

	 function question3(){
		$(".falseFact").html("True Fact");
	}

	$("#button1").on('click', question3);


//SECTION 2: Now you are on your own. Write the necessary code to accomplish the following.

/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */
$("#button2").on('click', function(){

	$("body").css("background", "pink")
});



/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */
$("#button2").on('click', function(){

	$("h2").css("color", "green")
});


/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */
$("#button2").on('click', function(){

	$("blockquote").html("<span>no quote</span>")
});

//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

$("#button3").on('click', function(){

	$("h1").text("jQuery Ninja")
});
/**
 * Question 8:
 * Have the following code execute when button 3 is clicked.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */
$("#button3").on('click', function(){
	$(".city").attr("src", "http://lorempixel.com/g/500/400/food")

});
/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */
$("#button3").on('click', function(){
	$("p").css("color","blue")
	.css("font-family","Georgia")

});

/**
 * Question 10:
 * Try to do Question 9 but with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"})
 */

$("#button3").on('click', function(){
	$("header").css({attribute: "text-align", attribute: "left"})
});


