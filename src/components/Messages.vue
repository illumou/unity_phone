<template>
    <div class="app_wrapper">
        <component :is="current_active_app" :userData="userData" @openChatWindow="openChatWindow" @closeChatWindow="closeChatWindow"/>
    </div>
</template>

<script lang="ts">
import Contacts from './apps/messages/Contacts.vue'
import Conversation from './apps/messages/Coversation.vue'

export default {
    name: 'IndexView',
    components: {
        Contacts,
        Conversation
    },
    data() {
        return {
            current_active_app: 'Contacts',
            userData: null
        }
    },
    methods: {
        openChatWindow(data: any) {
            console.log(data)
            this.current_active_app = 'Conversation'
            this.userData = data
        },
        closeChatWindow() {
            this.current_active_app = 'Contacts'
        }
    }
}

</script>

<style>
    .app_wrapper {
        width: 100%;
        height: 100%;
    }
</style>