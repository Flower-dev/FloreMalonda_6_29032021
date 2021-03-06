import Tag from './Tag.js';


class Avatar  {

    constructor (portrait, name, city,country, tagline, price, tags, id) {
        this.portrait = portrait
        this.name = name
        this.city = city
        this.country = country
        this.tagline = tagline
        this.price = price
        this.tags = tags
        this.id = id
    }

    render() {
        const tag = new Tag(this.tags);
        return (`
            <section class='avatar_gp'> 
                <div class='compo_avatar'>
                    <div class='gp_img_title_avatar' aria-label='lien vers la page du photographe ${this.name}'>
                        <a href='profil.html?id=${this.id}'>
                            <div class='img_avatar_home'>
                                <img src='public/img/photographers/${this.portrait}' alt='avatar' lazy='loading'>
                            </div>
                            <div class='title_avatar_home'>
                                <h2>${this.name}</h2>
                            </div>
                        </a>
                    </div>
                    <div class='gp_loc_tln_pr_tg_avatar'>
                        <div class='localisation_avatar_home'>
                            <p>${this.city}, ${this.country}</p>
                        </div>
                        <div class='tagline_avatar_home'>
                            <p>${this.tagline}</p>
                        </div>
                        <div class='price_avatar_home'>
                            <p>${this.price} € / jour</p>
                        </div>
                        <div class='tag_appli'>${tag.render()}</div>
                    </div>
                </div>
            </section>
        `);
    }
}

export default Avatar;
