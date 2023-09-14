import { ref } from "vue"


const useCounter = () => {
    const counter = ref(5)

    return {
        counter,
        decrement: () => counter.value--,
        increment: () => counter.value++
    }
}


export default useCounter;