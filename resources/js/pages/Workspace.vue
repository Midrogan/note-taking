<template>
    <div class="p-4">
        Workspace
        <Logout></Logout>
    </div>

</template>

<script>
    import Logout from "../components/Logout.vue";

    export default {
        name: "workspace",

        mounted() {
            this.getData()
        },

        components: {
            Logout
        },

        methods: {
            getData() {
                axios.get('/api/v1/workspaces')
                .then(response => {
                    console.log(response);
                })              
            },
        }
    };
</script>