
let temp;
getStudents((students)=>{
	temp = students;
	//console.log(temp);
});
//console.log(temp);


//2. je transforme la fonction en callback je set un timeout de 1 seconde
function getStudents(callback){
	var studentsList = ["Maxime", "Juan", "Yohan", "Laurène", "Valentin", "Fanny",
	"Nourredine", "Marylise", "Raphaël", "Alexandre", "Tamara", "Maïalen", "Lucas",
	"Sidney", "Vincent"];
	setTimeout(() => {callback(studentsList)}, 1000);
}


/*je pointe la balise <button> dans le document html via son id, j'y ajoute un event pour qu'à chaque
clique l'algorithme qui génère 2 groupes aléatoires s'enclenche*/
document.getElementById("button-addon1").addEventListener("click", ()=>{

	//je pointe mes balises <ol> via leur id
	var zone1 = document.getElementById("g1");
	var zone2 = document.getElementById("g2");

	var group1 = [];

	getStudents((stud)=>{		//stud = temp = studentsList
		//je veux placer 7 élèves dans un groupe et 8 dans l'autre
		for (let i=0; i<7; i++){
			var result = Math.floor(Math.random() * stud.length);
			//je pousse dans "group1" le nom d'un élève obtenu aléatoirement dans le tableau "students"
			group1.push(stud[result]);
			//j'évite d'avoir un nom qui revient plusieurs fois dans le tableau
			stud.splice(result, 1);
		}

		//ce qu'il reste du tableau "temp" est donc le "group2"
		var group2 = stud;

		zone1.innerHTML = ''
		/* j'itère dans mon groupe 1, à chaque élève je crée une balise <li> dans laquelle j'insère son nom,
		je relie ensuite l'élément 'li' à la balise <ol> déjà présente dans le document html*/
		for (let i = 0; i < group1.length; i++){
			var element = document.createElement("li");
			element.innerText = group1[i];
			zone1.appendChild(element);
		}
		
		zone2.innerHTML = ''
		for (let j = 0; j < group2.length; j++){
			var element = document.createElement("li");
			element.innerText = group2[j];
			zone2.appendChild(element);
		}
	});
});

//je réinitialise la page avec la méthode location.reload()
function refreshPage(){
	document.location.reload();
}

//fonction pour modifier le texte d'instruction lorsqu'on clique dessus
function changeText(){
	var instruction = document.getElementById("manual");
	if (instruction.innerHTML === " Click to read the fucking manual"){
		instruction.innerHTML = " Appui une fois sur le bouton 'tirage aléatoire' et rafraîchi !";
	}else{
		instruction.innerHTML = " Over and out !";
	}
}
