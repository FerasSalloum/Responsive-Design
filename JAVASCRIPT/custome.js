let lis = document.querySelectorAll(".infoList li");
let divs = document.querySelectorAll(".infoContent div");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("selcted");
      divs.forEach((div) => {
        div.style.display = "none";
      });
    });
    e.target.classList.add("selcted");
    divs.forEach((div) => {
    //   console.log(e.target.dataset.type);
      if(e.target.dataset.type == div.className){
          div.style.display = "block"
      }
    });
  });
});
