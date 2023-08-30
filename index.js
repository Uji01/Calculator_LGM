$(".rows input").on("click", function(){
    var exp1 = this.value;
    // console.log(this);
    calculate(exp1);
});

$(document).on("keydown",function(event){
    var keypressed = event.key;
    calculate(keypressed);
})
var counter = 0;
var ex1;
function calculate(exp){
    if(exp === 'RESET'){
        document.getElementById("result").value = "";
    }
    else if(exp === '=')
    {

        let userInput = ex1;
        let answer = Function("return " + userInput)();
        document.getElementById("result").value = answer;
    }
    else if(exp === 'DEL' || exp ==='Backspace')
    {
        var target = document.getElementById("result").value;
        document.getElementById("result").value = target.slice(0,-1);
    }
    else if(exp ==='1' || exp ==='2' || exp ==='3' || exp ==='4' || exp ==='5' || exp ==='6' || exp ==='7' || exp ==='8' || exp ==='9' || exp ==='0' || exp ==='+' || exp ==='-' || exp ==='*' || exp ==='/' || exp ==='.'){
        document.getElementById("result").value += exp;
        ex1 = document.getElementById("result").value;
    }
    else if(exp ==='Shift')
    {
        document.getElementById("result").value += "";
    }
    else{
        animation2();
    }

    if(ex1.length >= 11 && $(window).width() > 800)
    {
        scaleDownOutput();
    }
    else if(ex1.length < 11)
    {
        scaleUpOutput();
    }
}
function scaleDownOutput(){
    $("#result").removeClass("displaying-input");
    $("#result").addClass("reduced");
}
function scaleUpOutput(){
    $("#result").addClass("displaying-input");
    $("#result").removeClass("reduced");
}
function animation2(){
    $("body").addClass("pressed-wrong-key");
    setTimeout(function(){
        $("body").removeClass("pressed-wrong-key");
    },100);
}