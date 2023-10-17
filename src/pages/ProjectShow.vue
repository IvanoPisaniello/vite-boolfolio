<script>
import axios from "axios";


export default {
    data() {
        return {
            project: [],
        };
    },
    methods: {
        fetchData() {

            axios
                .get("http://localhost:8000/api/projects/" + this.$route.params.slug)
                .then((resp) => {
                    this.project = resp.data;
                });
        },
        getImageUrl(project) {
            return `http://127.0.0.1:8000/storage/${project.image}`;
        },

    },
    mounted() {
        this.fetchData();
    },
};
</script>

<template>
    <div class="container">
        <img v-if="project.image" :src="getImageUrl(project)" class="card-img-top" alt="image not found">

        <h1>{{ project.title }}</h1>

        <div class="mb-3" v-if="project.technology">
            Technologie:
            <span class="badge" :style="`background-color: ${project.technology.color}`">{{ post.category.name }}</span>
        </div>

        <div class="d-flex gap-3">
            <span v-for="technology in project.technologies" :key="project.id" class="badge"
                :style="{ backgroundColor: technology.color, borderRadius: '10px', padding: '5px', marginRight: '5px' }">{{
                    technology.name }}</span>
        </div>
        <h5 v-if="project.type">
            {{ project.type.name }}
        </h5>


    </div>
</template>

<style scoped></style>