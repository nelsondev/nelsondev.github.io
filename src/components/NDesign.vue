<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NLogo from './NLogo.vue'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)
const designColor = ref("")

onMounted(() => {
    gsap.to(container.value.$el, {
        x: () => -container.value.$el.scrollWidth + window.innerWidth,
        ease: "linear",

        scrollTrigger: {
            trigger: container.value.$el,
            start: "center center",
            end: () => `+=${container.value.$el.scrollWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 0,
            onUpdate: (self) => {
                if (self.progress == 0) {
                    designColor.value = 'text-white'
                }
                if (self.progress > 0.04) {
                    designColor.value = 'text-yellow'
                }
                if (self.progress > 0.08) {
                    designColor.value = 'text-pink'
                }
                if (self.progress > 0.12) {
                    designColor.value = 'text-teal'
                }
                if (self.progress > 0.16) {
                    designColor.value = 'text-yellow'
                }
                if (self.progress > 0.2) {
                    designColor.value = 'text-pink'
                }
                if (self.progress > 0.24) {
                    designColor.value = 'text-teal'
                }
                if (self.progress > 0.28) {
                    designColor.value = 'text-yellow'
                }
                if (self.progress > 0.32) {
                    designColor.value = 'text-pink'
                }
                if (self.progress > 0.36) {
                    designColor.value = 'text-teal'
                }
                if (self.progress > 0.4) {
                    designColor.value = 'text-yellow'
                }
            }
        },
    })
})
</script>

<style scoped>
.v-container {
    display: flex;
    flex-wrap: nowrap;
}
.n-landing-container {
    font-family: "Rubik Mono One", serif !important;
	font-weight: 400;
	font-style: normal;
    font-size: 70pt;
    color: white;
    padding-bottom: 0;
    line-height: 72pt;
}
</style>

<template>
    <v-container id="design" ref="container" fluid height="110vh" class="bg-black d-flex align-center justify-start" style="overflow-x: visible; width: max-content;">
        <div class="n-landing-container">
            <h4 style="font-size: 24pt; text-align: start;">Calgary Alberta website</h4>
            <h1 :class="designColor" style="transition: all 0.5s ease-in-out;">DESIGN</h1>
            <h4 style="font-size: 24pt; text-align: center;">& developer services.</h4>
            <div class="d-flex justify-end">
                <n-logo small flat></n-logo>
            </div>
        </div>
        <div style="min-width: 250px; min-height: 500px;"></div>
        <a href="https://grizzlyirrigation.ca" target="_blank" class="pa-4 d-flex align-center justify-center" style="outline: 1px solid white; min-width: 500px; min-height: 500px;">
            <v-img src="@/assets/grizzlyirrigation.png" width="500" height="500"></v-img>
        </a>
        <div style="min-width: 250px; min-height: 500px;"></div>
        <a href="https://calgary.murrietas.ca" target="_blank"  class="pa-4 d-flex align-center justify-center" style="outline: 1px solid white; min-width: 500px; min-height: 500px;">
            <v-img src="@/assets/logocalgary.png" max-width="300" max-height="300"></v-img>
        </a>
        <div style="min-width: 250px; min-height: 500px;"></div>
        <a href="https://boroughbar.ca" target="_blank"  class="pa-4 d-flex align-center justify-center" style="outline: 1px solid white; min-width: 500px; min-height: 500px;">
            <v-img src="@/assets/logoborough.png" max-width="300" max-height="300"></v-img>
        </a>
        <div style="min-width: 250px; min-height: 500px;"></div>
        <a href="https://canmore.murrietas.ca" target="_blank"  class="pa-4 d-flex align-center justify-center" style="outline: 1px solid white; min-width: 500px; min-height: 500px;">
            <v-img src="@/assets/logocanmore.png" max-width="300" max-height="300"></v-img>
        </a>
        <div style="min-width: 250px; min-height: 500px;"></div>
        <a href="https://swarmmo.games" target="_blank"  class="pa-4 d-flex align-center justify-center" style="outline: 1px solid white; min-width: 500px; min-height: 500px;">
            <v-img src="@/assets/swarmmo.png" max-width="300" max-height="300"></v-img>
        </a>
        <div style="min-width: 500px; min-height: 500px;"></div>
    </v-container>
</template>