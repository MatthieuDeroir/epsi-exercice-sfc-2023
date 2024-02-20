<template>
  <div>
    <h1>Bienvenue sur Surprise Me!</h1>
    <p>Laissez nous vous surprendre...</p>
    <Login />
    {if (localStorage.getItem('accessToken')) {
      <button @click="decouvrir">Découvrir</button>
    }}
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
export default {
  components: {Login},
  methods: {
    decouvrir() {
      this.$router.push({ name: 'surprise' });
    }
  }
};
</script>
