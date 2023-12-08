var patterne = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// Si la clé n'est pas dans le parterne on reset
	if (patterne.indexOf(event.key) < 0 || event.key !== patterne[current]) {
		current = 0;
		return;
	}

	// Actualisation du nombre de paterne correct 
	current++;

	// Si le patterne est complet, pop up et reset
	if (patterne.length === current) {
		current = 0;
		window.alert('You found it!');
	}

};

document.addEventListener('keydown', keyHandler, false);