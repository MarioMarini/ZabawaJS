Zadanie 1
<div class="container">
  <div class="personal-data">
    <span>Bruce</span>
    <span>Wayne</span>
  </div>
  <div class="job-data">
    <span>Batman</span>
  </div
</div>

const imie = document.querySelector('.personal-data').innerText
const praca = document.querySelector('.job-data').innerText
if ((imie == "Bruce Wayne") && (praca == "Batman")) 
{
  console.log("TEST 1 -POZYTYWNY")
  alert("ok")
} else {
  console.log("TEST 1 -NEGATYWNY")
}

Zadanie 2:
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>
<table style="width:10%">
  <tr>
    <td>Imię:</td>
    <td class="name"></td>
  </tr>
   <tr>
    <td>Nazwisko:</td>
    <td class="surname"></td>
  </tr>
   <tr>
    <td>Funkcja:</td>
    <td class="role"></td>
  </tr>
     <tr>
    <td>Miasto:</td>
    <td class="city"></td>
  </tr>
</table>

const MY_INFO__DB = {
  name:"Bruce",
  surname:"Wayne",
  role:"Batman",
  city: "Gotham",
};
document.querySelector(".name").innerText = MY_INFO__DB.name
document.querySelector(".surname").innerText = MY_INFO__DB.surname
document.querySelector(".role").innerText = MY_INFO__DB.role
document.querySelector(".city").innerText = MY_INFO__DB.city


Zadanie 3:
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>
<table class="table1">
</table>

const SUPERHEROES= [{
  name: 'Bruce',
  surname: 'Wayne',
  role: 'Batman',
  city: 'Gotham',
},
{
  name: 'Clark',
  surname: 'Kent',
  role: 'Superman',
  city: 'Gotham',
},
{
  name: 'T',
  surname: 'Challa',
  role: 'Black Panther',
  city: 'Wahanda',
}];

let lancuch = ""
for (let i = 0; i < SUPERHEROES.length; i++) {
 lancuch = lancuch + "<tr><td>Imie  " + SUPERHEROES[i].name + "</td><td>Nazwisko  " + SUPERHEROES[i].surname + "</td><td>Funkcja  " + SUPERHEROES[i].role + "</td><td>Miasto  " + SUPERHEROES[i].city + "</td></tr>"
}
document.querySelector(".table1").innerHTML = lancuch
