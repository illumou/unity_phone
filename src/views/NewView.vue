<template>
    <main class="container">
        <PhoneHeader/>
        <MessageApp/>     
    </main>
</template>

<script lang="ts">

import PhoneHeader from '../components/new/PhoneHeader.vue'
import MessageApp from '../components/new/MessagesApp.vue'

export default {
    name: 'NewView',
    components: {
        PhoneHeader,
        MessageApp,
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

    font-size: clamp(14px, 1vw, 100px);
}

</style>