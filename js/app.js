let userScore = 0;
let compScore = 0;

let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
let result_text = document.querySelector(".fedback-result");

let user_emoji = document.getElementById("user-emoji");
let comp_emoji = document.getElementById("comp-emoji");

let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

let button_reset = document.getElementById("reset");



function compChoice() {
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    // console.log(index);
    return choices[index];
}



//================== Win function =============


function win(user, comp) {
    userScore++;
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    result_text.innerHTML = "<span>" + user + "</span>" + " <sub>(<i>user</i>)</sub> beats " + "<span>" + comp + "</span><sub>(<i>comp</i>)</sub>.   You win! 🤩️🤩️🤩️🤩️";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove("green-glow");
    }, 300);

}


function lose(user, comp) {
    compScore++;
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    result_text.innerHTML = "<span>" + user + "</span>" + " <sub>(<i>user</i>)</sub>  doesn't beats " + "<span>" + comp + "</span><sub>(<i>comp</i>)</sub>.   You lose! 😢️😢️😢️😢️";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove("red-glow");
    }, 300);
}

console.log(`${compChoice()} Hello world may baby`)
function draw(user, comp) {
    userScore++;
    compScore++;
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    result_text.innerHTML = "<span>" + user + "</span>" + " <sub>(<i>user</i>)</sub>   equal to  " + "<span>" + comp + "</span><sub>(<i>comp</i>)</sub>.   It's a draw! 🤯️🤯️🤯️🤯️";
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove("grey-glow");
    }, 300);
}

// =================== Game function ==========


function game(userChoice) {
    user = userChoice;
    comp = compChoice();

    switch (user + " " + comp) {
        case "rock scissors":
        case "scissors paper":
        case "paper rock":
            win(user, comp);
            break;

        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            lose(user, comp);

            break;
        case "rock rock":
        case "scissors scissors":
        case "paper paper":
            draw(user, comp);

            break;

        default:
            break;
    }

    // function comp_emoji_convert(comp) {

    // let compEmojitext = compChoice();

    switch (comp) {

        case "rock":
            // comp_emoji.innerHTML = "<h1>👊️</h1>";
            // let emoji = comp_emoji_convert(comp);
            comp_emoji.innerHTML = "<h1>" + "👊️" + "</h1>";
            // return ;
            break;

        case "paper":
            // comp_emoji.innerHTML = "<h1>✋</h1>";
            // return "✋";
            comp_emoji.innerHTML = "<h1>" + "✋" + "</h1>";
            break;

        case "scissors":
            // comp_emoji.innerHTML = "<h1>🤞️</h1>";
            // return "🤞️";
            comp_emoji.innerHTML = "<h1>" + "🤞️" + "</h1>";
            break;

        default:
            break;
        // }

    }

}

// ===========================   Reset Button Function ===============

function reset() {
    result_text.innerHTML = "Let's play <span>Rock Paper Scissors</span> with Computer!";
    userScore = 0;
    compScore = 0;
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    user_emoji.innerHTML = "";
    comp_emoji.innerHTML = "";

};

//======================== Set emoji function ================



function main() {

    rock_div.addEventListener('click', function () {
        // console.log("Rock clicked!");
        user_emoji.innerHTML = "<h1>👊️</h1>";
        // let emoji = comp_emoji_convert(comp);
        // comp_emoji.innerHTML = "<h1>" + emoji + "</h1>";
        game("rock");
    });

    paper_div.addEventListener('click', function () {
        // console.log("Paper clicked!");
        user_emoji.innerHTML = "<h1>✋</h1>";
        game("paper");
    });

    scissors_div.addEventListener('click', function () {
        // console.log("Scissors clicked!");
        // let emoji = comp_emoji_convert(comp);
        user_emoji.innerHTML = "<h1>🤞️</h1>";
        // comp_emoji.innerHTML = "<h1>" + emoji + "</h1>";
        game("scissors");
    });

    button_reset.addEventListener('click', function () {
        reset();
    })

};

main();
