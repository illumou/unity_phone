<template>
    <div class="contacts_contact_container">
        <div class="contacts_contact_content">
            <p> {{ data?.username }} </p>
            <button @click="openChat()"> (CHAT) </button>
        </div>
    </div>

</template>

<script lang="ts">

export default {
    name: 'Contact',
    props: {
        data: Object
    },
    data() {
        return {

        }
    },
    methods: {
        openChat() {
            this.$emit('post:openChat', this.data)
        }
    }
}

</script>

<style scoped>

.contacts_contact_container {
    padding-left: 1dvw;
    padding-right: 1dvw;
}

.contacts_contact_content {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5dvh;

    border-top-color: white;
    border-top-style: solid;
    border-top-width: 0.1dvh;
}

.contacts_contact_content p {
    color: var(--text_color_light);
}

.contacts_contact_content button {
    height: 100%;
    width: 4dvw;
    color: var(--text_color_light);
    background-color: transparent;
    border: 0;
    cursor: pointer;

    font-size: clamp(14px, 1vw, 100px);
}

</style>