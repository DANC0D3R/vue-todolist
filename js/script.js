const { createApp } = Vue;

createApp({
    data() {
        return{
            newTask: '',
            todolist: [
                {
                    text: 'Cambiare scheda allenamento',
                    done: true
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Prenotare barbiere',
                    done: false
                },
                {
                    text: 'Organizzare gita weekend',
                    done: false
                },
            ]
        }
    },
    methods: {
        // Rimuove un task
        removeTask: function(index){
            this.todolist.splice(index,1);
        },
    }
}).mount('#app')