<template>
    <div class="content_container">
        <component :is="active_component" :chatData="chatData" @post:openComponent="changeComponent" @closeChatWindow="closeChat"/>
    </div>
</template>

<script lang="ts">

import Contacts from '../apps/MessagesApp/Contacts.vue'
import Chats from '../apps/MessagesApp/Chats.vue'

export default {
    name: 'MessagesApp',
    components: {
        Contacts,
        Chats
    },
    data() {
        return {
            active_component: 'Contacts',
            chatData: {},
        }
    },
    methods: {
        changeComponent(data: {app: string, payload: object}) {
            this.active_component = data.app
            this.chatData = data.payload
        },
        closeChat() {
            this.active_component = 'Contacts'
            this.chatData = {}
        }
    },
}

</script>

<style scoped>

.content_container {
    width: 100%;
    height: 100%;
    overflow: auto;
}

</style>./MessagesApp/Chats.vue