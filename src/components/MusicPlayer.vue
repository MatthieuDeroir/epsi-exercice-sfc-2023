<template>
  <div class="music-player">
    <audio ref="audioPlayer" :src="track.preview" controls @loadedmetadata="updateTrackInfo">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    <div v-if="trackInfo">
      <p>Artiste: {{ trackInfo.artist }}</p>
      <p>Titre: {{ trackInfo.title }}</p>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, computed} from 'vue';
import {defineProps} from 'vue';

const props = defineProps({
  track: Object
});

const audioPlayer = ref(null);

const trackInfo = computed(() => {
  if (props.track) {
    return {
      artist: props.track.artist.name,
      title: props.track.title
    };
  }
  return null;
});

watch(() => props.track, (newTrack) => {
  if (newTrack && audioPlayer.value) {
    audioPlayer.value.load();
  }
}, {immediate: true});

function updateTrackInfo() {
  if (props.track && audioPlayer.value) {
    audioPlayer.value.onloadedmetadata = () => {
      console.log('metadata loaded');
    };
  }
}
</script>

<style scoped>
.music-player {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  background-color: var(--color-background);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
