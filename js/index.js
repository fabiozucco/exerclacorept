var list = [];

for (var i = 0; i < 15; i++) {
	list.push(parseInt(prompt("Digite 15 valores")));
}

var higher = list[0];
var lower = list[0];

for (var n = 1; n < list.length; n++) {
	if (list[n] > higher){
	higher = list[n];
	}if (list[n] < lower)
	lower = list[n];
}

document.body.append("O maior é " + higher + " e o menor é " + lower)