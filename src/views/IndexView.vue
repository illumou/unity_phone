<template>
    <main class="phone_layout">
        <Header class="header"/>
        <Messages class="app"/>
    </main>
</template>

<script lang="ts">

import Messages from '../components/Messages.vue'
import Header from '../components/phone/Header.vue'

export default {
    name: 'IndexView',
    components: {
        Messages,
        Header
    },
    data() {
        return {
            current_active_app: 'Messages'
        }
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
}

.header {
    height: 8%;
}

.app {
    height: 92%;
}

</style>