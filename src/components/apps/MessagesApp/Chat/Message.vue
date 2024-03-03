<template>
    <div class="message_wrapper" :class="chatDirection(message?.mode)">
        <div class="message_content">
            {{ message?.message }}
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Message',
    props: {
        message: Object,
    },
    methods: {
        chatDirection(mode: string) {
            if (mode === 'send') {
                return 'message_send'
            } else if (mode === 'recieve') {
                return 'message_recieved'
            }
        }
    }
}

</script>

<style scoped>

.message_wrapper {
    margin-top: 1rem;
}

.message_recieved {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
}

.message_send {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
}

.message_recieved .message_content {
    margin-right: 3rem;
    text-wrap: wrap;
    background-color: gray;
    border-radius: 1rem;
    padding: 1rem;
    color: var(--text_color_light);
}

.message_send .message_content {
    margin-left: 3rem;
    text-wrap: wrap;
    background-color: blue;
    border-radius: 1rem;
    padding: 1rem;
    color: var(--text_color_light);
}

</style>