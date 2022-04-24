<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    components: {
        NMenuBar: () => import('@/components/NMenuBar.vue'),
        NBackground: () => import('@/components/NBackground.vue'),
        NLanding: () => import('@/components/NLanding.vue'),
        NShop: () => import('@/components/NShop.vue'),
        NFooter: () => import('@/components/NFooter.vue'),
        NArt: () => import('@/components/NArt.vue'),
        NProjects: () => import('@/components/NProjects.vue'),
        NPlug: () => import('@/components/NPlug.vue'),
        NContact: () => import('@/components/NContact.vue')
    },

    data() {
        return {
            step: 1
        }
    }
})
</script>

<template>
    <v-app>
        <v-main>
            <v-app-bar 
            app 
            flat
            absolute
            dense
            style="top: 30px"
            color="primary"
            dark
            >
                <v-spacer></v-spacer>
                <span>This website is still under construction.</span>
                <v-spacer></v-spacer>
            </v-app-bar>
            <n-menu-bar></n-menu-bar>
            <n-background></n-background>
            <n-landing></n-landing>
            <n-projects id="work"></n-projects>
            <n-art></n-art>
            <n-plug id="art"></n-plug>
            <n-contact id="contact"></n-contact>
            <!-- <n-shop id="shop"></n-shop> -->
            <n-footer></n-footer>    
        </v-main>
    </v-app>
</template>

<style>
html * {
    font-family: "Nunito", sans-serif !important;
}

html {
    scroll-behavior: smooth;
}

.font {
    font-family: "Nunito", sans-serif !important;
}

.theme--light.v-application {
    background: transparent !important;
}

.v-stepper__header {
    box-shadow: none;
}
</style>