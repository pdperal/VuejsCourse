new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta() {
            alert("Teste")
        },
        armazenarValor(event) {
            this.valor = event
        }
    }
})