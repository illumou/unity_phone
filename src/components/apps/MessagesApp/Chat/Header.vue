<template>
    <div class="chats_header_container">
        <button @click="closeChat()"> < </button>
        <h2> {{ chatData?.username }} </h2>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Header',
    props: {
        chatData: Object
    },
    methods: {
        closeChat() {
            this.$emit('post:closeChat')
        }
    }
}

</script>

<style scoped>

.chats_header_container {
    height: 2dvh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text_color_light);
    font-size: clamp(14px, 1vw, 100px);
}

.chats_header_container button {
    position: absolute;
    left: 1rem;
    margin: 0;
    font-weight: bold;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    font-size: clamp(14px, 1vw, 100px);
    color: var(--text_color_light);
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

</style>