
const app = new Vue({
    el: '#app',

    data() {
        return {
            myInput: '',
            selected: true,
            message: 'Hello World!',
    
            tasks: [
                {   
                    title: 'Virsraksts',
                    body: 'Some placeholder content in a paragraph.',
                    isDone: false,
                },
            ],

            isModalOpen: false,
            isOpenClass: false,
          
            modaltasks: [
                {
                    title: '',
                    body: '',
                    isDone: false,
                }
            ],          

        }
        
    },

    methods: {
        onClicked() {
            this.tasks.push({
                title: this.myInput,
                body: '',
                isDone: false,
            });

            this.myInput = null;
        },

        onInput(event) {
            if (event.keyCode === 13) {
                this.onClicked();
            }
        },

        makeDone(task) {
            task.isDone = true;
        },

        onDelete(index) {
            this.tasks.splice(index, 1);
        },

        onClickedMod() {
            this.tasks.push({
                title: this.title,
                body: this.body,
                isDone: false,
            });

            this.title = null;
            this.body = null;
            
            this.closeModal();
            
        },   

        openModal() {
            this.isModalOpen = true;
            // Vue.nextTick(() => {
                this.isOpenClass = true;
            // });
        },

        closeModal() {
            this.isModalOpen = false;
        },

        onInputModal(event) {
            if (event.keyCode === 13) {
                this.onClickedMod();
            }
        }


    },

    computed: {
        fullMessage() {
            return `${this.message} ${this.message2}`;
        }

    }
})

