class NavHome {

    constructor (filterByTags){
        this.filterByTags = filterByTags
    }

    render(){
        document.addEventListener('click', (event) => {
            if(event.target.dataset['filter']){
                this.filterByTags(event.target.dataset['filter'])
            }
        })
        return (`
            <section class='topBar-disposition maxcontainer'>

                <div class='TopBar' role='lien'>
                    <a aria-label='Retour' href='index.html' class='header-png'>
                        <img role='img' alt='Fisheye Home page' src='public/img/logo.png'/>
                    </a>   
                </div>

                <div class='disposition'>
                    <nav class='NavHome' role='navigation'>
                        <ul class='NavHome_tags'>
                            <li class='NavHome_tag'>
                                <a href='#portrait' data-filter='portrait'>#Portrait</a>
                            </li>
                            <li class='NavHome_tag'>
                                <a href='#art' data-filter='art'>#Art</a>
                            </li>
                            <li class='NavHome_tag'>
                                <a href='#fashion' data-filter='fashion'>#Fashion</a>
                            </li>
                            <li class='NavHome_tag'>
                                <a href='#architecture' data-filter='architecture'>#Architecture</a>
                            </li>
                            <li class='NavHome_tag'>
                                <a href='#travel' data-filter='travel'>#Travel</a>
                            </li>
                            <li class='NavHome_tag'>
                                <a href='#sport' data-filter='sport'>#Sport</a>
                            </li>
                            <li class='NavHome_tag'>
                                <a href='#animals' data-filter='animals'>#Animals</a>
                            </li>
                            <li class='NavHome_tag'>
                                <a href='#events' data-filter='events'>#Events</a>
                            </li>
                        </ul>
                    </nav>

                    <h1>Nos photographes</h1>
                </div>
            </section>
        `)

    }

}

export default NavHome;
