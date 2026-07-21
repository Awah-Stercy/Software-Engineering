//function to calculate the square of a number
function square(number) {
    return number * number;
}
console.log(square(6));

// function to check if a person is eligible to vote
function canVote(age) {
    if (age >= 18) {
        return"Eligible to vote";
    } else {
        return "Eligible to vote";
    }
}
console.log(canVote(20));
console.log(canVote(16));

//function to calculate the factorial of a number
function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));