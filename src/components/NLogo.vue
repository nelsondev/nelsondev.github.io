<script setup>
defineProps({ small: Boolean, flat: Boolean })
</script>

<style scoped>
.n-logo-container {
    font-family: "Rubik Mono One", serif !important;
	font-weight: 400;
	font-style: normal;
    transition: all 0.1s ease-in-out;
    font-size: var(--n-logo-font-size);
    line-height: var(--n-logo-line-height);
    letter-spacing: var(--n-logo-letter-spacing);
}
.n-logo-subtext {
    font-size: 12pt; 
    letter-spacing: -0.1rem; 
    line-height: 0;
    color: white;
    background: black;
}
</style>

<template>
    <div 
    class="n-logo-container"
    :style="{ 
        '--n-logo-font-size': small ? '20pt' : '40pt',
        '--n-logo-line-height': small ? '12pt' : '28pt',
        '--n-logo-letter-spacing': small ? '-0.5rem' : '-0.75rem'
    }">
        <span :class="flat ? 'bg-white' : 'bg-yellow-lighten-4'">nelsondev<br></span>
        <span :class="flat ? 'bg-white' : 'bg-pink-lighten-4'">nelsondev</span>
        <span :class="flat ? 'bg-white' : 'bg-teal-accent-1'"><br>nelsondev</span>
        <span v-show="!small" class="n-logo-subtext"><br>Website design & creation.</span>
    </div>
</template>