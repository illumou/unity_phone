<template>
    <div class="wrapper">
        <main class="main">
            <header class="header">
                <p class="button" @click="closeChatWindow()"> < </p>
                <h2> {{ userData?.username }} </h2>
            </header >
            <div class="chat_wrapper" id="chat_wrapper">
                <div v-for="message in chat" class="message_wrapper">
                    <Message :message="message"/>
                </div>
            </div>
            <div class="chat_box">
                <textarea class="text_input" v-model="text_input" id="text_area"/>
                <button class="send_button" @click="sendMessage"> Senden </button>
            </div>
        </main>
    </div>
</template>

<script lang="ts">

import Message from '../messages/Message.vue'

export default {
    name: 'Coversation',
    props: {
        userData: Object
    },
    components: {
        Message
    },
    data() {
        return {
            chat: [
                {mode: 'recieve', message: 'Hallo du Sack'},
                {mode: 'send', message: 'Nah du'},
                {mode: 'recieve', message: 'Was machste?'},
                {mode: 'send', message: 'Nichts und du?'},
                {mode: 'recieve', message: 'Auch nichts, wollen wir Shoprob machen? Hab nen paar Leute. Sind so 10 Personen. Brauchen noch einen Fahrer.'},
                {mode: 'send', message: 'Na klar, kannst auf mich zählen!'},
                {mode: 'send', message: 'Wann und Wo?'},
                {mode: 'recieve', message: 'Heute Abend, Yaki-Tanke'},
                {mode: 'send', message: 'Ok, bis später!'},
                {mode: 'recieve', message: 'Jo'},
            ],
            text_input: '',
            message_bool: false,
        }
    },
    methods: {
        closeChatWindow() {
            this.$emit('closeChatWindow')
        },
        scrollBottom() {
            var element = document.getElementById("chat_wrapper");
            element.scrollTop = element.scrollHeight
        },
        sendMessage() {
            if (this.text_input.trim() !== '') {
                this.chat.push({
                    mode: 'send',
                    message: this.text_input
                })
                this.message_bool = true;
                this.text_input = '';
            }
        }
    },
    mounted() {
        this.scrollBottom()
    },
    updated() {
        if (this.message_bool) {
            this.scrollBottom()
            this.message_bool = false
        }
    }
}

</script>

<style scoped>

.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
}

.main {
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.header {
    color: var(--text_color1);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
    background-color: lightgray;
}

.header .button {
    position: absolute;
    left: 1rem;
    margin: 0;
    font-weight: bold;
    cursor: pointer;
}

.header h2 {
    margin: 0;
}

.chat_wrapper {
    padding: 1rem;
    overflow: auto;
    flex-grow: 1;
}

.message_wrapper {
    overflow: auto;
    display: flex;
    flex-direction: column;
}

.chat_box {
    display: flex;
    flex-direction: column;
}

.text_input {
    height: 10vh;
    resize: none;
    font-size: 2vh;
    padding: 0;
}

.send_button {
    width: 100%;
    font-size: 2vh;
}

</style>