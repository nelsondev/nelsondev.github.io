<template>
    <v-app-bar
    flat
    height="80px"
    color="white"
    fixed
    >
        <v-img
        :src="require('@/assets/logo.svg')"
        max-width="38pt"
        height="38pt"
        contain
        ></v-img>
        <span style="color: #D7D7D7; font-size: 8pt; letter-spacing: 12px;" class="pl-4">
            ⬤
        </span>
        <!-- <v-spacer></v-spacer> -->
        <v-btn
        text
        color="accent"
        class="px-0 mx-1"
        href="#"
        >
            Home
        </v-btn>
        <v-btn
        text
        color="accent"
        class="px-0 mx-1"
        href="#work"
        >
            Work
        </v-btn>
        <v-btn
        text
        color="accent"
        class="px-0 mx-1"
        href="#art"
        >
            Art
        </v-btn>
        <v-btn
        outlined
        color="primary"
        class="px-0 mx-1"
        href="#contact"
        >
            Hire
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
        icon
        large
        class="mx-1"
        color="primary"
        href="https://www.linkedin.com/in/nelsontron/"
        target="__blank"
        >
            <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
        icon
        large
        class="mx-1"
        color="primary darken-2"
        href="https://github.com/nelsondev"
        target="__blank"
        >
            <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
        icon
        large
        class="mx-1"
        color="primary darken-4"
        href="https://nelsontron.art"
        target="__blank"
        >
            <v-icon>mdi-eye-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>