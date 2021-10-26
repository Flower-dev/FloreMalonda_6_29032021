class Modal {

    constructor (name, closeModal ) {
        this.name = name
        this.closeModal = closeModal
        this.bindEvents()
    } 

    submitForm() {
        const form = document.querySelector('form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Prénom:', e.target.first_name.value)
            console.log('Nom:', e.target.last_name.value)
            console.log('Email:', e.target.email.value)
            console.log('Message:', e.target.message.value)
            this.closeModal();
        });        
    }

    bindEvents() {
        this.modalBtnClose = document.createElement('button')
        this.modalBtnClose.classList.add('modal-btn-close')
        this.modalBtnClose.innerHTML = `<i class='modal-btn-close fas fa-times'></i>`
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'modal-btn-close'){
                this.closeModal()
            } 
        })

        this.modalBtnSubmit = document.createElement('button')
        this.modalBtnSubmit.classList.add('modal-btn-submit')
        this.modalBtnSubmit.textContent = 'Envoyer'
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'modal-btn-submit'){
                this.submitForm()
            } 
        })

        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape') {
                this.closeModal()
            }
            if(e.code ==='Enter') {
                this.submitForm()
            }
        })
    }
   
    render() {

        return (`
            <div
                id='dialog'
                role='dialog' 
                aria-labelledby='dialog-title' 
                aria-describedby='dialog-desc'
                aria-modal='true'
                aria-hidden='true'
                tabindex='-1' 
                class='c-dialog'
            > 
                <div class='bground'></div> 
                <div class='content'>
            
                    <div role='document' class='c-dialog__box'>
                        
                        <form name='contact'>

                            <fieldset>

                                <div class='button-block-closed' aria-label='Fermer la modale'>
                                    ${this.modalBtnClose.outerHTML}
                                </div>

                                <h3 class='title-modal'>Contactez-moi ${this.name}</h3>

                                <div class='formData' id='formData'>
                                    <label for='first_name'>Prénom</label><br> 
                                    <input
                                    class='text-control'
                                    type='text'
                                    id='first_name'
                                    name='first_name'
                                    aria-labelledby='first_name' 
                                    aria-describedby='frist_name_format'
                                    placeholder='Jane'
                                    required
                                    />
                                    <br>
                                </div>

                                <div class='formData'>
                                    <label for='last_name'>Nom</label><br> 
                                    <input
                                    class='text-control'
                                    type='text'
                                    id='last_name'
                                    name='last_name'
                                    aria-labelledby='last_name' 
                                    aria-describedby='last_name_format'
                                    placeholder='Smith'
                                    required
                                    />
                                    <br>
                                </div>

                                <div class='formData'>
                                    <label for='email'>E-mail</label><br> 
                                    <input
                                    class='text-control'
                                    type='email'
                                    id='email'
                                    name='email'
                                    aria-labelledby='email' 
                                    aria-describedby='email_format'
                                    placeholder='jane.smith@gmail.com'
                                    required
                                    />
                                    <br>
                                </div>

                                <div class='formData'>
                                    <label for='message'>Votre message</label><br> 
                                    <textarea 
                                    rows='6'
                                    id='message' 
                                    name='message'
                                    aria-labelledby='message' 
                                    aria-describedby='message_format' 
                                    placeholder='Rédigez votre message'
                                    ></textarea> 
                                </div>

                                <div class='button-block-valid' aria-label='valider le formulaire'>
                                    ${this.modalBtnSubmit.outerHTML}
                                </div>

                            </fieldset> 

                        </form>
                    </div>
                </div>
            </div>     
        `)
    }
}

export default Modal;