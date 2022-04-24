<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            pattern: [
                'xoxoxoxoxoxoxoxoxoxoxoxoxoxox',
                'oxoxoxoxoxoxoxoxoxoxoxoxoxoxo',
                'xoxoxoxoxoxoxoxoxoxoxoxoxoxox',
                'oxoxoxoxoxoxoxoxoxoxoxoxoxoxo',
                'xoxoxoxoxoxoxoxoxoxoxoxoxoxox'
            ],
            colorMask: [
                'p               p   p        ',
                '       a                   a ',
                '    p                   p    ',
                ' a               a   a       ',
                '            a                '
            ],
            iconMask: [
                'g               g   g        ',
                '       g                   g ',
                '    c                   c    ',
                ' g               g   g       ',
                '            c                '
            ]
        }
    },

    methods: {
        getColor(char: string) {
            if (char === 'p') return 'primary'
            if (char === 'a') return 'blue-grey'
            return `grey ${Math.random() > 0.5 ? 'lighten-4' : 'lighten-3'}`
        },
        getIcon(char: string) {
            if (char === 'c') return 'mdi-cube-outline'
            if (char === 'g') return 'mdi-cog-outline'
        }
    },
})
</script>

<template>
    <v-container
    fluid
    class="pt-12 d-flex justify-center"
    style="overflow: hidden !important; max-width: 100vw;"
    >
        <div>
            <div
            v-for="(item, i) of pattern"
            :key="i"
            class="d-flex"
            >
                <div
                v-for="(char, j) of item"
                :key="j"
                >
                    <div
                    v-if="char === 'x'"
                    >
                        <div 
                        v-if="colorMask[i][j] === ' '"
                        class="rounded grey" 
                        style="width: 60px; height: 60px; transform: rotate(45deg)"
                        :class="getColor(colorMask[i][j])"
                        ></div>
                        <div 
                        v-else
                        >
                            <v-icon 
                            size="60px"
                            :color="getColor(colorMask[i][j])"
                            style="transform: scale(1.5)"
                            >{{getIcon(iconMask[i][j])}}</v-icon>
                        </div>
                    </div>
                    <div
                    v-if="char === 'o'"
                    >
                        <div  
                        class="rounded-circle grey lighten-4" 
                        style="width: 60px; height: 60px;"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>