<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Welcome to herros {{this.herosCount}}</h1>
    <p v-if="isShowing" v-once>{{count}}</p>
    <ul>
      <li class="flex justify-between" v-for="(hero, index) in dcHerro" v-bind:key="hero.name">
        <div>
          {{hero.name}}
        </div>
        <button @click="remove(index)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input class="border rounded-lg" v-model="newHerro"/>
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white" @click="addHero">Add Herro</button>
    </form>
  </div>
</template>


<script>
  export default {
computed: {
    herosCount(){
      return this.dcHerro.length;
    },
    randC(){
      return Math.random();
    },
    fullName: {
      get(){
        return `Full name is ${this.firstname} ${this.lastName}`;
      },
      set(fullname){
        const values = fullname.split(" ");
        this.firstname = values[0];
        this.lastName = values[1];
      }
    }
  },
  data(){
    return {
      newHerro: 'test',
      dcHerro: [
        {name: 'Hero1'},
        {name: 'Hero2'},
        {name: 'Hero3'},
        {name: 'Hero4'}
      ],
    };
  },
  methods: {
    addHero(){
      if(this.newHerro !== ''){

        this.dcHerro.push({name: this.newHerro});
      }
    },
    remove(index){
      console.log('test' +  index);
      this.dcHerro = this.dcHerro.filter((hero, i) => i != index);
    },
    randM(){
      return Math.random();
    },
    setFullName(){
      this.fullName = 'Test Test';
    }
  },

}
</script>

<style>

</style>
