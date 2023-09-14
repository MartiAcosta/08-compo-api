<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>
    <Modal v-if="isOpen" 
        title="Hola mundo"
        @on:close="closeModal">
        <!-- <h2>Titulo del modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium magnam ipsum, quaerat voluptate facere sequi iusto dolorem inventore ipsa in error corporis modi provident qui eius facilis rerum repellat.</p>
        <button>Salir</button> -->
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae repellendus dolorem enim, praesentium eos, sequi consequatur officia fuga tenetur commodi ea libero, reprehenderit architecto quisquam dignissimos animi nostrum. Expedita.</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
        <template v-slot:exposed="{newTitle}">
            <h2>{{ newTitle }}</h2>
        </template> 
    </Modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

export default {
    components: { Modal },
    setup(){
        const isOpen = ref(false)
        return {
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style scoped>

</style>