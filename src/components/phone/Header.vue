<template>
    <div class="phone_header">
        <p> {{ current_time }} </p>
        <p> Unity-Com </p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Header',
    data() {
        return {
            current_time: this.getCurrentTime(),
            time_interval: 0,
        }
    },
    methods: {
        getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        },
        updateCurrentTime() {
            this.current_time = this.getCurrentTime()
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

<style>


.phone_header {
    height: 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.phone_header p {
    padding-top: 1vh;
    padding-left: 1vw;
    padding-right: 1vw;
    color: var(--text_color1);
}


</style>