<template>
    <div class="">
        Workspace
    </div>
    <button @click.prevent="logout" type="button" value="logout" class="btn btn-primary shadow-sm">Log Out</button>
</template>

<script>
    export default {
        name: "workspace",
        mounted() {
            this.getData()
        },

        methods: {
            getData() {
                axios.get('/api/v1/workspaces')
                .then(response => {
                    console.log(response);
                })              
            },

            logout() {
                axios.post('/logout')
                .then(response => {
                    this.$router.push({name: 'index'})
                    console.log(response);
                })  
            }
        }
    };
</script>