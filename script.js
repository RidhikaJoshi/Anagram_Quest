let n = Math.floor(Math.random() * words.length);
let word = document.getElementById("scramble-word");
let hint = document.getElementById("hint");
let output = document.getElementById("output");
let check = document.getElementById("Check");
let refresh = document.getElementById("Refresh");
let score = document.getElementById("score");
let answer = document.getElementById("answer");
let time = document.getElementById("time");
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

function timer() {
	setInterval(() => {
		t--;
		time.innerHTML = t;
		if (t == 0) {
			alert("Game Over! Your score is" + " " + ans + " out of  " + count);
			t = 50;
			ans = 0;
			count = 0;
			location.reload();
		}
	}, 1000);
}
timer();

function random() {
	n = Math.floor(Math.random() * words.length);
	str = shuffle(words[n].word.split("")).join(" ");
	word.innerHTML = str.toUpperCase();
	hint.innerHTML = words[n].hint;
}
check.onclick = () => {
	console.log(answer.value + " " + words[n].word);
	if (answer.value === "") {
		output.innerHTML = "Please enter an answer";
		setTimeout(() => {
			output.innerHTML = "";
		}, 1000);
	} else if (answer.value.toLowerCase() === words[n].word) {
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
