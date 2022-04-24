<template>
    <div>
        <v-parallax 
        :src="require('@/assets/art/spooky.png')"
        height="900"
        >
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col 
                    cols="12"
                    sm="12"
                    md="8"
                    lg="6"
                    xl="5"
                    >
                        <v-card
                        flat
                        class="pa-1"
                        color="rgba(0, 0, 0, 0.3)"
                        style="backdrop-filter: blur(4px);"
                        dark
                        >
                            <v-card-title>
                                <v-img
                                :src="require('@/assets/happy.svg')"
                                contain
                                max-width="128pt"
                                class="px-1"
                                style="filter: invert(100%)"
                                ></v-img>
                            </v-card-title>
                            <v-card-title style="word-break: unset;">
                                Games, art, and music are some of my biggest passions.
                            </v-card-title>
                            <v-card-text>
                                <p style="word-break: unset;">
                                    My personal time consists of designing and piecing together the ultimate art form: video games.
                                    I join game jams, work on personal passion projects and sometimes just draw for fun. I try to
                                    be as active as possible in the best community online.
                                </p>
                                <p style="word-break: unset;">
                                    I've got a couple released video games, but there's a lot more on the way. Hopefully you stick
                                    around to check a couple of them out in the future.
                                </p>
                            </v-card-text>
                            <v-card-actions class="px-4">
                                <v-spacer></v-spacer>
                                <div class="d-flex">
                                    <v-btn
                                    color="primary"
                                    large
                                    text
                                    light
                                    class="px-5"
                                    href="https://nelsondev.itch.io"
                                    target="__blank"
                                    >
                                        NelsonDev 
                                        <v-icon class="ml-1">mdi-chevron-right</v-icon>
                                    </v-btn>
                                    <v-btn
                                    color="primary"
                                    large
                                    text
                                    light
                                    class="px-5"
                                    href="/hats/"
                                    target="__blank"
                                    >
                                        Play 
                                        <v-icon class="ml-1">mdi-chevron-right</v-icon>
                                    </v-btn>
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-parallax>
    </div>
</template>