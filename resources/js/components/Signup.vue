<template>
  <div class="container-fluid d-flex justify-content-center" style="height: 100vh;">
        <div class="row">
            <div class="col mt-5">
                <div class="card rounded-3 border-0 shadow-sm" style="width: 30rem;">
                    <div class="card-body" style="padding: 2rem 3rem;">
                        <div class="mb-3">
                            <h1 class="text-center fw-bold">Sign Up</h1>
                            <h4 class="text-center fw-bold">Hello there!</h4>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Name</label>
                            <input v-model="name" type="email" placeholder="Enter your name" class="form-control">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Email</label>
                            <input v-model="email" type="email" placeholder="Enter your email" class="form-control">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password</label>
                            <input v-model="password" type="password" placeholder="Enter password" class="form-control mb-2">
                            <input v-model="password_confirmation" type="password" placeholder="Password confirm" class="form-control">
                        </div>
                        <div class="">
                            <button @click.prevent="signup" type="submit" value="signup" class="btn btn-primary shadow-sm">Sign Up</button>
                            <router-link :to="{ name: 'login' }" type="button" class="btn btn-link">Log In</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "signup",

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