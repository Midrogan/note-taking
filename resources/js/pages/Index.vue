<template>
    <div class="p-4">
        Index
        <router-link v-if="!token" :to="{ name: 'signup' }" type="button" class="btn btn-outline-dark">Sign Up</router-link>
        <router-link v-if="!token" :to="{ name: 'login' }" type="button" class="btn btn-dark">Log In</router-link>
    </div>
</template>

<script>
    export default {
        name: "index",

        mounted() {
            this.getToken()
        },

        data() {
            return {
                token: null
            }
        },

        methods: {
            getToken() {
                this.token = localStorage.getItem('x_xsrf_token')
            }
        },
    };
</script>
