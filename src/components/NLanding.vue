<script setup>
import NLogo from './NLogo.vue';
</script>

<style scoped>
.rubik-mono-one-regular {
	font-family: "Rubik Mono One", serif !important;
	font-weight: 400;
	font-style: normal;
}
.n-landing-container {
    font-family: "Rubik Mono One", serif !important;
	font-weight: 400;
	font-style: normal;
    font-size: 30pt;
    line-height: 85pt;
    color: black;
    position: relative;
    overflow: hidden;
    padding-bottom: 0;
}
.n-landing-container h1>span {
    display: block;
}
.n-btn {
    border-radius: 0;
    width: 230px;
    height: 110px;
    font-size: 34pt; 
    text-decoration: underline;
}
</style>

<template>
    <div class="d-none d-md-block">
        <v-container fluid class="n-landing-container bg-white">
            <v-container fluid class="d-flex align-center py-0">
                <h1 class="bg-yellow-lighten-4">Effortless</h1>
                <v-spacer></v-spacer>
                <n-logo :small="true" :flat="true"></n-logo>
            </v-container>
        </v-container>
        <v-container fluid class="n-landing-container bg-white">
            <v-container fluid class="d-flex align-center py-0">
                <h1 class="bg-pink-lighten-4">Fast</h1>
                <v-spacer></v-spacer>
                <n-logo :small="true" :flat="true"></n-logo>
            </v-container>
        </v-container>
        <v-container fluid class="n-landing-container bg-white">
            <v-container fluid class="d-flex align-center py-0">
                <h1 class="bg-teal-accent-1">Beautiful</h1>
                <v-spacer></v-spacer>
                <n-logo :small="true" :flat="true"></n-logo>
            </v-container>
        </v-container>
        <v-container fluid class="n-landing-container bg-white">
            <v-container fluid class="d-flex align-center py-0">
                <h1 class="bg-black">Websites</h1>
                <v-spacer></v-spacer>
                <n-logo :small="true" :flat="true"></n-logo>
            </v-container>
        </v-container>
        <v-container fluid class="n-landing-container bg-white py-16">
            <v-container fluid class="d-flex align-center py-0">
                <v-spacer></v-spacer>
                <v-btn class="n-btn" color="yellow-lighten-4 elevation-0" href="/#contact">CONTACT</v-btn>
                <v-btn class="n-btn" color="pink-lighten-4 elevation-0" href="/#contact">CONTACT</v-btn>
                <v-btn class="n-btn" color="teal-accent-1 elevation-0" href="/#contact">CONTACT</v-btn>
            </v-container>
        </v-container>
    </div>
</template>