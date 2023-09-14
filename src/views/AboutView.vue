import { default } from './HomeView.vue';
<template>
  <div class="about">
    <h1>{{title}}</h1>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>

<script>
import { ref } from 'vue'
  export default {
    name: 'aboutView',
  

    setup() {
      const title = ref('About View')

      return {
        title,

        changeTitle: () => {
          title.value = 'New about'
        }
      }
    }
  }
</script>