<script setup>
import NLogo from './NLogo.vue';
</script>

<style scoped></style>

<template>
    <v-footer color="grey" class="d-flex flex-column">
        <v-container class="d-flex">
            <v-spacer></v-spacer>
            <n-logo :small="true" :flat="true"></n-logo>
        </v-container>
        <v-container class="d-flex align-center justify-center">Copyright &copy; {{ new Date().getFullYear() }} nelsondev. All rights reserved.</v-container>
    </v-footer>
</template>