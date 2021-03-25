<template>
<nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white
mx-4 px-4 py-2"> 
    <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">{{item.title}}</router-link>
    <!-- Emit custom event with $emit on button click  -->
    <!-- Only thos component could do something with this event -->
    <button v-if="store.isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">Login</button>
</nav>
</template>

<script>
    import firebase from "../utilities/firebase"
    export default {
        data(){
            return {
                list: [
                    {title: "Dc Heros", to: "/dc-heros" },
                    {title: "Calendar", to: "/calendar" },
                    {title: "Markdown", to: "/markdown" },
                    {title: "Slider Caroucel", to: "/slider" },
                    {title: "Calculator", to: "/calculator" },
                    {title: "Modal", to: "/modal-reusable" },
                    {title: "Chat", to: "/chat" },
                ]
            };

        },
        computed: {
            isLoggedIn() {
                return this.$store.isLoggedIn;
            }
        },
        methods: {
            logout() {
                firebase.auth().signOut()
                .then(() => {
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>