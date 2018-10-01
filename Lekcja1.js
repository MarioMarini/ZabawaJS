console.log("1")
var exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
console.log("Moje szczęśliwe liczby to:", exampleArray);
console.log("1a")
exampleArray.forEach(function(item, index) {
 exampleArray[index] = 2 * exampleArray[index]
});
console.log("Moje szczęśliwe liczby to:", exampleArray);
console.log("2")

var bazaosobowa = [
[1, "Jan", "Kowalski", "Poznań", 91071702258],
[2, "Robert", "Kowalski", "Poznań", 91071702258],
[3, "Zygmunt", "Kowalski", "Poznań", 91071702258],
[ 4, "Franek", "Kowalski", "Poznań", 91071702258],
];
console.log(bazaosobowa);

console.log("Koniec!")
