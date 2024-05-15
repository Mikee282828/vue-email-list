const { createApp } = Vue

createApp({
    data() {
        return {
            mail: []
        }
    },
    methods: {
        richiesta() {
            for (let i = 0; i < 10; i++) {
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
        this.richiesta();
    }
}).mount('#app')
