<template>
  <section class="flex w-full">
      <div class="m-auto">
        <h1 class="text-2xl text-center">
            Calculator
        </h1>
        <p class="text-3xl text-right mt-10 mb-2 h-16 w-40 overflow-x-auto box-border" style="direction:rtl"
            >{{currentNumber}}</p>
        <div class="h-10">
            <small v-if="operation">{{previousNumber}} {{operation}} {{currentNumber}}</small>
        </div>
        <div class="grid grid-cols-4 gap-1">
            <button @click="pressed('1')" class="p-2 h-10 w-10 border rounded shadow">1</button>
            <button @click="pressed('2')" class="p-2 h-10 w-10 border rounded shadow">2</button>
            <button @click="pressed('3')" class="p-2 h-10 w-10 border rounded shadow">3</button>
            <button @click="pressed('+')" class="p-2 h-10 w-10 border rounded shadow">+</button>
            <button @click="pressed('4')" class="p-2 h-10 w-10 border rounded shadow">4</button>
            <button @click="pressed('5')" class="p-2 h-10 w-10 border rounded shadow">5</button>
            <button @click="pressed('6')" class="p-2 h-10 w-10 border rounded shadow">6</button>
            <button @click="pressed('-')" class="p-2 h-10 w-10 border rounded shadow">-</button>
            <button @click="pressed('7')" class="p-2 h-10 w-10 border rounded shadow">7</button>
            <button @click="pressed('8')" class="p-2 h-10 w-10 border rounded shadow">8</button>
            <button @click="pressed('9')" class="p-2 h-10 w-10 border rounded shadow">9</button>
            <button @click="pressed('*')" class="p-2 h-10 w-10 border rounded shadow">*</button>
            <button @click="pressed('0')" class="p-2 h-10 w-10 border rounded shadow">0</button>
            <button @click="pressed('C')" class="p-2 h-10 w-10 border rounded shadow">C</button>
            <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
            <button @click="pressed('/')" class="p-2 h-10 w-10 border rounded shadow">/</button>
        </div>
      </div>
  </section>
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue'
export default {
    setup(){
        const operations = ['+', '-', '/', '*'];
        const numbers = ['0','1', '2','3','4','5','6','7','8','9','0'];
        const currentNumber = ref("");
        const previousNumber = ref("");
        const operation = ref("");
        
        function pressed(value){
            if(value === '=' || value === 'Enter') calculate();
            else if(value === 'C') clear();
            else if(operations.includes(value)) applyOperations(value) 
            else if(numbers.includes(value))appendNumber(value);
        }

        function appendNumber(value){
            currentNumber.value = currentNumber.value + value;
        }

        function calculate(){
            if(operation.value === '*') multiply();
            else if(operation.value === '/') divide();
            else if(operation.value === '+') sum();
            else if(operation.value === '-') subtract();
            previousNumber.value = "";
            operation.value = "";
        }

        function multiply () {
            currentNumber.value =  previousNumber.value * currentNumber.value;
        }

        function divide() {
            currentNumber.value =  previousNumber.value / currentNumber.value;
        }

        function sum() {
            currentNumber.value =  +previousNumber.value + +currentNumber.value;
        }

        function subtract() {
            currentNumber.value =  previousNumber.value - currentNumber.value;
        }
        function applyOperations(value){
            calculate();
            previousNumber.value = currentNumber.value;
            currentNumber.value="";
            operation.value = value;
        }

        function clear(){
            previousNumber.value = '';
            currentNumber.value = '';
            operation.value = '';
        }

        const handleKeydown = (e) => pressed(e.key);
        onMounted(() => window.addEventListener("keydown", handleKeydown));
        onUnmounted(() => window.removeEventListener("keydown", handleKeydown));

        return {currentNumber, previousNumber, operation, pressed}
    }
}
</script>

<style>

</style>