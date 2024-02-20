<template>
  <div>Connexion réussie, veuillez patienter...</div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get('access_token');

  if (accessToken) {
    console.log('Access Token:', accessToken);
    localStorage.setItem('accessToken', accessToken);
  } else {
    console.error('Erreur lors de la connexion.');
  }
});
</script>
