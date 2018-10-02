console.log("Zadanie 1")
let exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
let napis ="Moje szczęśliwe liczby to: ";
for (var i = 0; i < exampleArray.length; i++) {
  napis = napis + exampleArray[i]
  if ( i != exampleArray.length-1) { //Po ostatnim elemencie jest kropa a nie przecinek
    napis = napis + ","
  } else {
    napis = napis + "."
  }
}
console.log(napis)

console.log("Zadanie 1a")
for (var i = 0; i < exampleArray.length; i++) {
  exampleArray[i] = 2 * exampleArray[i]
}
console.log("Moje szczęśliwe liczby to:", exampleArray);

console.log("Zadanie 2")
let rodo = [{nr:1, imie:"Jan", nazwisko:"Kowalski", pesel:91071702258},{nr:2, imie:"Robert", nazwisko:"Kowalski", pesel:91071702258},{nr:3, imie:"Zygmunt", nazwisko:"Kowalski", pesel:91071702258},{nr:4, imie:"Franek", nazwisko:"Kowalski", pesel:91071702258}];
for (let i = 0; i < rodo.length; i++) {
  console.log("Osoba numer " + rodo[i].nr + " w bazie danych: " + rodo[i].imie + " " + rodo[i].nazwisko + " " + rodo[i].pesel)
}

console.log("Koniec!")
