<script setup>
import NWarning from './components/NWarning.vue'
import NMenu from '@/components/NMenu.vue'
import NLanding from '@/components/NLanding.vue'
import NDesign from '@/components/NDesign.vue'
import NContact from '@/components/NContact.vue'
import NFooter from '@/components/NFooter.vue'
</script>

<template>
	<v-app>
		<v-main>
			<n-warning></n-warning>
			<n-menu></n-menu>
			<n-landing></n-landing>
			<n-design></n-design>
			<n-contact></n-contact>
			<n-footer></n-footer>
		</v-main>
	</v-app>
</template>