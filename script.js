const image = document.getElementById("image");
const picture = document.createElement("img");
picture.src = "images/1.jpg";
image.appendChild(picture);
let lastclick = 0;
function buttonClick() {
  let chosenPicture = Math.floor((Math.random() * 10) + 1);
  if (chosenPicture == lastclick) {
    buttonClick()
  }
  console.log(chosenPicture);
  picture.src = "images/" + chosenPicture + ".jpg";
  image.appendChild(picture);
  lastclick = chosenPicture;
}