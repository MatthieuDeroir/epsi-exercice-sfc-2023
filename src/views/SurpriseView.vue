<template>
  <div>
    <Login />
    <h1>Surprise Me!</h1>
    <music-player v-if="track" :track="track"></music-player>
    <button @click="chargerMorceauAleatoire">Découvrir un autre morceau</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MusicPlayer from '@/components/MusicPlayer.vue';
import Login from "@/components/Login.vue";
import { getRandomTrack } from '@/services/getRandomTrack';
const track = ref(null);

async function chargerMorceauAleatoire() {
  track.value = await getRandomTrack();
}



onMounted(chargerMorceauAleatoire);
</script>


