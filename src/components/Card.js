import Media from './Media.js';

class Card {

    constructor(media, idx) {
        this.media = media
        this.idx = idx
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
