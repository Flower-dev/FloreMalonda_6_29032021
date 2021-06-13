# FishEye

Sixième projet réalisé dans le cadre du parcours "Développeur d'applications Front-End" d'OpenClassrooms

## IMPORTANT POUR LE PROJET : 

- Ecrire du code JavaScript maintenable : utilisation de Eslint
- Assurer l'accessibilité d'un site web
- Gérer les évènements d'un site avec JavaScript
- Développer une application web modulaire avec des design patterns
- Travailler sur de l'algo & sur la manipulation de tableau


## TO DO : 


- faire le bouton sur page Home + le filter sur les tags (homepage)
- s'occuper de l'accessibilité du site
- gérer l'affichage desktop


## Pourquoi utiliser un design pattern?
- Pour accélérer le processus de développement en fournissant des paradigmes de développement éprouvés.

- Pour anticiper des problématiques qui peuvent ne devenir visibles que plus tard dans la mise en œuvre.

- Pour améliorer la lisibilité du code en fournissant une standardisation.



## Travail des composants JS : 

- Les classes en JavaScript n'offrent pas réellement de fonctionnalités supplémentaires, et sont souvent décrites comme fournissant du « sucre syntaxique » par rapport aux prototypes et à l'héritage, en ce sens qu'elles offrent une syntaxe plus propre et plus élégante.

- Classes JS =  syntaxe simplifiée

- Étendre une classe : L'une des caractéristiques avantageuses des fonctions de constructeur et des classes est qu'elles peuvent être étendues à de nouveaux plans d'objet basés sur le parent. Cela permet d'éviter la répétition du code pour des objets qui sont similaires mais qui nécessitent des caractéristiques supplémentaires ou plus spécifiques. De nouvelles fonctions de constructeur peuvent être créées à partir du parent en utilisant la méthode call(). Dans l'exemple ci-dessous, nous allons créer une classe de personnage plus spécifique appelée Mage, et lui attribuer les propriétés de Hero en utilisant call(), tout en ajoutant une propriété supplémentaire.

### Exemple code composant avec les class JS 

```js
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}
```

autre exemple : 

```js
// Initializing a class
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
```


La propriété `Element.innerHTML` de Element récupère ou définit la syntaxe HTML 


## Pourquoi utiliser la programmation orientée object en JS ? 

- avoir une meilleure organisation de son code en utilisant des classes : une classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés instances de la même classe) plus facilement, rapidement et en toute fiabilité.
- sécurité du code (maintenabilité et encapsulation)
- réutilisation du code (notion d'héritage)



## Méthode fetch : 

pour la récupération de données, utiliser (à modifier pour l'adapter pour passer du react utilisé dans le P11 au JS): 
```js
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');

fetch(`database.json`)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
```

## Compétences évaluées

- Ecrire du code JavaScript maintenable
- Assurer l'accessibilité d'un site web
- Gérer les évènements d'un site avec JavaScript
- Développer une application web modulaire avec des design patterns

## Sources de travail : 

- https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript-fr // introduction des classes en JS

- https://grafikart.fr/tutoriels/web-component-1201 // tuto composant JS

- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions // syntaxe simplifiée

- https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON 

- https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1 // factory method

- https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-fr
