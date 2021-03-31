//j'initialise une variable avec les noms de tous les élèves
var students = ["Maxime", "Juan", "Yohan", "Laurène", "Valentin", "Fanny",
"Nourredine", "Marylise", "Raphaël", "Alexandre", "Tamara", "Maïalen", "Lucas",
"Sidney", "Vincent"];

//je crée une variable qui récupère un élève aléatoire dans le tableau "students"
var student = students[Math.floor(Math.random() * students.length)];
console.log(student);

//je veux placer 7 élèves dans un groupe et 8 dans l'autre
for (let i=0; i<7; i++){
	var result = Math.floor(Math.random() * students.length);
	//je pousse dans "group1" le nom d'un élève obtenu aléatoirement dans le tableau "students"
	group1.push(students[result]);
	//j'évite d'avoir un nom qui revient plusieurs fois dans le tableau
	students.splice(result, 1);
}
console.log(group1);