<template>
    <div class="container-fluid d-flex justify-content-center" style="height: 100vh;">
        <div class="row mt-5">
            <div class="col mt-5">
                <div class="card rounded-3 shadow-sm" style="width: 30rem;">
                    <div class="card-body" style="padding: 2rem 3rem;">
                        <router-link :to="{ name: 'index' }">
                            <LogoDarkMedium class="ms-3 position-absolute top-0 start-50 translate-middle"></LogoDarkMedium>
                        </router-link>
                        <div class="mb-3">
                            <h1 class="text-center fw-bold">Login</h1>
                            <h5 class="text-center fw-bold text-muted">Welcome back!</h5>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Email</label>
                            <input v-model="email" type="email" placeholder="Enter email" class="form-control">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password</label>
                            <input v-model="password" type="password" placeholder="Enter password" class="form-control">
                        </div>
                        <div class="mb-2">
                            <button @click.prevent="login" type="submit" value="login" class="form-control btn btn-dark shadow-sm">Log In</button>
                            
                        </div>
                        <div class='text-center'>Don't have an account? <router-link :to="{ name: 'signup' }" type="button" class="link-dark">Sign Up</router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LogoDarkMedium from "../components/LogoDarkMedium.vue";

    export default {
        name: "login",

        components: {
            LogoDarkMedium
        },

        data() {
            return {
                email: null,
                password: null,
            }
        },

        methods: {
            login() {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/login', {email: this.email, password: this.password})
                    .then(response => {
                        localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({name: 'workspace'})
                        console.log(response)
                    })
                    .catch(err => {
                        console.log(err.response);
                    })
                });                
            }
        }
    };
</script>