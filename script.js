let n = Math.floor(Math.random() * words.length);
let word = document.getElementById("scramble-word");
let hint = document.getElementById("hint");
let output = document.getElementById("output");
let check = document.getElementById("Check");
let refresh = document.getElementById("Refresh");
let score = document.getElementById("score");
let answer = document.getElementById("answer");
let time = document.getElementById("time");
let start = document.getElementById("Start");
let stop = document.getElementById("Stop");
let correctsound = document.getElementById("correctSound");
let wrongsound = document.getElementById("wrongSound");
let gamestop = document.getElementById("game-stop");
let game = document.getElementById("game-start");
let t = 50;
ans = 0;
let count = 0;
function shuffle(element) {
	var i = element.length;
	while (i > 0) {
		let index = Math.floor(Math.random() * i);
		i--;
		let temp = element[i];
		element[i] = element[index];
		element[index] = temp;
	}
	return element;
}
let str = shuffle(words[n].word.split("")).join(" ");
word.innerHTML = str.toUpperCase();
hint.innerHTML = words[n].hint;
let intervalId;
function timer() {
	intervalId = setInterval(() => {
		t--;
		time.innerHTML = t;
		if (t == 0) {
			clearInterval(intervalId);
			alert("Game Over! Your score is" + " " + ans + " out of  " + count);
			t = 50;
			ans = 0;
			count = 0;
			location.reload();
		}
	}, 1000);
}
start.onclick = () => {
	game.play();
	ans = 0;
	count = 0;
	t = 50;
	time.innerHTML = t;

	clearInterval(intervalId);
	timer();
};
stop.onclick = () => {
	t = 50;
	gamestop.play();
	alert("Game Over! Your score is" + " " + ans + " out of  " + count);
	ans = 0;
	count = 0;
	score.innerHTML = ans;
	time.innerHTML = t;
	clearInterval(intervalId);

	random();
};

function random() {
	n = Math.floor(Math.random() * words.length);
	str = shuffle(words[n].word.split("")).join(" ");
	word.innerHTML = str.toUpperCase();
	hint.innerHTML = words[n].hint;
}
check.onclick = () => {
	console.log(answer.value + " " + words[n].word);
	if (!intervalId) {
		alert("Please Start the Game");
	} else if (answer.value === "") {
		output.innerHTML = "Please enter an answer";
		setTimeout(() => {
			output.innerHTML = "";
		}, 1000);
	} else if (answer.value.toLowerCase() === words[n].word) {
		correctsound.play();
		output.innerHTML = "Correct";

		setTimeout(() => {
			answer.value = "";
			output.innerHTML = "";
		}, 1000);
		ans++;
		count++;
		score.innerHTML = ans;
		random();
	} else {
		wrongsound.play();
		output.innerHTML = "Incorrect";
		setTimeout(() => {
			answer.value = "";
			output.innerHTML = "";
		}, 1000);
		count++;
		random();
	}
};

refresh.onclick = () => {
	n = Math.floor(Math.random() * words.length);
	str = shuffle(words[n].word.split("")).join(" ");
	word.innerHTML = str.toUpperCase();
	hint.innerHTML = words[n].hint;
};
