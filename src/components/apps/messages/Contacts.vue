<template>
    <div class="wrapper">
        <main class="main">
            <header class="header">
                <h2> Kontakte </h2>
                <input class="input" v-model="search_key_value" placeholder="Name">
            </header >
            <div class="contact_list">
                <div v-for="entrie in display_history" class="entrie_wrapper">
                    <div class="entrie">
                        <div class="content">
                            <p class="username"> {{  entrie.username }}</p>
                            <div class="chat_symbol" @click="openChatWindow(entrie)">
                                (Chat)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">

export default {
    name: 'History',
    data() {
        return {
            search_key_value: '',
            entries: [
                {
                    id: 1,
                    username: 'Noah',
                },
                {
                    id: 2,
                    username: 'Alex',
                },
                {
                    id: 3,
                    username: 'Kevin',
                },
                {
                    id: 4,
                    username: 'Alexandra',
                },
                {
                    id: 5,
                    username: 'Neo',
                },
                {
                    id: 6,
                    username: 'Travis',
                },
                {
                    id: 7,
                    username: 'Klaus',
                },
                {
                    id: 8,
                    username: 'Günter',
                },
                {
                    id: 9,
                    username: 'Noah',
                },
                {
                    id: 10,
                    username: 'Tobias',
                },
                {
                    id: 11,
                    username: 'Marcel',
                },
                {
                    id: 12,
                    username: 'Robin',
                },
                {
                    id: 13,
                    username: 'Noah',
                },
                {
                    id: 14,
                    username: 'Romano',
                },
                {
                    id: 15,
                    username: 'Tim',
                },
                {
                    id: 16,
                    username: 'Dimraj',
                },
                {
                    id: 17,
                    username: 'Tobias',
                },
                {
                    id: 18,
                    username: 'Leo',
                },
                {
                    id: 19,
                    username: 'Kevin A.',
                },
                {
                    id: 20,
                    username: 'Kevin B.', 
                }
            ]
        }
    },
    methods: {
        openChatWindow(data: Object) {
            this.$emit('openChatWindow', data)
        }
    },
    computed: {
        display_history() {
            if (this.search_key_value) {
                const key = this.search_key_value.toLowerCase();
                return this.entries.filter((entrie: { username: string }) => entrie.username.toLowerCase().includes(key));
            } else {
                return this.entries;
            }
        }
    }
}

</script>

<style scoped>

.wrapper {
    user-select: none;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.main {
    flex-grow: 1;
    margin-bottom: 1em;
    overflow: auto;
}

.header {
    width: 100%;
    color: var(--text_color1);
    display: flex;
    flex-direction: column;
    padding-bottom: 3vh;
}

.header h2 {
    padding-left: 1vw;
    margin-top: 10px;
    margin-bottom: 0.5vh;
}

.header .input {
    height: 4vh;
    background-color: var(--background_color_chil1);
    border-style: solid;
    border-color: black;
    border-width: 0.1vw;
    margin-left: 1vw;
    margin-right: 1vw;
    color: var(--text_color1);
    font-size: 2vh;
}

.contact_list {
    margin-top: 1rem;
}

.entrie_wrapper {
    min-height: 3vh;
    height: 6vh;
    max-height: 6vh;
    position: relative;
    padding-left: 1vw;
    padding-right: 1vw;
}

.entrie {
    min-width: 100%;
    min-height: 3vh;
    border-width: 0.2rem;
    border-bottom-color: gray;
    border-bottom-style: solid;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chat_symbol {
    cursor: pointer;
}


.entrie:hover {
    background-color: lightgray;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
}

::-webkit-scrollbar-track {
  background-color: #f4f4f4;
}

</style>