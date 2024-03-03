<template>
    <div class="header_container">
        <div class="header_content">
            <p> {{ current_local_time }} </p>
            <div class="header_speaker_container">
                <div class="header_speaker"/>
            </div>
            <p> UniCo </p>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'PhoneHeader',
    data() {
        return {
            current_local_time: this.getCurrentTime(),
            time_interval: 0,
        }
    },
    methods: {
        getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        },
        updateCurrentTime() {
            this.current_local_time = this.getCurrentTime()
        },
    },
    mounted() {
        this.time_interval = setInterval(this.updateCurrentTime, 1000)
    },
    beforeUnmount() {
        clearInterval(this.time_interval)
    }
}

</script>

<style scoped>

.header_container {
    flex-grow: 1;
    width: 100%;
    height: 9%;
    display: flex;
}

.header_content {
    padding-left: 2dvw;
    padding-right: 2dvw;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: transparent;
}

.header_content p {
    flex-grow: 0;
    color: var(--text_color_light);
    overflow: hidden;
    text-align: center;
}

.header_speaker_container {
    flex-grow: 1;
    height: 100%;

    display: grid;
    place-items: center;
}

.header_speaker {
    width: 80%;
    height: 30%;
    background-color: black;
    border-radius: calc(var(--standard_heigth) * 0.10);
}

</style>