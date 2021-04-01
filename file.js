//j'initialise une variable avec les noms de tous les élèves
var students = ["Maxime", "Juan", "Yohan", "Laurène", "Valentin", "Fanny",
"Nourredine", "Marylise", "Raphaël", "Alexandre", "Tamara", "Maïalen", "Lucas",
"Sidney", "Vincent"];

//j'initialise une variable temporaire qui stocke tous les élèves
var temp = students;

var group1 = [];

document.getElementById("button-addon1").addEventListener("click", ()=>{

	//je pointe mes balises <ul> via leur id
	var zone1 = document.getElementById("g1");
	var zone2 = document.getElementById("g2");

	//je réinitialise le tableau à chaque nouveau click
	zone1.innerHTML = '';
	zone2.innerHTML = '';

	//je veux placer 7 élèves dans un groupe et 8 dans l'autre
	for (let i=0; i<7; i++){
		var result = Math.floor(Math.random() * temp.length);
		//je pousse dans "group1" le nom d'un élève obtenu aléatoirement dans le tableau "students"
		group1.push(temp[result]);
		//j'évite d'avoir un nom qui revient plusieurs fois dans le tableau
		temp.splice(result, 1);
	}

	//ce qu'il reste du tableau "temp" est donc le "group2"
	var group2 = temp;


	for (let i = 0; i < group1.length; i++){
		var element = document.createElement("li");
		element.innerText = group1[i];
		zone1.appendChild(element);
	}
	

	for (let j = 0; j < group2.length; j++){
		var element = document.createElement("li");
		element.innerText = group2[j];
		zone2.appendChild(element);
	}

});








