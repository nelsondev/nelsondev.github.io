<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            products: [
                {
                    title: 'Website',
                    description: '',
                    icon: 'mdi-package',
                    list: [
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor'
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
                    title: 'Store',
                    description: '',
                    icon: 'mdi-storefront',
                    headliner: 'Most Popular',
                    list: [
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor'
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
                    title: 'Custom',
                    description: '',
                    icon: 'mdi-code-braces-box',
                    list: [
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor',
                        'Lorem ipsum dolor'
                    ],
                    attrs: {
                        flat: false,
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
            <v-icon size="30" color="blue-grey">mdi-cog-outline</v-icon>
            <v-icon size="40" color="blue-grey">mdi-cog-outline</v-icon>
            <div class="mb-4 col-8 text-center">
                <h1>Lorem, ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quasi, aut minima possimus mollitia explicabo eum expedita adipisci.</p>
            </div>
            <v-icon size="40" color="blue-grey">mdi-cog-outline</v-icon>
            <v-icon size="30" color="blue-grey">mdi-cog-outline</v-icon>
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
                <div 
                v-if="item.headliner" 
                class="mb-3 blue-grey--text d-flex align-center transparent"
                >
                    <v-icon color="blue-grey" class="pr-2">mdi-heart-outline</v-icon>
                    <v-divider class="mr-2" :class="item.attrs.color"></v-divider>
                    {{item.headliner}}
                </div>
                <v-card
                v-bind="item.attrs"
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
                        <v-list 
                        dense
                        nav
                        color="transparent"
                        class="pa-0"
                        >
                            <v-list-item
                            v-for="list of item.list"
                            :key="JSON.stringify(list)"
                            class="ma-0"
                            >
                                <v-list-item-icon>
                                    <v-icon 
                                    :color="item.attrs.secondaryColor"
                                    >mdi-circle-medium</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>{{list}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        text
                        :color="item.attrs.secondaryColor"
                        >
                            <span>More info</span>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>