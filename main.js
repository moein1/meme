function _id(id) {
  return document.getElementById(id);
}
const imageFileInput = _id("imageFileInput");
const topTextInput = _id("topTextInput");
const bottomTextInput = _id("bottomTextInput");
const canvas = _id("meme");

let image;
imageFileInput.addEventListener("change", () => {
  const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);
  console.log(imageDataUrl);
  image = new Image();
  image.src = imageDataUrl;
  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        topTextInput.value,
        bottomTextInput.value
      );
    },
    { once: true }
  );
});

topTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});
bottomTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});
function updateMemeCanvas(canvas, image, topText, bottomText) {
  console.log("this is image ", image, canvas, topText, bottomText);
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yoffset = height / 25;

  //update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  //prepare text
  ctx.strokeStyle = "green";
  ctx.lineWidth = Math.floor(fontSize / 8);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;

  //Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yoffset);
  ctx.fillText(topText, width / 2, yoffset);

  //add bottom text
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, `${height - yoffset}`);
  ctx.fillText(bottomText, width / 2, `${height - yoffset}`);
}

function coordinate() {
  console.log(this.x, this.y);
}

const c1 = { x: 1, y: 2 };
const c2 = { x: 5, y: 45 };

coordinate.bind(c1)();
coordinate.bind(c2)();

const testData = [
  { name: "moein", value: 2 },
  { name: "mohammad", value: 45 },
  { name: "Taher", value: 120 },
];

const resutl = testData.reduce((total, item) => {
  return total + item.value || 0;
}, 300);

console.log("this is the result from the redcuce ", resutl);
