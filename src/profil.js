import TopProfil from './components/TopProfil.js';
import Presentation from './components/Profil.js';
import Card from './components/Card.js';
import InfoBlock from './components/InfoBlock.js';
import Modal from './components/Modal.js';
import LightBox from './components/LightBox.js';
import Select from './components/Select.js';


class PhotographerProfil {

    constructor() {
        this.photographer = {};
        this.media = [];
        this.cards = [];
        this.isLightboxOpened = false;
        (async () => {
            await this.loadData();
            this.createLightbox();
            this.createModal();
            this.search('popularity');
            this.renderDOM();
            this.bindEvents();
        })() //Immediate function
    }

    /**
     * chargement des données
     */
    loadData() {
        return fetch('database.json')
        .then((resp) => resp.json())
        .then((data) => {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            this.photographer = data.photographers.find((photographer) => photographer.id === parseInt(id));
            this.media = data.media.filter(media => media.photographerId === parseInt(id));
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    createLightbox() {
        this.lightbox = new LightBox(
            () => this.closeLightbox(),
            this.media
        );
    }

    createModal() {
        this.modal = new Modal(
            this.photographer.name,
            this.closeModal,
        );
    }

   /**
   * gestion du select - fonction de tri pour les cartes
   */

    displayCards() {
        let divCards = document.querySelector('.cards');
        divCards.innerHTML = '';
        this.renderCardsDOM();
    }

    search(value) {
        if(value == 'popularity'){
            this.media = this.media.sort(function(a,b){
            return b.likes - a.likes
            })
        }
        if(value == 'date'){
            this.media = this.media.sort(function(a,b){
            return a.date > b.date ? 1 : -1
            })
        }
        if(value == 'title'){
            this.media = this.media.sort(function(a,b){
            return a.description > b.description ? 1 : -1
            })
        }
        this.lightbox.photographMedia = this.media
        this.renderLightBox()
        this.displayCards()
    }

    /**
    * gestion de la modal - formulaire de contact
    */
    openModal() {
        const modalct = document.querySelector('.content');
        const modalbg = document.querySelector('.bground');
        const bodybg = document.querySelector('#bodyprofil');
        modalbg.style.display = 'block';
        modalct.style.display = 'block';
        bodybg.style.overflow = 'hidden';
    }

    closeModal() {
        const modalbg = document.querySelector('.bground');
        const modalct = document.querySelector('.content');
        const bodybg = document.querySelector('#bodyprofil');
        modalbg.style.display = 'none';
        modalct.style.display = 'none';
        bodybg.style.overflow = 'scroll';
        document.querySelector('form').style.display = 'block';
    }

    /**
    * gestion de la lightbox
     */

    imgSize() {
        const lightboxImg = document.querySelector('.lightbox-container img');
        if(!lightboxImg){
            return 0;
        }
        return lightboxImg.width;
    }

    openLightbox(idx) {
        //On évite d'ouvrir la lightbox 2x
        if(this.isLightboxOpened){
            return;
        }
        this.isLightboxOpened = true
        this.lightbox.idx = idx;
        const lbxbg = document.querySelector('.lightbox');
        const bodybg = document.querySelector('#bodyprofil');
        lbxbg.style.display = 'block';
        bodybg.style.overflow = 'hidden';
        const translateContainer = document.querySelector('.lightbox-media');
        const translateImg = document.querySelector('.lightbox-container-img .mediacontainer');
        const imgSize = translateImg.getBoundingClientRect().width
        let translateSize = -imgSize * (idx);
        translateContainer.style.transform = 'translateX('+ translateSize + 'px)';
    }

    closeLightbox() {
        const lbxbg = document.querySelector('.lightbox');
        const bodybg = document.querySelector('#bodyprofil');
        lbxbg.style.display = 'none';
        bodybg.style.overflow = 'scroll';
        this.isLightboxOpened = false
        console.log(this.isLightboxOpened)
    }

    
    /**
    * Compteur de like
    */

    sumLikes() {
        return this.media.reduce((acc ,item) => {
           return acc + item.likes
        },0)
    }

    /*
    * Ajout d'un like sous un media
    */

    addLikes(idx){
        //On incrémente le nombre de likes du media
        this.media[idx].likes += 1
        //On met à jour le nombre de likes de la carte
        this.cards[idx].setLikes(this.media[idx].likes)
        //On met à jour le block de total en recalculant le total de likes
        this.infoBlock.setLikes(this.sumLikes())
    }

    bindEvents(){
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('likes-btn')){
                this.addLikes (parseInt(e.target.dataset.index))
            }
        })
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('media')) {
                this.openLightbox(parseInt(e.target.dataset.index))
            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.classList.contains('media')) {
                this.openLightbox(parseInt(e.target.dataset.index))
            }
        })
    }

    /**
     * Récupération des données pour créer les différents profils
    */

    renderProfil() {
        const presentation = new Presentation(
            this.photographer.portrait,
            this.photographer.name,
            this.photographer.city,
            this.photographer.country,
            this.photographer.tagline,
            this.photographer.tags,
            this.openModal
        );
        return `${presentation.render()}`;
    }

    renderProfilDOM(photographers) {
        const $profils = document.querySelector('#photograph');
        $profils.innerHTML = this.renderProfil(photographers)
    }

    /**
     * Tableau des medias/photographe sous forme de chaîne de caractères
     */

    /**
     * Garder la référence en utilisant la méthode bind()
     */

    renderCards() {
        this.cards = this.media.map((media, idx) => {
            return new Card(
                media,
                idx,
                (idx) => this.addLikes(idx),
            );
        })
        return this.cards.map(card => `<div class='card-container'>${card.render()}</div>`)
    }

    renderCardsDOM() {
        const $cards = document.querySelector('.cards');
        $cards.innerHTML = this.renderCards().join('')
    }

    renderSelect() {
        const select = new Select((value) => this.search(value));
        return `${select.render()}`;
    }

    renderSelectDOM(media) {
        const $select = document.querySelector('.search-section');
        $select.innerHTML = this.renderSelect(media)
    }

    renderLightBox() {
        let lightboxdom = document.querySelector('.lightbox')
        if(lightboxdom) {
            lightboxdom.remove()
        }
        lightboxdom = document.createElement('div');
        lightboxdom.innerHTML = this.lightbox.render()
        document.body.appendChild(lightboxdom)
    }

    renderModal() {
        document.body.innerHTML += this.modal.render();
    }

    /**
    * Création du DOM physique
    */
    renderDOM() {
        const topprofil= new TopProfil();
        this.infoBlock = new InfoBlock(
            this.sumLikes(),
            this.photographer.price
        );
        
        const $header = document.querySelector('#header');
        $header.innerHTML = `
        <div class='container-profil-view'>
            <div class='header'>
                ${topprofil.render()}
            </div>
        </div>
        `

        this.renderLightBox();
        this.renderSelectDOM(this.media);
        this.renderProfilDOM(this.photographers);
        this.renderCardsDOM(this.media);
        this.renderModal();
        document.body.innerHTML += this.infoBlock.render();
        this.modal.submitForm();
    }
}

new PhotographerProfil();
