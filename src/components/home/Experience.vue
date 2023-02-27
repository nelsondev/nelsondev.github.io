<template>
    <div class="mt-12">
		<v-img
		src="@/assets/line.svg"
		style="transform: translateY(1px)"
		>
		</v-img>
	</div>
	<div style="background: #141414" class="pb-16">
		<v-container class="d-flex">
			<div class="ma-auto d-flex">
				<h1 class="font-serif" style="font-size: 32pt">Experience</h1>
				<v-img src="@/assets/star.svg" height="28" width="28" class="mx-4"></v-img>
			</div>
		</v-container>
		<v-container style="position: relative;">
			<v-img 
			src="@/assets/bubbles.svg" 
			style="
				position: absolute;
				width: 128px;
				height: 128px;
				top: 0;
			"
			></v-img>
			<v-img 
			src="@/assets/bubbles.svg" 
			style="
				position: absolute;
				width: 128px;
				height: 128px;
				bottom: 0;
				right: 0;
			"
			></v-img>
			<v-row>
				<v-col cols="4" class="d-flex align-center justify-center"><v-img src="@/assets/peloton.svg" max-width="150"></v-img></v-col>
				<v-col cols="4" class="d-flex align-center justify-center"><v-img src="@/assets/cleano2.svg" max-width="150"></v-img></v-col>
				<v-col cols="4" class="d-flex align-center justify-center"><v-img src="@/assets/borough.svg" max-width="150"></v-img></v-col>
				<v-col cols="4" class="d-flex align-center justify-center"><v-img src="@/assets/inoahguy.svg" max-width="150"></v-img></v-col>
				<v-col cols="4" class="d-flex align-center justify-center"><v-img src="@/assets/jesseatter.svg" max-width="150"></v-img></v-col>
			</v-row>
			<v-row>
				<v-col class="d-flex">
					<v-spacer></v-spacer>
					<v-btn
					color="primary"
					variant="outlined"
					size="x-large"
					width="200px"
					height="80px"
					rounded="0"
					class="ma-auto font-brand font-weight-bold"
					>Portfolio</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>