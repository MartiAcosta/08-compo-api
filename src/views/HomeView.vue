<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ iroman }}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIroman">Cambiar iroman</button>
    <button @click="changeHulk">Cambiar hulk</button>
   

    <h3> Iroman: {{ iromanIsAlive }}</h3>
    <h3> Hulk: {{ hulkIsAslive }}</h3>
    <button @click="changeStatus">Cambiar status</button>
  </div>
</template>

<script>
import { ref } from 'vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  
  setup() {

    const iroman = ref({ name: 'Tony', age: 50})
    const hulk = ref({ name: 'Bruce', age: 50})
    
    const iromanIsAlive = ref(false)
    const hulkIsAslive = ref(true)

    const changeStatus = () => {
      iromanIsAlive.value = !iromanIsAlive.value
      hulkIsAslive.value = !hulkIsAslive.value
    }

    return {
      iroman,
      hulk,
      iromanIsAlive,
      hulkIsAslive,
      changeStatus,

      changeIroman: () => {
        iroman.value.name = 'Tony Stark',
        iroman.value.age = 45
      },

      changeHulk: () => {
        hulk.value.name = 'Bruce Banner',
        hulk.value.age = 45
      }

    }
  }
}
</script>
