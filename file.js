//j'initialise une variable avec les noms de tous les élèves
var students = ["Maxime", "Juan", "Yohan", "Laurène", "Valentin", "Fanny",
"Nourredine", "Marylise", "Raphaël", "Alexandre", "Tamara", "Maïalen", "Lucas",
"Sidney", "Vincent"];

//je crée une variable qui récupère un élève aléatoire dans le tableau "students"
var student = students[Math.floor(Math.random() * students.length)];
console.log(student);

//à présent je veux placer 7 élèves dans un groupe et 8 dans l'autre