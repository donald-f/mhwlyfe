"use strict";

const goHomeELs = document.querySelectorAll(".go-home");

goHomeELs.forEach((el) => {
  el.innerHTML = '<a href="/index.html">home</a>';
});

const monsterz = [];
let activeMonster;
let monLength;

fetch("https://mhw-db.com/monsters")
  .then((response) => response.json())
  .then((monsters) => {
    monsters.forEach((monster, i) => {
      monsterz[i] = monster;
    });
    monLength = monsters.length;
  });

const activeMonsterFn = function (monsterInput) {
  return monsterz.find(
    (monster) =>
      String(monster.name.toLowerCase()) === monsterInput.toLowerCase()
  );
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
