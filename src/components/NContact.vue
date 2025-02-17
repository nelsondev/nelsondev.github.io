<script setup>
import { ref } from 'vue'
import { BellAlertIcon } from '@heroicons/vue/24/outline'

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
    <v-container id="contact" fluid min-height="100vh" class="bg-white d-flex align-center justify-center">
        <div>
            <v-alert tile title="Please Note" style="font-size: 10pt;" class="mb-4" :icon="BellAlertIcon"
                variant="tonal" color="pink">As to slightly combat robots, this
                forum will open your email client with a pre-filled email, as opposed to sending the email
                outright.</v-alert>
            <v-card color="black" flat tile>
                <v-card-text style="font-size: 48pt;" class="d-flex align-center pb-0 mb-0">
                    Contact
                    <v-spacer></v-spacer>
                </v-card-text>
                <v-card-subtitle style="font-size: 22pt;">Let's build something amazing together.</v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
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
        </div>
    </v-container>
</template>