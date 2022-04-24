<template>
    <v-container class="pt-16">
        <v-row>
            <v-col class="d-flex align-center">
                <v-card
                color="transparent"
                flat
                >
                    <v-card-title class="text-h5" style="word-break: unset;">
                        Let's build something together, I'd love to see what we can come up with.
                    </v-card-title>
                    <v-card-title style="word-break: unset;">
                        Send a quick email, instant message on Linkedin, or ask to contribute to some of my many personal projects.
                    </v-card-title>
                    <v-card-actions class="px-4">
                        <v-btn
                        outlined
                        color="#455A64"
                        elevation="4"
                        class="px-5"
                        x-large
                        href="mailto: nelsontron@outlook.com"
                        >Contact</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                        outlined
                        icon
                        color="#455A64"
                        href="https://www.linkedin.com/in/nelsontron/"
                        target="__blank"
                        ><v-icon>mdi-linkedin</v-icon></v-btn>
                        <v-btn
                        outlined
                        icon
                        color="#455A64"
                        href="https://github.com/nelsontron"
                        target="__blank"
                        ><v-icon>mdi-github</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col>
                <v-img
                :src="require('@/assets/logo_nel.svg')"
                style="transform: rotate(180deg)"
                ></v-img>
                <v-img
                :src="require('@/assets/logo_nel.svg')"
                ></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>