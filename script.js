const counterDisplay = document.querySelector("h3");
let counter = 0; //la valeur de let est hors d'une fonction donc elle peut être appelée partout
//on peut injecter du code dans js pas seuleument avec innerHTML, createElement fonctionne aussi
const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; //c'est du ternaire(si Math.random est supérieur à 0.5, tu renvoie 1 sinon-1)
  bubble.style.setProperty("--left", Math.random() * 100 + plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++; //j'incrémente le compteur
    counterDisplay.textContent = counter; //nous avons pointé counterDisplay et ici on utilise textcontent pour signifier qu'il y aura du texte.
    bubble.remove();
  });
  //c'est pour tirer sur les bulles!
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 3000);
