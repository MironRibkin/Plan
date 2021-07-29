const contents = document.querySelectorAll(".content")
const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  button.onclick = function () {
    if (button.classList.contains("blackButton")) {
      button.classList.replace("blackButton" , "whiteButton");
    } else  {
      button.classList.replace("whiteButton" , "blackButton")
    }
  }
});

// (test) => { test }
// function (test) {}

const button1 = document.getElementById("button1")
const content1 = document.getElementById("content1")
button1.addEventListener("click", function () {
  contents.forEach(content =>{
    content.style.display = "none";
  })
  if (button1.classList.contains("whiteButton")) {
    content1.style.display = "block"
  } else {
    content1.style.display = "none"
  }

} )


  