<template>
    <div class="chats_container" id="chats_container">
        <div class="chats_header">
            <Header :chatData="chatData" @post:closeChat="closeChat"/>
        </div>
        <div class="chats_wrapper" id="chats_wrapper">
            <Message v-for="message in messages" :message="message"/>
        </div>
        <div class="chats_footer_container">
            <textarea class="chats_textarea" v-model="textarea_input" @keypress.enter.prevent="sendMessage()" />
            <button class="chats_textarea_send" @click="sendMessage()"> > </button>
        </div>
    </div>
</template>

<script lang="ts">

import Header from '../MessagesApp/Chat/Header.vue'
import Message from '../MessagesApp/Chat/Message.vue'

export default {
    name: 'Chats',
    components: {
        Header,
        Message
    },
    props: {
        chatData: Object
    },
    data() {
        return {
            messages: [
                {id: 1, mode: 'recieve', message: 'Hallo du Sack'},
                {id: 2, mode: 'send', message: 'Nah du'},
                {id: 3, mode: 'recieve', message: 'Was machste?'},
                {id: 4, mode: 'send', message: 'Nichts und du?'},
                {id: 5, mode: 'recieve', message: 'Auch nichts, wollen wir Shoprob machen? Hab nen paar Leute. Sind so 10 Personen. Brauchen noch einen Fahrer.'},
                {id: 6, mode: 'send', message: 'Na klar, kannst auf mich zählen!'},
                {id: 7, mode: 'send', message: 'Wann und Wo?'},
                {id: 8, mode: 'recieve', message: 'Heute Abend, Yaki-Tanke'},
                {id: 9, mode: 'send', message: 'Ok, bis später!'},
                {id: 10, mode: 'recieve', message: 'Jo'},
            ],
            textarea_input: '',
            textarea_send: false,
        }
    },
    methods: {
        closeChat() {
            this.$emit('closeChatWindow')
        },
        scrollBottom() {
            let element = document.getElementById("chats_wrapper");
            // @ts-ignore
            element.scrollTop = element.scrollHeight
        },
        sendMessage() {
            if (this.textarea_input.trim() !== '') {
                this.messages.push({
                    id: 1,
                    mode: 'send',
                    message: this.textarea_input
                })
                this.textarea_send = true;
                this.textarea_input = '';
            }
        }
    },
    mounted() {
        this.scrollBottom()
    },
    updated() {
        if (this.textarea_send) {
            this.scrollBottom()
            this.textarea_send = false
        }
    }
}

</script>

<style scoped>

.chats_container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.chats_wrapper {
    margin-top: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    overflow: auto;
}

.chats_footer_container {
    padding: 1rem;
    display: flex;
    flex-direction: row;
}

.chats_textarea {
    flex-grow: 1;
    resize: none;
    max-height: 6dvh;
    font-size: clamp(14px, 1vw, 100px);
    background-color: transparent;
    border-color: white;
    color: var(--text_color_light);
}

.chats_textarea_send {
    height: 3;
    background-color: transparent;
    border: 0;
    color: var(--text_color_light);
    font-size: clamp(14px, 1vw, 100px);
}

</style>