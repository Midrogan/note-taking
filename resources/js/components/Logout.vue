<template>
    <button @click.prevent="logout" type="button" value="logout" class="btn btn-primary shadow-sm">Log Out</button>
</template>

<script>
    export default {
        name: "logout",

        methods: {
            logout() {
                axios.post('/logout')
                .then(response => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'index'})
                    console.log(response);
                })  
            },
        }
    };
</script>