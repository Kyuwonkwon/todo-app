const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.body;
const images = ["bg/0.jpg", "bg/1.jpg", "bg/2.jpg", "bg/3.jpg", "bg/4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");

bgimage.src = `${chosenImage}`;
bgimage.className = "bg-image";
document.body.appendChild(bgimage);
