/* First Button */
const btn1 = document.getElementById("btn1");
const closeW1 = document.getElementById("closeW1");

closeW1.addEventListener("click", function() {
        
    document.getElementById("main").style.opacity = ("1");
    document.getElementById("pop1").style.display = ("none");
 
});

btn1.addEventListener("click", function() {

    document.getElementById("main").style.opacity = ("0.5");
    document.getElementById("pop1").style.display = ("flex");
    
});


/* Second Button */
const btn2 = document.getElementById("btn2");
const closeW2 = document.getElementById("closeW2");

closeW2.addEventListener("click", function() {
        
    document.getElementById("main").style.opacity = ("1");
    document.getElementById("pop2").style.display = ("none");
 
});

btn2.addEventListener("click", function() {

    document.getElementById("main").style.opacity = ("0.5");
    document.getElementById("pop2").style.display = ("flex");
    
});


/* Third Button */
const btn3 = document.getElementById("btn3");
const closeW3 = document.getElementById("closeW3");

closeW3.addEventListener("click", function() {
        
    document.getElementById("main").style.opacity = ("1");
    document.getElementById("pop3").style.display = ("none");
 
});

btn3.addEventListener("click", function() {

    document.getElementById("main").style.opacity = ("0.5");
    document.getElementById("pop3").style.display = ("flex");
    
});
