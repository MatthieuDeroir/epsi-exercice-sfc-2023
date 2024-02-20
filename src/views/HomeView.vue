<template>
  <div>
    <h1>Bienvenue sur Surprise Me!</h1>
    <p>Laissez nous vous surprendre...</p>
    <button @click="decouvrir">Découvrir</button>
  </div>
</template>

<script>
export default {
  methods: {
    decouvrir() {
      this.$router.push({ name: 'surprise' });
    }
  }
};
</script>
