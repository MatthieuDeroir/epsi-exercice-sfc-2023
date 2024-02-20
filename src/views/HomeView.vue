<template>
  <div>
    <h1>Bienvenue sur Surprise Me!</h1>
    <p>Laissez-nous vous surprendre...</p>
    <Login v-if="!isUserLoggedIn" />
    <button v-if="isUserLoggedIn" @click="decouvrir">Découvrir</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Login from '@/components/Login.vue';

const router = useRouter();
const isUserLoggedIn = ref(false);

watchEffect(() => {


});

function decouvrir() {
  router.push({ name: 'surprise' });
}
</script>
