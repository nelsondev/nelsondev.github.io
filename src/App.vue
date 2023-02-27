<template>
	<v-app>
		<v-main>
			<v-toolbar
			elevation="0"
			color="transparent"
			style="position: fixed; z-index: 99"
			>
				<!-- <v-app-bar-nav-icon rounded="0" color="primary"></v-app-bar-nav-icon> -->
				<v-toolbar-items>
					<v-btn color="" class="font-brand font-weight-bold" size="x-large">Logo</v-btn>
				</v-toolbar-items>
				<v-spacer></v-spacer>
				<v-toolbar-items>
					<v-btn color="" class="font-brand font-weight-bold" size="x-large">Portfolio</v-btn>
					<v-btn color="" class="font-brand font-weight-bold" size="x-large">Pricing</v-btn>
					<v-btn color="" class="font-brand font-weight-bold" size="x-large">Contact</v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script setup>
</script>

<style>
.font-slab {
	font-family: 'Roboto Slab', serif !important;
}
.font-brand {
	font-family: 'Nunito', sans-serif;
}
.font-serif {
	font-family: 'Arbutus Slab', serif;
}
@keyframes blinker {
	50% {
		opacity: 0;
	}
}
.animation-blink {
  animation: blinker 0.5s steps(1) infinite;
}
</style>