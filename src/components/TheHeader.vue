<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        };
    },

    methods: {


    },
};
</script>

<template>
    <nav class="navbar navbar-expand-md shadow-sm">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="">
                <div class="logo_github text-white">
                    <i class="fab fa-github" style="font-size: 40px;"></i>
                </div>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav me-auto gap-3">
                    <li class="nav-item">
                        <router-link class="nav-link text-white" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" :to="{ name: 'progetti' }">Progetti</router-link>
                    </li>
                </ul>


                <ul class="navbar-nav ml-auto">


                    <li class="nav-item">
                        <a class="nav-link text-white" href="http://127.0.0.1:8000/login" target="_blank">Area Riservata</a>
                    </li>


                    <!-- <li class="nav-item">
                        <a class="nav-link" href="http://127.0.0.1:8000/register">Register</a>
                    </li> -->

                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss"></style>
