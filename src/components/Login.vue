<template>
  <div>

    <button @click="loginWithDeezer">Se connecter avec Deezer</button>
  </div>
</template>

<script setup>
import {loginWithDeezer} from "@/services/deezer.js";
</script>