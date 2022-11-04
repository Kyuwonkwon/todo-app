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
const btn = document.querySelector("button");

btnClicked();

function pickRandomTwoNum() {
  let randomIndexArray = [];
  for (let i = 0; i < 2; i++) {
    const randomNum = Math.floor(Math.random() * 18);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
}
function btnClicked() {
  const date = new Date();
  const ranArray = pickRandomTwoNum();

  const ranDeg = Math.floor(Math.random() * 91);
  const hourHandDeg = date.getHours() / 24 + date.getMinutes() / 720;
  console.log(hourHandDeg);

  body.style.background = `conic-gradient(from ${hourHandDeg}turn at 50% 50%,${colors[ranArray[0]]},${colors[ranArray[1]]})`;
}

btn.addEventListener("click", btnClicked);