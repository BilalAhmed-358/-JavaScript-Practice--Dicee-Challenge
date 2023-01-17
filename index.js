main();

function main() {

    let var1 = calculatingRandomNumber();
    let var2 = calculatingRandomNumber();
    document.querySelector(".dice .img1").setAttribute("src", setdice(var1));
    document.querySelector(".dice .img2").setAttribute("src", setdice(var2));


    if (var1 === var2) {
        document.querySelector(".container h1").textContent = "It's a draw!";
    }
    else if (var1 > var2) {
        document.querySelector(".container h1").textContent = "Player1 wins!🚩";
    }
    else {
        document.querySelector(".container h1").textContent = "Player2 wins!🚩";

    }

}

function setdice(num) {
    let filePath = "images/dice";
    filePath += num;
    filePath += ".png"
    return filePath;
}

function calculatingRandomNumber() {
    let random = Math.random() * 6;
    random = random % 6 + 1;
    random = Math.floor(random);
    return random;
}
