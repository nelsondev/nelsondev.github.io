<script setup>
import { computed, ref } from 'vue'
import NLogo from './NLogo.vue';

const scroll = ref(0)

window.addEventListener("scroll", () => scroll.value = window.scrollY)
window.addEventListener("load", () => scroll.value = window.scrollY)

const height = computed(() => (scroll.value > 0 ? 80 : 250))
</script>

<style scoped>
</style>

<template>
    <v-toolbar :flat="true" color="white" class="px-4 d-flex align-center position-fixed" :height="height" style="top: 0; z-index: 99;">
        <v-toolbar-title>
            <n-logo :small="scroll > 0"></n-logo>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn size="x-large" class="font-weight-bold" color="black" href="/">Home</v-btn>
            <v-btn size="x-large" class="font-weight-bold" color="black" href="/#design">Design</v-btn>
            <v-btn size="x-large" class="font-weight-bold" color="black" href="/#contact">Contact</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <div class="bg-white" style="width: 100%;" :style="{ 'min-height': '250px' }"></div>
</template>