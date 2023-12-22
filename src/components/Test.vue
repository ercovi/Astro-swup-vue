<template>
    <button @click="log">
        hola! click component
    </button>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const log = () => {
    console.log('clicking')
}
onMounted(() => {
    console.log('mounted element');
});

onUnmounted(() => {
    console.log('unmounted')
})
</script>

<style scoped>
button {
    border: 1px solid white; 
    background: transparent;
    color: white;
    border-radius: 10px;
    display: inline-block;
    font-size: 30px;
    padding: 10px 0;
    cursor: pointer;

    &:hover {
        background: white;
        color: black;
    }
}
</style>