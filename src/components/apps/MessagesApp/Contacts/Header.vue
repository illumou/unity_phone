<template>
    <div class="contacts_header_container">
        <h1> Kontaktliste </h1>
        <input placeholder="Name" v-model="input" @input="updateContactInput($event)">
    </div>
</template>

<script lang="ts">

export default {
    name: 'Header',
    data() {
        return {
            input: ''
        }
    },
    methods: {
        updateContactInput(event: Object) {
            this.$emit('update:HeaderSearchInput', this.input)
        }
    }
}

</script>

<style scoped>

.contacts_header_container {
    display: flex;
    flex-direction: column;
}

.contacts_header_container h1 {
    margin-top: 0;
    margin-left: 1dvw;
    margin-bottom: 0;
    color: var(--text_color_light)
}

.contacts_header_container input {
    margin-top: 0;
    margin-left: 1dvw;
    margin-bottom: 0;
    margin-right: 1dvw;

    padding: 0.3dvw;

    font-size: clamp(14px, 1vw, 100px);
}

</style>