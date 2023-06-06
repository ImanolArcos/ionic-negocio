import App from './App.vue'
<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title class="ion-text-center">Login</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<form @submit.prevent="onSubmit">
				<ion-item>
					<ion-label position="floating">User name</ion-label>
					<ion-input type="text" required v-model="user" />
				</ion-item>
				<ion-item>
					<ion-label position="floating">Password</ion-label>
					<ion-input type="password" required v-model="password" />
				</ion-item>
				
				<ion-button type="submit" expand="block">login</ion-button>
			</form>
		</ion-content>
	</ion-page>
</template>

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

const user = ref();
const password = ref();

const onSubmit = async () => {
  
	if (user.value === 'a' && password.value === 'a') {
		const alert = await alertController.create({
			header: 'Login',
			subHeader: 'Bienvenido    '+user.value,
			message: 'Accediendiendo....',
			buttons: ['OK'],
			
		});

		await alert.present();

 //<ion-button router-link="/Principal">Go to detail</ion-button>

    
 //this.router.navigate("/Principal")
      
	} else alert('datos incorrectos');
};
</script>

<style scoped></style>