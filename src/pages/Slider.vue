<template>
<div class="flex flex-wrap w-full">

    <div v-for="(color, index) in sliders" :key="color" class="absolute w-full">
        <transition name="fade">
            <div v-if="currentSlide == index" :class="color" style="height: 350px"></div>
        </transition>
    </div>
    <div class="absolute w-full" style="height: 340px">
        <div class="absolute bottom-0 flex justify-center w-full">
        
        <div v-for="(slider, index) in sliders" 
        @click="makeActive(index)"
        :key="slider" 
        :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'" class="w-4 h-4 rounded-full mx-2 bg-black"></div>
        </div>
    </div>
  <!-- <div class="my-10 flex w-full">
      <transicion name="fade">
          <h1 class="m-auto">Slider Caroucel</h1>
      </transicion>     
      <button class="rounded px-2 border" @click="isTitleShowing = !isTitleShowing">Text Faded</button>
  </div> -->
</div>
</template>

<script>
export default {
    data(){
        return{
            currentSlide: 1,
            sliders: [
                'bg-blue-600',
                'bg-yellow-600',
                'bg-teal-600',
            ],
            interval: "",
            isTitleShowing: false
        }
    },
    methods: {
        makeActive(index){
            this.currentSlide = index;
        }
    },
    mounted(){
        this.interval = setInterval(() => {
            this.currentSlide == 2 ? this.currentSlide = 0 : this.currentSlide ++;
            }, 
            2000
        );
        
    },
    beforeUnmounted(){
        clearInterval(this.interval);
    }
}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
    transition: all 1s ease;
    }
    .fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
    }
    .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
    }
</style>