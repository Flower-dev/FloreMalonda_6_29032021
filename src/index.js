// ------------------ Components -------------------------
import Avatar from './components/Avatar.js';
import NavHome from './components/NavHome.js';
import ButtonTop from './components/ButtonTop.js';

class Index {
  constructor(){
      this.photographers = [];
      (async () => {
        await this.loadData();
        const params = (new URL(document.location)).searchParams;
        const id = params.get('id')
        this.renderDOM();
        this.filterByTags(id);
      })() //Immediate function

  }

  /**
   * Chargement des données
   */
  loadData(){
    return fetch('database.json')
    .then((resp) => resp.json())
    .then((data) => {
      this.photographers = data.photographers;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  filterByTags(tag){
    let photographersFilter = this.photographers
     if(tag){
       photographersFilter = this.photographers.filter((photographer) => {
         return photographer.tags.includes(tag)
       })

     }
    this.renderPhotographersDOM(photographersFilter);
  }

  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  customBackToTop() {
    const btntop = document.querySelector('.top-btn');
    if (document.body.scrollTop > 4 || document.documentElement.scrollTop > 4) {
      btntop.style.display = 'block';
    } else {
      btntop.style.display = 'none';
    }
  }

  /**
   * Tableau d'avatars sous forme de chaîne de caractères
   */
  renderAvatars(photographers){
    return photographers.map(function(photographer) {
      const avatar = new Avatar(
        photographer.portrait, 
        photographer.name, 
        photographer.city, 
        photographer.country, 
        photographer.tagline,
        photographer.price, 
        photographer.tags, 
        photographer.id
      );
      return `<div class='photographer-container'>${avatar.render()}</div>`;
    });
  }

  renderPhotographersDOM(photographers){
    const $photographers = document.querySelector('#photographers')
    $photographers.innerHTML = this.renderAvatars(photographers).join('')
  }

  /**
   * Création du DOM physique
   */
  renderDOM(){
    const navhome = new NavHome((tag) => this.filterByTags(tag));
    const buttontop = new ButtonTop(this.backToTop, this.customBackToTop);

    const $header = document.querySelector('#header');
    $header.innerHTML = `   
      ${navhome.render()}
    `

    this.renderPhotographersDOM(this.photographers);
    document.body.innerHTML += buttontop.render();
  }
}

new Index();
