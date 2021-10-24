import Media from './Media.js';

class Card {

    constructor(media, openLightbox, idx, addLikes) {
        this.media = media
        this.openLightbox = openLightbox
        this.idx = idx
        this.addLikes = addLikes
    }

    renderLikes(divCard) {
        divCard.querySelector('.card_likes').textContent = this.cardLikes.nbLikes;
    }

    setLikes(nbLikes) {
        const cardLikes = document.querySelector(`.card_likes[data-idx='${this.idx}']`)
        cardLikes.innerText = nbLikes
    }

    render() {
        const likesBtn = document.createElement('button')
        likesBtn.classList.add('likes-btn')
        likesBtn.setAttribute('data-index', this.idx)
        likesBtn.innerHTML = `<i class='likes-btn fas fa-heart'></i>`


        document.addEventListener('click', (e) => {
            if (e.target.dataset.index == this.idx && e.target.classList.contains('media')) {
                this.openLightbox(this.idx)
            }
        })

        const media = new Media(this.media, this.idx)

        return (
            `
            <div class='card_main' id='bodycard' aria-label='média du photographe'>
                <div class='cardimg'>
                    <div class='card_img'>
                        ${media.render()}
                    </div>
                 
                    <div class='like_card' aria-label='nombre de likes'>
                        <div class='card_likes' data-idx='${this.idx}'>
                            ${this.media.likes}
                        </div>
                        <div>
                            ${likesBtn.outerHTML}
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    }
}

export default Card;
