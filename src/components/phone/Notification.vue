<template>
    <div class="wrapper">
        <div class="notification_content" @click="openChatWindow(notificiation)">
            <p> {{ notificiation.text }} </p>
            <p> {{ notificiation.username }} </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Notification',
    data() {
        return {
            notificiation: {id: 1, app: 'Message', text: 'Neue Nachricht', chat_id: '1', username: 'Noah'}
        }
    },
    methods: {
        openChatWindow(data: Object) {
            this.$emit('openChatFromNotification', data)
        }
    }
}

</script>

<style scoped>


.wrapper {
    width: 100%;
    height: 20%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.notification_content {
    width: 80%;
    height: 70%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    cursor: pointer;
}

.notification_content p {
    margin: 0;
}

</style>