<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            products: [
                {
                    title: 'Personal Website',
                    icon: 'mdi-vuejs',
                    button: {
                        title: 'Source Control',
                        href: 'https://github.com/nelsondev/nelsondev.github.io'
                    },
                    list: [
                        "I've done personal, shop, professional and industry websites in both freelance and office environments. Both in <strong>Vue.js</strong>, and <strong>React.js</strong>.",
                        '<b>Technologies:</b>',
                        '&#8226;&emsp;Vue.js / Vuetify',
                        '&#8226;&emsp;Typescript',
                    ],
                    attrs: {
                        flat: true,
                        dark: false,
                        outlined: true,
                        style: { 'border': '1px solid #37474F' },
                        class: 'blue-grey--text',
                        secondaryColor: 'blue-grey'
                    }
                },
                {
                    title: 'Platform Website',
                    icon: 'mdi-code-braces-box',
                    headliner: 'My favorite',
                    button: {
                        title: 'See more',
                        href: 'https://www.peloton.com/peloton-platform-overview/'
                    },
                    list: [
                        'User management and application distribution at a large scale. Backend, frontend and full <abbr title="OAuth 2.0 Authentication backend.">IDP</abbr> migration from Identity Server 4.0.',
                        '<b>Technologies</b>',
                        '&#8226;&emsp;Auth0',
                        '&#8226;&emsp;C# .NET 5.0',
                        '&#8226;&emsp;Vue.js / Vuetify',
                    ],
                    attrs: {
                        elevation: 8,
                        dark: true,
                        color: 'blue-grey darken-3',
                        class: 'white--text',
                        secondaryColor: 'white'
                    }
                },
                {
                    title: 'Game Engine',
                    icon: 'mdi-gamepad-circle',
                    button: {
                        title: 'Source Control',
                        href: 'https://github.com/nelsondev/line-engine'
                    },
                    list: [
                        "Created as just a fun and challenging at home project named <strong>\"ASCII Engine.\"</strong> It's created as a simple and easy to use game engine with built in controls, multi-threading operation, and \"Sprite\" creation via the editor.",
                        '<b>Technologies</b>',
                        '&#8226;&emsp;C# .NET 5.0',
                        '&#8226;&emsp;WPF'
                    ],
                    attrs: {
                        flat: true,
                        dark: false,
                        outlined: true,
                        style: { 'border': '1px solid #37474F' },
                        class: 'blue-grey--text',
                        secondaryColor: 'blue-grey'
                    }
                }
            ]
        }
    }
})
</script>

<template>
    <v-container style="position: relative;" class="pb-16">
        <div class="d-flex align-center justify-center">
            <div class="mb-4 col-8 text-center">
                <h1 class="text-h4">
                    <span class="blue-grey--text text--lighten-3">&#10077;</span> 
                    Here's a couple of my favorite projects 
                    <span class="blue-grey--text text--lighten-3">&#10078;</span>
                </h1>
                <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quasi, aut minima possimus mollitia explicabo eum expedita adipisci.</p> -->
            </div>
        </div>
        <v-img
        style="
            position: absolute; 
            right: -40vh; 
            top: 0; 
            z-index: -1; 
            transform: rotate(45deg);
        "
        min-width="400px"
        min-height="400px"
        class="blue-grey lighten-4 rounded-xl"
        ></v-img>
        <v-img
        style="
            position: absolute; 
            left: -40vh; 
            top: 30vh; 
            z-index: -1; 
            transform: rotate(45deg);
        "
        min-width="300px"
        min-height="300px"
        class="blue-grey lighten-4 rounded-xl"
        ></v-img>
        <v-row>
            <v-col 
            v-for="item of products"
            :key="JSON.stringify(item)"
            cols="4"
            >   
                <v-hover
                v-slot="{ hover }"
                >
                    <div 
                    v-if="item.headliner" 
                    class="mb-3 blue-grey--text d-flex align-center transparent"
                    >
                            <v-icon 
                            color="blue-grey" 
                            class="pr-2"
                            :style="{ 'transform':  hover ? 'scale(1.4, 1.4)' : '' }"
                            >  
                                {{hover ? 'mdi-heart' : 'mdi-heart-outline'}}
                            </v-icon>
                        <v-divider class="mr-2" :class="item.attrs.color"></v-divider>
                        {{item.headliner}}
                    </div>
                </v-hover>
                <v-card
                v-bind="item.attrs"
                height="100%"
                class="d-flex flex-column"
                >
                    <v-card-title>
                        <v-icon large :color="item.attrs.secondaryColor">{{item.icon}}</v-icon>
                        <v-spacer></v-spacer>
                        <span>{{item.title}}</span>
                    </v-card-title>
                    <div
                    :class="item.attrs.secondaryColor"
                    style="width: 100%; height: 3px"
                    ></div>
                    <v-card-text>
                        <p
                        v-for="list of item.list"
                        :key="JSON.stringify(list)"
                        style="font-size: 12pt;"
                        v-html="list"
                        ></p>
                    </v-card-text>
                    <v-card-actions class="mt-auto">
                        <v-spacer></v-spacer>
                        <v-btn
                        text
                        :color="item.attrs.secondaryColor"
                        :href="item.button.href"
                        target="__blank"
                        >
                            <span v-html="item.button.title">Source Control</span>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>