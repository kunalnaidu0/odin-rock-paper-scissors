function getComputerChoice(){
    let value = Math.random();

    if (value >= 0 && value < 1/3){
        return "Rock"
    }

    else if (value >= 1/3 && value < 2/3){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

console.log(getComputerChoice())