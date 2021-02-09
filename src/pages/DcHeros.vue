<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Welcome to herros {{this.herosCount}}</h1>
    <ul>
      <li class="flex justify-between" v-for="(hero, index) in dcHeros" v-bind:key="hero.name">
        <div>
          {{hero.name}}
        </div>
        <button @click="remove(index)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input class="border rounded-lg" v-model="newHero" placeholder="Enter new hero name!"
        ref="newHeroRef"/>
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white" type="submit">Add Herro</button>
    </form>
  </div>
</template>


<script>
  import {ref, onMounted, computed } from "vue";
  export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref ([
        {name: 'Hero1'},
        {name: 'Hero2'},
        {name: 'Hero3'},
        {name: 'Hero4'}
      ]);

    onMounted( () => {
      newHeroRef.value.focus();
    });

    const herosCount = computed(
      {
        get: () => dcHeros.value.length        
      }
    );

    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
    }

    function addHero() {
      
      if ( newHero.value !== " ") {
        console.log("test");
        dcHeros.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }
    return { dcHeros, newHero, remove, addHero, newHeroRef, herosCount };
  }
}
</script>

<style>

</style>
