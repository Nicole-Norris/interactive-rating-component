let numbtn = document.querySelectorAll(".btn-num");
var selection = 0;
numbtn.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    let n = e.target.id;
    if (n == "b5") {
      let neightbour2 = document.querySelector(
        `#b${parseInt(n.charAt(1)) - 1}`
      );
      neightbour2.classList.toggle("btn-hover-neighbour");
    } else if (n == "b1") {
      let neightbour1 = document.querySelector(
        `#b${parseInt(n.charAt(1)) + 1}`
      );
      neightbour1.classList.toggle("btn-hover-neighbour");
    } else {
      let neightbour1 = document.querySelector(
        `#b${parseInt(n.charAt(1)) + 1}`
      );
      let neightbour2 = document.querySelector(
        `#b${parseInt(n.charAt(1)) - 1}`
      );
      neightbour1.classList.toggle("btn-hover-neighbour");
      neightbour2.classList.toggle("btn-hover-neighbour");
    }
  });
  element.addEventListener("mouseout", (event) => {
    numbtn.forEach((e) => {
      e.classList.remove("btn-hover-neighbour");
    });
  });
  element.addEventListener("click", (event) => {
    numbtn.forEach((e) => {
      e.classList.remove("btn-num-clicked");
    });
    event.target.classList.add("btn-num-clicked");
    selection = parseInt(event.target.id.charAt(1));
  });
});

function thx() {
  if (selection == 0) {
    alert("Please make your selection.");
  } else {
    document.querySelector(".form").style.display = "None";
    let thxpg = document.querySelector(".thx");
    thxpg.style.display = "flex";
    thxpg.querySelector(".selection").innerHTML = `You selected ${selection} out of 5`
  }
}
