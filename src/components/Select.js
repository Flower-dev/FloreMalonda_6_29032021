class Select {

    constructor(search) {
        this.search = search
       
    }

    render() {

        const btnSelect = document.createElement('button')
        btnSelect.classList.add('btn-select')
        btnSelect.innerHTML = `<i class='btn-select-arrow fas fa-chevron-down'></i>`
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'btn-select-arrow'){
                this.openSelect()
            } 
        })

        document.addEventListener('change', (e) => {
            if (e.target.classList[0] == 'select-search'){
                this.search(e.target.value);
            } 
        })

        return (`
            <div class='select_container'>
                <div>
                    <p>Trier par : </p>
                </div>
                <select class='select-search' role='tri'>
                    <option class='select-option' value='popularity'>Popularité</option>
                    <option class='select-option' value='date'>Date</option>
                    <option class='select-option' value='title'>Titre</option>
                </select>
                
            </div>
        `);
    }
}

export default Select;
