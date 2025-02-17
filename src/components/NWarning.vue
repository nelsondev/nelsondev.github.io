<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { BellAlertIcon } from '@heroicons/vue/24/outline';
import NLogo from './NLogo.vue';

const { smAndDown } = useDisplay()

const mail = ref({
    name: null,
    body: null
})
const valid = ref()

const isRequired = (v) => !!v || "Required."

function send() {
    document.location.href = `mailto:nelsontron@outlook.com?subject=${encodeURIComponent(mail.value.name)}${encodeURIComponent(' - Freelance Consultation Request')}&body=${encodeURIComponent(mail.value.body)}`
}
</script>

<style scoped>
.n-btn {
    border-radius: 0;
    width: 150px;
    height: 80px;
    font-size: 24pt;
    text-decoration: underline;
}
</style>

<template>
    <v-dialog persistent :model-value="smAndDown" fullscreen>
        <v-card color="black">
            <v-alert tile color="pink" variant="tonal" title="Please note" :icon="BellAlertIcon" text="The mobile version of this website is currently under construction."></v-alert>
            <v-card-title>
                <n-logo small flat class="pb-6 pt-4"></n-logo>
            </v-card-title>
            <v-card-title style="font-size: 22pt;">
                Contact
            </v-card-title>
            <v-card-subtitle>Calgary Alberta website design & developer services.</v-card-subtitle>
            <v-card-text class="px-4">
                <v-form v-model="valid">
                    <v-text-field v-model="mail.name" label="Name" color="yellow" variant="solo-filled" flat tile
                        :rules="[isRequired]"></v-text-field>
                    <v-textarea v-model="mail.body" label="Request" color="teal" variant="solo-filled" flat tile
                        :rules="[isRequired]"></v-textarea>
                    <div class="d-flex align-center">
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid" @click="send" size="x-large" color="pink"
                            class="n-btn">Compose</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>