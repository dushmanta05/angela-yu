// Generate a number and add to array every time we call it

var output = []
num = 0
function fizzbuzz(){
    output.push(num)
    num += 1
    console.log(output)
}
fizzbuzz();
fizzbuzz();

// Doing the FizBuzz

var output = []
num = 1
function fizzbuzz(){
    if(!(num % 3) && !(num % 5)){
        output.push("FizBuzz")
    }
    else if(!(num % 3)){
        output.push("Fizz")
    }
    else if(!(num % 5)){
        output.push("Buzz")
    }
    else{
        output.push(num)
    }
    num += 1
    console.log(output)
}
fizzbuzz();
fizzbuzz();
