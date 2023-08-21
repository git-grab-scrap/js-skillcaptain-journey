const prompt = require ("prompt-sync")({sigint: true})

let loop_val = TRUE

while (loop_val){
    let mul_num = prompt("Enter a number to print it's multiples: ")

    if (mul_num == 0 || mul_num < 0 ){
        console.log("Bruh! Enter a positive number!!")
    }
    else {
        console.log("First 10 multiples of your number are =====")
        for (count = 1 ; count <= 10; count++){
            console.log(mul_num + "*" + count + ": " + (mul_num * count ))
        }
    }
    loop_val = FALSE
}
