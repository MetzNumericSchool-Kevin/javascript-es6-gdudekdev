/**
 * Exercice 1
 * Template literals
 */

// Exercice 1.1 : Transforme la concaténation en interpolation de chaîne de caractères avec les backticks `
function afficheAddresse(address) {
  return `Votre adresse est : ${address.street}, ${address.city}, ${address.country}.`;
}

console.log("Exercice 1.1");
console.log(
  afficheAddresse({
    street: "10 rue de la republique",
    city: "Paris",
    country: "France",
  })
);

// Exercice 1.2 : Utilise les chaînes multilignes avec les backticks ` pour afficher plus simplement le menu
console.log("Exercice 1.2");
console.log(
  `Menu de la semaine :
      - Pâte à tartine
      - Hoagie
      - Salade de pommes`
);

/**
 * Exercice 2
 * Décomposition (Destructuring)
 */

const colors = ["Red", "Green", "Blue", "Yellow"];

// Exercice 2.1 : Utilise la décomposition pour créer les constantes de couleurs plutôt que d'accéder aux indices
const [red, green, blue, yellow] = colors;

console.log("Exercice 2.1");
console.log(red, green, blue, yellow);

// Exercice 2.2 : La même chose, mais en ignorant ici "Red" et "Yellow"
const [, green2, blue2] = colors;

console.log("Exercice 2.2");
console.log(green2, blue2);

// ------ Version objet

const roman = {
  title: "Solo Leveling",
  editor: "kbooks",
  tome: 12,
  type: "fantasy",
  author: "Chugong",
  mainCharacter: {
    name: "Sung Jinwoo",
    animeJapaneseVoice: "Taito Ban",
  },
  characters: [
    {
      name: "Sung Jinah",
      animeJapaneseVoice: "Haruna Mikawa",
    },
    {
      name: "Go Gunhee",
      animeJapaneseVoice: "Banjō Ginga",
    },
  ],
};

// Exercices 2.3 : Décompose l'objet pour récupérer le titre, l'éditeur et le tome dans des constantes
const { title, editor, tome } = roman;

console.log("Exercice 2.3");
console.log(title, editor, tome);

// Exercice 2.4 : Décompose l'objet pour récupérer le nom du personnage principal,
// le nom du premier personnage secondaire
// et la voix Japonaise dans l'anime du second personnage secondaire
const {
  mainCharacter: { name: mainCharacterName },
  characters: [{ name: secondCharacterName }, { animeJapaneseVoice: thirdCharacterJapaneseVoice }],
} = roman;

console.log("Exercice 2.4");
console.log(
  mainCharacterName,
  secondCharacterName,
  thirdCharacterJapaneseVoice
);

// ------

let firstname = "John";
let lastname = "Doe";

// Exercice 2.5 : Faites l'inversion du prénom et nom avec la décomposition
// plutôt qu'avoir une variable temporaire
[firstname, lastname] = [lastname, firstname];

console.log("Exercice 2.5");
console.log(firstname, lastname);

// ------
const person = {
  firstname,
  lastname,
  age: 30,
  location: "Paris",
};

// Exercice 2.6 : Fais une décomposition du paramètre pour extraire directement le prénom et le nom
function hello({ firstname, lastname }) {
  console.log(`Bonjour ${firstname} ${lastname} !`);
}

console.log("Exercice 2.6");
hello(person);

/**
 * Exercice 3
 * Opérateur de reste ...
 */

// Exercice 3.1 : Décompose le tableau colors pour ne garder dans le reste que les couleurs bleue et jaune

const [,,...restOfColors] = colors;

console.log("Exercice 3.1");
console.log(restOfColors);

// Exercice 3.2 : Décompose l'objet, de telle sorte à ce que le reste contienne seulement les clés
// titre, editeur, tome, auteur

const { title2, editor2, tome2, author2, ...reste } = roman;

const roman2 = { title2, editor2, tome2, author2 };

console.log("Exercice 3.2");
console.log(roman2);

// ------
const randomNumbers = [12, 13, 52, 68, 2, 23, 5];

// Exercice 3.3 : Math.min prend un nombre indéfini d'arguments
// Utilise l'opérateur de reste pour pouvoir passer un tableau
console.log("Exercice 3.3");
console.log(Math.min(...randomNumbers));

// Exercice 3.4 : Transforme cette fonction pour qu'elle puisse prendre
// un nombre indéfini de paramètres car actuellement elle en prend que 3
function min(...numbers) {
  return Math.min(...numbers);
}

console.log("Exercice 3.4");
console.log(min(12, 13, 52, 68, 2, 23, 5)); // Le résultat doit être 2

/**
 * Exercice 4
 * Opérateur de dispersion (spread)
 */

