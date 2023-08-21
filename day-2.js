const prompt = require ("prompt-sync")({sigint: true})

function temp_convrt(val_C){

    let val_F = ((val_C * 9/5) + 32 )
    return val_F;

}

let temp_val_C = prompt("So you want to convert C to F. Fine enter temperature in C to convert: ")

let temp_val_F = temp_convrt(temp_val_C)
console.log(`${temp_val_C}`+ "C is " + `${temp_val_F}` + "F")
