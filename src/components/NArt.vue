<template>
    <v-container 
    class="pt-16"
    >

        <v-card 
        flat
        dark
        color="blue-grey darken-3"
        >
            <v-card-title>
                <div style="width: 22px; height: 22px;" class="red rounded-circle"></div>
                <div style="width: 22px; height: 22px;" class="yellow mx-3 rounded-circle"></div>
                <div style="width: 22px; height: 22px;" class="green rounded-circle"></div>
            </v-card-title>
            <v-card-title class="d-flex align-center justify-center mx-10 pt-10 text-h4" style="word-break: unset;">
                <span>Every single one of my projects is on Github. Websites, js frameworks, apps, and more.</span>
            </v-card-title>
            <v-card-actions class="mb-10 pb-10 mx-10">
                <v-spacer></v-spacer>
                <v-btn
                color="blue-grey lighten-5"
                class="px-5"
                elevation="5"
                large
                outlined
                href="https://github.com/nelsondev"
                target="__blank"
                >Github</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>