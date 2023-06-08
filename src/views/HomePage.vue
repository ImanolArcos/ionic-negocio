
<template>
	  <router-view />
	<ion-page style="--ion-background-color: #3FF0ED;">
		
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title class="ion-text-center">Login</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
		
				<div class="Nombre">
				
				<ion-item >
					<ion-title class="ion-text-center">Cafeteria Cafe en la Nuve</ion-title>
				
					</ion-item>
				</div>
			<div class="container">
				
		    <ion-item >
				<img class="centrar-imagen" src="../cafe-americano.png" width="300" height="300" alt="Imagen Cafe">
			
				</ion-item>
			</div>
			
	<ion-button class="google-login-button" @click="iniciarSesionConGoogle">
    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Icon" class="google-icon">
    Iniciar sesión con Google
  </ion-button>

			
		</ion-content>
	
	</ion-page>
</template>



<style scoped>
.google-login-button {
  --background: #fff;
  --color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
}

.google-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>



<style>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
	background-color: #3FF0ED;
}
.Nombre {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10vh;
	background: #fff;
    -webkit-text-fill-color: white;
	
	
}
</style>


<script lang="ts" setup>
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonLabel,
	IonInput,
	IonButton,
	alertController,
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

defineComponent({
	name: 'HomePage',
	components: {
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonItem,
		IonLabel,
		IonInput,
		IonButton,
	},
});




function iniciarSesionConGoogle() {

}
</script>




<style scoped></style>