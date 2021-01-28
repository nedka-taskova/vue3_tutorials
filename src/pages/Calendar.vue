<template>
    <div class="m-auto">
        <h1 class="text-xl my-2 text-center">Vue  calendar</h1>
        <section class="mx-2 flex justify-between">
            <h2 class="font-bold">{{ currentMonthName }}</h2>
            <h2 class="font-bold">{{ currentYear }}</h2>
        </section>
        <section class="flex my-2">
            <p class="text-center" style="width: 14.28%" v-for="day in days" 
                :key="day"> {{ day }}
            </p></section>
        <section class="flex flex-wrap">
            <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
            <p class="text-center" style="width: 14.28%" v-for="num in daysInMoth()" :key="num"
                :class="currentDateClass(num)"
            >{{ num }}</p>
        </section>
        <section class="flex justify-between my-4">
            <button class="px-2 border rounded" v-on:click="prev">Prev</button>
            <button class="px-2 border rounded" v-on:click="next">Next</button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
      return {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        currentDay: new Date().getDate(),
        days: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']
      }
    },
    methods: {
        daysInMoth(){
            return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        },

        startDay(){
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },

        next(){
            if(this.currentMonth === 11){
                this.currentYear++;
                this.currentMonth = 0;
            }
            else{
                this.currentMonth++;
            }         
        },

        prev(){
            if(this.currentMonth === 0){
                this.currentYear--;
                this.currentMonth = 11;
            }
            else{
                this.currentMonth--;
            }
        },
        currentDateClass(num) {
            const calendarFullDateString = new Date(this.currentYear, this.currentMonth, num).toDateString();
            const currentFullDateString = new Date().toDateString();
            return calendarFullDateString === currentFullDateString ? 'text-yellow-600' : '';
        }
    },
    computed: {
        currentMonthName(){ 
            return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long'});
        }
    }


}
</script>

<style>

</style>