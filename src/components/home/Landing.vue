<template>
    <v-parallax
	src="@/assets/1.svg"
	class="align-center justify-center py-16"
	scale="0.8"
	>		
		<v-container>
			<v-row>
				<v-col cols="6">
					<h6 
					style="
						font-size: 22pt;
					"
					class="text-primary"
					>Lorem ipsum dolor sit amet.</h6>
					<h1 
					style="
						font-size: 48pt; 
						word-break:break-all; 
						letter-spacing: 4px; 
						font-weight: 600
					" 
					class="font-serif"
					>
						<span>
							<span class="bg-primary text-background">Developer,</span><br>
							<span class="h1-gradient">Designer,</span><br>
							<span class="h1-gradient">Artist.</span><br>
						</span>
					</h1>
				</v-col>
				<v-col cols="6" class="d-flex align-end">
					<h1 
					style="
						font-size: 48pt; 
						word-break:break-all; 
						letter-spacing: 4px; 
						font-weight: 600;
					" 
					class="h1-gradient font-serif"
					>
						<span>
							Nelson<br>
							McCullough
						</span>
					</h1>
				</v-col>
			</v-row>
		</v-container>
	</v-parallax>
</template>

<style scoped>
.h1-gradient {
	background-image: linear-gradient(90deg, #A97577,  #9CBF9F);
	background-clip: text;
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
}
.h1-gradient-reverse {
	background-image: linear-gradient(90deg, #9CBF9F, #A97577);
	background-clip: text;
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
}
</style>