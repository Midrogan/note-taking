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
                            <h1 class="text-center fw-bold">Register</h1>
                            <h5 class="text-center fw-bold text-muted">Hello there!</h5>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Name</label>
                            <input v-model="name" type="email" placeholder="Enter name" class="form-control">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Email</label>
                            <input v-model="email" type="email" placeholder="Enter email" class="form-control">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password</label>
                            <input v-model="password" type="password" placeholder="Enter password" class="form-control mb-2">
                            <input v-model="password_confirmation" type="password" placeholder="Password confirm" class="form-control">
                        </div>
                        <div class="mb-2">
                            <button @click.prevent="signup" type="submit" value="signup" class="form-control btn btn-dark shadow-sm">Sign Up</button>        
                        </div>
                        <div class='text-center'>Already have an account? <router-link :to="{ name: 'login' }" type="button" class="link-dark">Log In</router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LogoDarkMedium from "../components/LogoDarkMedium.vue";

    export default {
        name: "signup",

        components: {
            LogoDarkMedium
        },

         data() {
            return {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }
        },

        methods: {
            signup() {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/register', {
                        name: this.name, 
                        email: this.email, 
                        password: this.password, 
                        password_confirmation: this.password_confirmation
                        })
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