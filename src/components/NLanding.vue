<script setup>
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify';
import NLogo from './NLogo.vue';

const effortless = ref('EFFORTLESS')
const effortlessCounter = ref(0)
const blazing = ref('FAST')
const blazingCounter = ref(0)
const beautiful = ref('BEAUTIFUL')
const beautifulCounter = ref(0)
const websites = ref('WEBSITES.')
const websitesCounter = ref(0)
const display = useDisplay()

function animate() {
    if (effortlessCounter.value !== effortless.value.length) {
        effortlessCounter.value += 1
        setTimeout(animate, 100)
    }
    if (effortlessCounter.value === effortless.value.length && blazingCounter.value !== blazing.value.length) {
        blazingCounter.value += 1
        setTimeout(animate, 200)
    }
    if (blazingCounter.value === blazing.value.length && beautifulCounter.value !== beautiful.value.length) {
        beautifulCounter.value += 1
        setTimeout(animate, 250)
    }
    if (beautifulCounter.value === beautiful.value.length && websitesCounter.value !== websites.value.length) {
        websitesCounter.value += 1
        setTimeout(animate, 300)
    }
}

onMounted(animate)
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
                <h1 style="color: white">N</h1>
                <h1 class="bg-yellow-lighten-4">{{ effortless.substring(0, effortlessCounter) }}</h1>
                <v-spacer></v-spacer>
                <n-logo :small="true" :flat="true"></n-logo>
                <h1 style="color: white">N</h1>
            </v-container>
        </v-container>
        <v-container fluid class="n-landing-container bg-white">
            <v-container fluid class="d-flex align-center py-0">
                <h1 style="color: white">E</h1>
                <h1 class="bg-pink-lighten-4">{{ blazing.substring(0, blazingCounter) }}</h1>
                <v-spacer></v-spacer>
                <n-logo :small="true" :flat="true"></n-logo><h1 style="color: white">T</h1>
            </v-container>
        </v-container>
        <v-container fluid class="n-landing-container bg-white">
            <v-container fluid class="d-flex align-center py-0">
                <h1 style="color: white">L</h1>
                <h1 class="bg-teal-accent-1">{{ beautiful.substring(0, beautifulCounter) }}</h1>
                <v-spacer></v-spacer>
                <n-logo :small="true" :flat="true"></n-logo>
                <h1 style="color: white">R</h1>
            </v-container>
        </v-container>
        <v-container fluid class="n-landing-container bg-white">
            <v-container fluid class="d-flex align-center py-0">
                <h1 style="color: white">S</h1>
                <h1 class="bg-black">{{ websites.substring(0, websitesCounter) }}</h1>
                <v-spacer></v-spacer>
                <n-logo :small="true" :flat="true"></n-logo>
                <h1 style="color: white">O</h1>
            </v-container>
        </v-container>
        <v-container fluid class="n-landing-container bg-white py-16">
            <v-container fluid class="d-flex align-center py-0">
                <h1 style="color: white">O</h1>
                <v-spacer></v-spacer>
                <v-btn class="n-btn" color="yellow-lighten-4 elevation-0" href="/#contact">CONTACT</v-btn>
                <v-btn class="n-btn" color="pink-lighten-4 elevation-0" href="/#contact">CONTACT</v-btn>
                <v-btn class="n-btn" color="teal-accent-1 elevation-0" href="/#contact">CONTACT</v-btn>
                <h1 style="color: white">N</h1>
            </v-container>
        </v-container>
    </div>
</template>