<template>
    <div class="contacts_container">
        <Header @update:HeaderSearchInput="updateKey"/>
        <div class="contact_wrapper">
            <Contact v-for="contact in filtered_contacts" :data="contact" @post:openChat="changeToChat"/>
        </div>
    </div>
</template>

<script lang="ts">

import Header from '../MessagesApp/Contacts/Header.vue'
import Contact from '../MessagesApp/Contacts/Contact.vue'

export default {
    name: 'Contacts',
    components: {
        Header,
        Contact
    },
    data() {
        return {
            filter_key: '',
            contacts: [
                {id: 1, username: 'Emma Smith'},
                {id: 2, username: 'Liam Johnson'},
                {id: 3, username: 'Olivia Williams'},
                {id: 4, username: 'Noah Brown'},
                {id: 5, username: 'Sophia Jones'},
                {id: 6, username: 'Jackson Garcia'},
                {id: 7, username: 'Ava Miller'},
                {id: 8, username: 'Aiden Davis'},
                {id: 9, username: 'Isabella Rodriguez'},
                {id: 10, username: 'Lucas Martinez'},
                {id: 11, username: 'Mia Taylor'},
                {id: 12, username: 'Ethan Jackson'},
                {id: 13, username: 'Amelia White'},
                {id: 14, username: 'Oliver Harris'},
                {id: 15, username: 'Harper Martin'},
                {id: 16, username: 'Elijah Thompson'},
                {id: 17, username: 'Abigail Garcia'},
                {id: 18, username: 'Benjamin Davis'},
                {id: 19, username: 'Emily Martinez'},
                {id: 20, username: 'Mason Miller'},
            ]
        }
    },
    methods: {
        updateKey(data: string) {
            this.filter_key = data
        },
        changeToChat(data: Object) {
            const componentData = {
                app: 'Chats',
                payload: data,
            }
            this.$emit('post:openComponent', componentData)
        }
    },
    computed: {
        filtered_contacts() {
            if (this.filter_key) {
                const key = this.filter_key.toLowerCase();
                return this.contacts.filter((entrie: { username: string }) => entrie.username.toLowerCase().includes(key));
            } else {
                return this.contacts;
            }
        }
    }
}

</script>

<style scoped>

.contacts_container {
    height: 100%;
    width: 100%;
}

.contact_wrapper {
    margin-top: 1.5rem;
}


</style>