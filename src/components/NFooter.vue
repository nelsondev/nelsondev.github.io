<template>
    <v-container fluid class="blue-grey darken-4 white--text mt-16">
        <div>
            <v-img 
            :src="require('@/assets/logowhite.svg')"
            max-width="38pt"
            ></v-img>
        </div>
        <v-container>
            <v-row class="py-16">
                <v-col>
                    <h4>Contact</h4>
                    <v-list 
                    dense 
                    dark
                    color="transparent"
                    class="ma-0 pa-0"
                    >
                        <v-list-item>
                            <v-list-item-icon><v-icon>mdi-phone</v-icon></v-list-item-icon>
                            <v-list-item-title>(403) 701-7900</v-list-item-title>    
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon><v-icon>mdi-at</v-icon></v-list-item-icon>
                            <v-list-item-title>nelsontron@outlook.com</v-list-item-title>    
                        </v-list-item>
                        <v-list-item
                        href="/resume.pdf"
                        target="__blank"
                        >
                            <v-list-item-icon><v-icon>mdi-note-text-outline</v-icon></v-list-item-icon>
                            <v-list-item-title>Resume</v-list-item-title>    
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col>
                    <h4>Social</h4>
                    <v-list 
                    dense 
                    dark
                    color="transparent"
                    class="ma-0 pa-0"
                    >
                        <v-list-item
                        href="https://www.linkedin.com/in/nelsontron/"
                        target="__blank"
                        >
                            <v-list-item-icon><v-icon>mdi-linkedin</v-icon></v-list-item-icon>
                            <v-list-item-title>LinkedIn</v-list-item-title>    
                        </v-list-item>
                        <v-list-item
                        href="https://stackoverflow.com/users/11206432/nelson-mccullough"
                        target="__blank"
                        >
                            <v-list-item-icon><v-icon>mdi-stack-overflow</v-icon></v-list-item-icon>
                            <v-list-item-title>StackOverflow</v-list-item-title>    
                        </v-list-item>
                        <v-list-item
                        href="https://github.com/nelsondev"
                        target="__blank"
                        >
                            <v-list-item-icon><v-icon>mdi-github</v-icon></v-list-item-icon>
                            <v-list-item-title>Github</v-list-item-title>    
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col></v-col>
            </v-row>
            <div class="d-flex align-center justify-center pb-10">
                <span class="pl-3 blue-grey--text">Copyright 2022 &copy; Nelson McCullough. All right reserved.</span>
            </div>
        </v-container>
    </v-container>
</template>