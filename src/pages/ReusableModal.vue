<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-usable Modal</h1>
      <Modal v-if="isModal1Open" @close="isModal1Open = false">
        <h1 class="text-red-500">Red Modal</h1>
      </Modal>
      <button @click="isModal1Open = true"  class="border rounded px-2 mx-4 bg-blue-500 shadow" >Open Modal 1</button>

      <Modal v-if="isModal2Open" @close="isModal2Open = false">
        <!-- <h1 class="text-blue-500">Blue Modal</h1> -->
        <template #title>
          Modal 1
        </template>
        <template #body>
          <p>This is the body slot</p>
        </template>
      </Modal>
      <button @click="isModal2Open = true" class="border rounded px-2 mx-4 bg-blue-500 shadow">Open Modal 2</button>
    </div>
  </section>
</template>

<script>
import Modal from "./../components/Modal";
import { ref } from "vue";
export default {
  components: {Modal},

  setup() {
    const isModal1Open = ref(true);
    const isModal2Open = ref(true);

    return {isModal1Open, isModal2Open}
  }
}
</script>

<style>

</style>