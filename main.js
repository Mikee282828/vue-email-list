const { createApp } = Vue

createApp({
    data() {
        return {
            mail: [],
            nMailInserita : null,
            nMail: null
        }
    },
    methods: {
        richiesta(numero) {
            this.mail = [];
            this.nMail = this.nMailInserita;
            for (let i = 0; i < numero; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(
                    (result) => {
                        this.mail.push(result.data.response);
                    }
                );
            }
        }
    },
    mounted() {
        console.log("App montata");
    }
}).mount('#app')
