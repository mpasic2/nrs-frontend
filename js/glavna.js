var incrementBtn = document.getElementsByClassName('inc');
var decrementBtn = document.getElementsByClassName('dec');
var buyBtn = document.getElementsByClassName('buy');
var cijene = [];
var proizvodi = [];
var kolicine = [];
var string = "";

for(var i = 0; i < incrementBtn.length; i++){
	var btn = incrementBtn[i];
	btn.addEventListener('click', function(event) {
		var btnClick = event.target;

		var input = btnClick.parentElement.children[1];

		var inputValue = input.value;

		var newValue = parseInt(inputValue) + 1;

		input.value = newValue;
	})
}

for(var i = 0; i < decrementBtn.length; i++){
	var btn = decrementBtn[i];
	btn.addEventListener('click', function(event) {
		var btnClick = event.target;

		var input = btnClick.parentElement.children[1];

		var inputValue = input.value;

		var newValue = parseInt(inputValue) - 1;

		if(newValue >= 1){
			input.value = newValue;
		}else{
			input.value = 1;
		}
	})
}

for(var i = 0; i < buyBtn.length; i++){
	var btn = buyBtn[i];
	btn.addEventListener('click', function(event) {
		var btnClick = event.target;
		console.log(btnClick.parentElement.children[0].textContent);
		var naziv = btnClick.parentElement.children[0].textContent;
		var cijena = btnClick.parentElement.children[2].children[0].textContent;
		var kolicina = btnClick.parentElement.children[4].children[1].value;

		var x = cijena.substring(7, 12);

		cijene.push(x);
		proizvodi.push(naziv);
		kolicine.push(kolicina);
		console.log("Ovo su proizvodi: " + proizvodi);
		document.getElementById('racun').innerHTML = proizvodi.toString();
		//console.log("Ovo je sadržaj html-a: " + sadrzajRacuna);
		

		//string += naziv + "  " + kolicina + "  " + cijena + "<br>";

	})
}

let pov = function(){
	return 1;
}