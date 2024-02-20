<script setup>
import { onMounted } from 'vue';
import { loginWithDeezer } from '@/services/deezerService';

onMounted(() => {
  loginWithDeezer((error, response) => {
    if (error) {
      console.error('Error logging in:', error);
    } else {
      console.log('Logged in:', response);
      setTimeout(() => {
        window.opener.location.reload();
        window.close();
      }, 10000);
    }
  });
});
</script>