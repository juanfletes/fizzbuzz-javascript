const fizzbuzz = num => {

    const divisible = (num, divisor) => num % divisor === 0;

    if(typeof num !== 'number'){
        throw 'It is not a number';
    }

    if(num === 0){
        return 0;
    }

    if(divisible(num, 3) && divisible(num, 5)){
        return 'fizzbuzz';
    }

    if(divisible(num, 3)){
        return 'fizz';
    }

    if(divisible(num, 5)){
        return 'buzz';
    }
    
    return num;
}

module.exports = fizzbuzz;



// Using fizzbuzz
const print = (max_number) => {

    for (let index = 0; index <= max_number; index++) {
        console.info(`Index: ${index}, value: ${fizzbuzz(index)}`)
        
    }

}
// print(16);
