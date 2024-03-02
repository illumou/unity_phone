<template>
    <main class="phone_layout">
        <Notification class="notification" :class="{ active: notification_boolean }" @openChatFromNotification="forwardData"/>
        <Header class="header"/>
        <Messages class="app" :data_from_notification="data_from_notification"/>
    </main>
</template>

<script lang="ts">

import Messages from '../components/Messages.vue'
import Header from '../components/phone/Header.vue'
import Notification from '../components/phone/Notification.vue'

export default {
    name: 'IndexView',
    components: {
        Messages,
        Header,
        Notification,
    },
    data() {
        return {
            current_active_app: 'Messages',
            notification_boolean: false,
            data_from_notification: {}
        }
    },
    methods: {
        removeNotificationAfterTime() {
            this.remove_timeout = setTimeout(() => {
                this.notification_boolean = false
            },  this.MiliSec2Sec(7))
        },
        forwardData(data: Object) {
            this.data_from_notification = data
            clearTimeout(this.remove_timeout)
            this.notification_boolean = false

        },
        MiliSec2Sec(time: number) {
            return time * 1000
        }
    },
    mounted() {
        this.create_timeout = setTimeout(() => {
            this.notification_boolean = true
            this.removeNotificationAfterTime()
        }, this.MiliSec2Sec(30))
    }
}

</script>

<style>

.phone_layout {
    width: 18vw;
    height: 58vh;
    min-height: 40rem;
    min-width: 20rem;
    border-radius: 1rem;
    overflow: hidden;
    border-style: solid;
    border-color: black;
    border-width: 4px;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
}

.header {
    height: 8%;
}

.app {
    height: 92%;
}

.notification {
    position: absolute;
    top: -100%;
    transition: top 1s ease;
}

.notification.active {
    top: 0;
}

</style>