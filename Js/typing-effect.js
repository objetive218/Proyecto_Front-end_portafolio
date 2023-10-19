const carouselText = [
  {
    text: "Con una consistente formación en diseño UX y habilidades técnicas en desarrollo web, estoy constantemente ávido de aprender cosas nuevas que puedan nutrir mi camino como desarrollador",
    color: "red",
  },
  {
    text: "Siempre estoy en busca de retos y oportunidades para seguir creciendo como profesional. Si crees que podemos colaborar no dudes en contactarme.",
    color: "orange",
  },
];

/*document.addEventListener("DOMContentLoaded", async function () {
  carousel(carouselText, "#feature-text");
});*/

const eleRef1 = document.querySelector("#feature-text");
const eleRef2 = document.querySelector("#feature-text1");

const text1 =
  "Con una consistente formación en diseño UX y habilidades técnicas en desarrollo web, estoy constantemente ávido de aprender cosas nuevas que puedan nutrir mi camino como desarrollador";
const text2 =
  "Siempre estoy en busca de retos y oportunidades para seguir creciendo como profesional. Si crees que podemos colaborar no dudes en contactarme.";

/*async function carousel(carouselList, eleRef) {
  let i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}
*/
/*typeSentence(text1, eleRef1);
typeSentence(text2, eleRef2);
async function typeSentence(sentence, eleRef, delay = 50) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    eleRef.innerHTML += letters[i];
    i++;
  }
  return;
}
*/
function waitForMs1(ms) {
  return (resolve) => setTimeout(resolve, ms);
}

async function typeSentence1(sentence, eleRef, delay = 50) {
  if (
    document.body.scrollTop == 1000 ||
    document.documentElement.scrollTop == 1000
  ) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      eleRef.innerHTML += letters[i];
      i++;
    }
  }
  return;
}
/*
window.onscroll = async() => {
  await typeSentence1(text1, eleRef1);
};*/

document
  .querySelector("#about-center")
  .addEventListener("scroll", typeSentence1(text1, eleRef1));

/*async function deleteSentence(eleRef) {
  const sentence = document.querySelector(eleRef).textContent;
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    document.querySelector(eleRef).textContent = letters.join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeSentence1(text1, eleRef1);
});

function updateFontColor(eleRef, color) {
  document.querySelector(eleRef).style.color = color;
}*/

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
