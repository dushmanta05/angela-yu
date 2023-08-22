/* $("h1").css("color", "red")

// to apply jQuery after HTML is loaded

$(document).ready(function(){
    $("h1").css("color", "red")
})


// adding class
$("h1").addClass("className")

//remove class
$("h1").removeClass("className")

//adding multiple classes
$("h1").removeClass("className1 className2 className3")

//checking if a class is present or not
$("h1").hasClass("className")

// manipulating text
$("h1").text("newText")

// manipulating text
$("h1").text("newText")

// manipulating html
$("h1").html("<em>newText</em>")

// manipulating attributes
$("h1").attr("nameAttr") // --> getting the attribute value

$("h1").attr("nameAttr", "value") // --> setting the attribute value

// Since class is an attribute we can check all the classes too
$("h1").attr("class")

// adding Event listeners
$("h1").click(callbackFunction)

*/

// adding keyPress event listener

$(document).keypress(function(event){
    $("h1").text(event.key)
})

/*
// We can also use the "on" for eventListeners
$("h1").on("click", function(){ // --> takes the event name and the callback function
    console.log("Hi!")
}) 
*/

// adding and removing elements
$("h1").before("<button></button>"); // add element before h1

$("h1").after("<button></button>"); // add element after h1

$("h1").prepend("<button></button>"); // add element into the selected element(right after opening tag) 

$("h1").append("<button></button>"); // add element into the selected element(right after content of the element) 

$("h1").remove(); // removes the element


// Animations using jQuery

$("h1").hide() // hide
$("h1").show() // show
$("h1").toggle() // toggle between show and hide
$("h1").fadeout() // reduce the opacity and hide
$("h1").fadein() // opposite to fadeout
$("h1").fadetoggle() // toggle between fadein and fadeout
$("h1").slideup() // collapse
$("h1").slidedown() // uncollapse
$("h1").slicetoggle() // toggle between slideup and slidedown
$("h1").animate({opacity: 0.5}) // to use custom css, but remember we can only css which has numerical values

// chaining animation
$("h1").fadeout().fadein(),slideup()
