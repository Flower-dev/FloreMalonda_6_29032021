import Media from './Media.js';

class LightBox {

    constructor (closeLightbox, photographMedia){
        this.closeLightbox = closeLightbox
        this.photographMedia = photographMedia
        this.idx = 0
    }

    lightboxPrev() {
        this.idx = this.idx - 1
        const translateContainer = document.querySelector('.lightbox-media');
        const translateImg = document.querySelector('.lightbox-container-img .mediacontainer');
        const nbImg = document.querySelectorAll('.lightbox-container-img .mediacontainer').length;
        if (this.idx  === -1){
            this.idx = nbImg -1;
        }
        const imgSize = translateImg.getBoundingClientRect().width
        let translateSize = (-(imgSize) * (this.idx));
        translateContainer.style.transform = 'translateX('+ translateSize + 'px)';
    }

    lightboxNext() {
        this.idx = this.idx + 1
        const translateContainer = document.querySelector('.lightbox-media');
        const translateImg = document.querySelector('.lightbox-container-img .mediacontainer');
        const nbImg = document.querySelectorAll('.lightbox-container-img .mediacontainer').length;
        if (this.idx === nbImg){
            this.idx = 0;
        }
        const imgSize = translateImg.getBoundingClientRect().width
        let translateSize = (-(imgSize) * (this.idx));
        translateContainer.style.transform = 'translateX(' + translateSize + 'px)';
    }

    render(){

        const lightboxBtnClose = document.createElement('button')
        lightboxBtnClose.classList.add('lightbox-btn-close')
        lightboxBtnClose.innerHTML = `<i class='lightbox-btn-close fas fa-times'></i>`
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'lightbox-btn-close'){
                this.closeLightbox()
            } 
        })

        const lightboxBtnNext = document.createElement('button')
        lightboxBtnNext.classList.add('lightbox-btn-next')
        lightboxBtnNext.innerHTML = `<i class='lightbox-btn-next fas fa-chevron-right'></i>`
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'lightbox-btn-next'){
                this.lightboxNext()
            } 
        })

        const lightboxBtnPrev = document.createElement('button')
        lightboxBtnPrev.classList.add('lightbox-btn-prev')
        lightboxBtnPrev.innerHTML = `<i class=' lightbox-btn-prev fas fa-chevron-left'></i>`
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'lightbox-btn-prev'){
                this.lightboxPrev()
            } 
        })

        const medias = this.photographMedia.map(function (media){
            return new Media(media)
        });

        let mediaHtml = '';
        for (let i = 0; i<medias.length; i++){
            mediaHtml += medias[i].render()
        }
         
        return (`
            <div class='lightbox'>
                <div class='contentbgd'></div>
                
                <div class='lightboxbground'> 
                    <div class='button-lightboxclosed aria-label='fermer la lightbox'>
                        ${lightboxBtnClose.outerHTML}
                    </div>
                   
                    <div class='lightbox-container-img aria-label='contenu'>
                        <div class='lightbox-media'>
                            ${mediaHtml}
                        </div>
                    </div>
           
                    <div class=lightbox-controls>
                        <div class='button-lightboxnext aria-label='passer au contenu suivant'>
                            ${lightboxBtnPrev.outerHTML}
                        </div> 
                        <div class='button-lightboxprev aria-label='passer au contenu précédent'>
                            ${lightboxBtnNext.outerHTML}
                        </div>
                    </div>
                </div> 

            </div>
        `)
    }
}

export default LightBox; 