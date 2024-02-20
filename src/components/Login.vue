<template>
  <div>
    <button @click="loginWithDeezer">Se connecter avec Deezer</button>
  </div>
</template>

<script setup>
import {loginWithDeezer} from "@/services/deezerService.js";
</script>