// Exercice 4.1 : Utilise l'opérateur de dispersion pour ajouter "Pink" et "Magenta" dans un nouveau tableau

const moreColors = [...colors , "Pink", "Magenta"];

console.log("Exercice 4.1");
console.log(moreColors);

// Exercice 4.2 : Utilise l'opérateur de dispersion pour créer un nouveau tableau
// où Red est ajouté au début, et "Violet" à la fin
const partialRainbow = ["Orange", "Yellow", "Green", "Blue", "Indigo"];
const rainbow =["Red", ...partialRainbow,"Violet"]

console.log("Exercice 4.2");
console.log(rainbow);

// Exercice 4.3 : Copier l'adresse en ajoutant une nouvelle clé pour le code postal
const adress = {
  street: "10 rue de la republique",
  city: "Paris",
  country: "France",
};

const completeAdress = {...adress, postalCode: 75001};

console.log("Exercice 4.3");
console.log(completeAdress);

// Exercice 4.4 : Utilise l'opérateur de dispersion pour copier l'objet person et modifier la valeur de l'age à 20
const person2 = {...person ,age:20};
console.log("Exercice 4.4");
console.log(person2);

/**
 * Exercice 5
 * Fonctions fléchées
 */

// Exercice 5.1 : Convertir en fonction fléchée
const thatsAllFolks = function () {
  console.log("That's all folks!");
};

console.log("Exercice 5.1");
thatsAllFolks();

// Exercice 5.2 : Convertir toutes les fonctions en fonction fléchée
// Et si c'est possible, faire un return implicite
const makeDouble = function (numbers) {
  return numbers.map(function (number) {
    const newNumber = number * 2;
    return newNumber;
  });
};

console.log("Exercice 5.2");
console.log(makeDouble([1, 2, 3]));

// Exercice 5.3 : Convertir en fonction fléchée avec un return implicite
function convertToPerson(firstnameLastnameTuple) {
  return {
    firstname: firstnameLastnameTuple[0],
    lastname: firstnameLastnameTuple[1],
  };
}

console.log("Exercice 5.3");
console.log(convertToPerson(["John", "Doe"]));

/**
 * Exercice 6
 * Syntaxe raccourcie d'assignation d'objets
 */

// Exercice 6 : raccourci l'assignation à l'objet

function convertToPerson2([firstname, lastname]) {
  return {
    firstname: firstname,
    lastname: lastname,
  };
}

console.log("Exercice 6");
console.log(convertToPerson2(["John", "Doe"]));

/**
 * Exercice 7
 * Modules import / export
 */

// Exercice 7 : Voici un exemple de code pour gérer un panier d'achat
// On souhaite pouvoir utiliser ce code à plusieurs endroits dans un projet
// On souhaite également le faire pour éviter d'exposer la constante cart
// qui pourrait être modifiée par erreur
//
// Migre ce code dans un module, importe le nécéssaire pour l'utiliser

const cart = [];

function addToCart(productInfo, quantity = 1) {
  const cartLine = findItemInCart(productInfo.product);

  if (cartLine) {
    cartLine.quantity += quantity;
    return;
  }

  cart.push({ ...productInfo, quantity });
}

function findItemInCart(productName) {
  return cart.find((cartLine) => cartLine.product === productName);
}

function updateCartQuantity(productName, quantity) {
  const cartLine = findItemInCart(productName);

  if (!cartLine) {
    addToCart(productName, quantity);
    return;
  }

  cartLine.quantity = quantity;
}

function computeTotal() {
  return cart.reduce(
    (total, cartLine) => total + cartLine.quantity * cartLine.price,
    0
  );
}

function displayAmount(amount) {
  return Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

console.log("Exercice 7");

console.log("Ajout d'un Shampoing x2 à 10€");
addToCart({ product: "Shampoing", price: 10 }, 2);

console.log("Mise à jour du panier : Shampoing x4");
updateCartQuantity("Shampoing", 4);

console.log("Ajout d'un Biscuit x10 à 3€");
addToCart({ product: "Biscuit", price: 3 }, 10);

console.log("Ajout d'un Biscuit x2 à 3€");
addToCart({ product: "Biscuit", price: 3 }, 2);

console.log("Affichage du total panier :");
console.log(displayAmount(computeTotal()));

/**
 * Exercice 8
 * Operation asynchrone
 */

// Exercice 8 : Transforme les opérations asynchrone avec la syntaxe async/await

function loadFruits() {
  return fetch("http://127.0.0.1:5500/data/fruits.json").then((response) =>
    response.json()
  );
}

function program() {
  loadFruits()
    .then((fruits) => console.log(fruits))
    .catch((error) =>
      console.log("Problème lors du chargement des fruits", error)
    );
}

console.log("Exercice 8");
program();
