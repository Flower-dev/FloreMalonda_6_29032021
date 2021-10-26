class Media {

    constructor (media, idx){
        this.media = media
        this.idx = idx
 
       
    }

    render() {
 
        if (this.media.image){
            return (
                `
                <div class='mediacontainer'>
                <img role='button' tabindex="0" class='media' data-index='${this.idx}' width='100%' src='public/img/photos/${this.media.image}' loading='lazy' alt='photo'>
                    <div class='card_description'>
                        ${this.media.description}
                    </div>
                </div>
                `
            )
        }
        if (this.media.video){
            return (
                `
                <div class='mediacontainer'>
                    <video tabindex="0" role='button' controls class='media' data-index='${this.idx}' width='100%'>
                        <source src='public/img/photos/${this.media.video}' type='video/mp4'>
                    </video>
                    <div class='card_description'>
                        ${this.media.description}
                    </div>
                </div>
                `
            )
        }    
    }

}

export default Media;