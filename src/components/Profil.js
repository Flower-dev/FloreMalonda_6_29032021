import Tag from './Tag.js';

class Presentation  {

    constructor (portrait, name, city, country, tagline, tags, openModal) {
        this.portrait = portrait
        this.name = name
        this.city = city
        this.country = country
        this.tagline = tagline
        this.tags = tags
        this.openModal = openModal
        this.bindEvents()
    }

    bindEvents() {
        this.modalBtn = document.createElement('button')
        this.modalBtn.classList.add('modal-btn')
        this.modalBtn.textContent = 'Contactez moi'
        document.addEventListener('click', (e) => {
            if (e.target.classList == 'modal-btn'){
                this.openModal()
            }
        })
    }

    render() {
        
        const tag = new Tag(this.tags);

        return (`
            <div class='global_presentation'>
                <div class='gp_presentation'>
                    <div class='title_avatar_page'>
                        <h2>${this.name}</h2>
                    </div>
                    <div class='localisation_avatar_page'>
                        <p>${this.city}, ${this.country}</p>
                    </div>
                    <div class='tagline_avatar_home_page'>
                        <p>${this.tagline}</p>
                    </div>
                    <div class='tag_profil'>
                        <div class='tag_appli'>${tag.render()}</div>
                    </div>
                </div>
                <div class='imgpresentation'>
                    <img src='public/img/photographers/${this.portrait}' alt='portrait'>
                </div>
            </div>
            <div class='section-button'> 
                <div class='button-block' aria-label='ouvrir le formulaire de contact'>
                    ${this.modalBtn.outerHTML}
                </div>
            </div>
        `);
    }
}

export default Presentation;
