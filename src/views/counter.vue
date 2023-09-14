<template>
  <h1>Counter Vue</h1>
  <h2>{{ counter }}</h2>
  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>
  
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
    name: 'counter',
    props: {},
    emits: [],

    setup() {
        const { counter, increment, decrement } = useCounter()

        return {
            counter, 
            increment, 
            decrement
        }
    }
}
</script>

<style>

</style>