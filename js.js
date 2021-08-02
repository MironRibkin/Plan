const buttons = document.querySelectorAll(".blackButton")
const contents = document.querySelectorAll(".content")
function changeButtonsColor (clickedButton) {
  if (clickedButton.classList.contains("whiteButton")) {
    clickedButton.classList.replace("whiteButton", "blackButton")
  } else {
    clickedButton.classList.replace("blackButton", "whiteButton");
  }
  for (let i = 0; i<buttons.length; i++ ){
    let currentButton = buttons[i];
    if(clickedButton !== currentButton){
      currentButton.classList.replace("whiteButton" ,"blackButton");
    }
  }

}

function hideContents (clickedButton) {
  let continent = document.getElementById(clickedButton.dataset.contentId)
  if(continent.style.display === "block" ){
    continent.style.display = "none";
  } else {
    continent.style.display = "block"
  }
  for (let i = 0; i<contents.length; i++){
    let ghostContent = contents[i];
    if(continent !== ghostContent){
      ghostContent.style.display = "none";
    }
  }
}
function onButtonClick(event) {
  let clickedButton = event.target;
  changeButtonsColor(clickedButton);
  hideContents(clickedButton);
}
for (let i = 0; i<buttons.length; i++){
  let currentButton = buttons[i];
  currentButton.addEventListener("click", onButtonClick);
}