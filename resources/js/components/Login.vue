<template>
    <div class="container-fluid d-flex justify-content-center" style="height: 100vh;">
        <div class="row">
            <div class="col mt-5">
                <div class="card rounded-3 border-0 shadow-sm" style="width: 30rem;">
                    <div class="card-body" style="padding: 2rem 3rem;">
                        <div class="mb-3">
                            <h1 class="text-center fw-bold">Log In</h1>
                            <h4 class="text-center fw-bold">Welcome back!</h4>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Email</label>
                            <input v-model="email" type="email" placeholder="Enter your email" class="form-control">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password</label>
                            <input v-model="password" type="password" placeholder="Enter password" class="form-control">
                        </div>
                        <div class="">
                            <button @click.prevent="login" type="submit" value="login" class="btn btn-primary shadow-sm">Log In</button>
                            <router-link :to="{ name: 'signup' }" type="button" class="btn btn-link">Sign Up</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",

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
                        console.log(response);
                    })
                    .catch(err => {
                        console.log(err.response);
                    })
                });                
            }
        }
    };
</script>