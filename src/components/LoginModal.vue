<template>
  <section 
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-0 "></section>
  <div class="absolute inset-0">
      <div class="flex h-full">
          <div class="z-30 bg-grey-500 m-auto bg-white p-2 rounded shadow">
              <div class="p-2 border">
                <h1 class="text-xl text-center">Login</h1>
                <GoogleLogin @close-login-from-google="close"/>
                <p class="my-3 text-center">Or</p>
                <form class="p-2 my-2" @submit.prevent="submit">
                    <div class="m-4">
                        <label>Email or Username</label>
                        <input ref="mailField" v-model="email" class="rounded shadow p-2 w-full" placeholder="Enter you email or username"/>
                    </div>
                    <div class="m-4"> 
                        <label>Password</label>
                        <input  v-model="password" class="rounded shadow p-2 w-full" type="password" placeholder="Enter your password"/>
                    </div>
                    <div class="m-4"> 
                        <button type="submit"
                            class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white">
                            <span v-if="!isLoading">Login</span>
                            <span v-else>waiting</span>
                        </button>
                    </div>
                </form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase"
import GoogleLogin from "../components/Login/GoogleLogin"

export default {
    components: { GoogleLogin},
    data(){
        return {
            email: '',
            password: '',
            isLoading: false,
        }
    },
    methods: {
        submit() {
            console.log('Email :' + this.email);
            this.isLoading = true;
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then( res => {
                    console.log('Login User: ' + res);
                    this.email = '';
                    this.password = '';
                    this.isLoading = false;
                    this.close();
            })
            .catch(err => {
                console.log(err);
                this.isLoading = false;
            });
        },

        close() {
            this.$emit('close-login');
        },
        
    },
    mounted(){
        this.$refs.mailField.focus();
    }
}
</script>

<style>

</style>