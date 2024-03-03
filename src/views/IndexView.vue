<template>
    <main class="container">
        <PhoneNotification class="notification" :class="{ active: notification_boolean }"/>
        <PhoneHeader/>
        <MessageApp/>     
    </main>
</template>

<script lang="ts">

import PhoneHeader from '../components/apps/PhoneHeader.vue'
import MessageApp from '../components/apps/MessagesApp.vue'
import PhoneNotification from '../components/apps/PhoneNotification.vue'

export default {
    name: 'Index',
    components: {
        PhoneHeader,
        MessageApp,
        PhoneNotification
    },
    data() {
        return {
            notification_boolean: false,
            create_timeout: 0,
            remove_timeout: 0
        }
    },
    methods: {
        removeNotificationAfterTime() {
            this.remove_timeout = setTimeout(() => {
                this.notification_boolean = false
            },  this.MiliSec2Sec(7))
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

<style scoped>

.container {
    --standard_heigth: 60dvh;

    height: var(--standard_heigth);
    min-height: 31rem;
    min-width: none;
    aspect-ratio: 1 / 1.75;

    background-color: var(--background);

    border-color: black;
    border-style: solid;
    border-radius: calc(var(--standard_heigth) * 0.05);
    border-width: calc(var(--standard_heigth) * 0.005);

    display: flex;
    flex-direction: column;

    position: relative;
    overflow: hidden;

    font-size: clamp(14px, 1vw, 100px);
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