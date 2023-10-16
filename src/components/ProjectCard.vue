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
        getImageUrl(project) {
            return `http://127.0.0.1:8000/storage/${project.image}`
        }

    },
};
</script>


<template>
    <div class="project-card card mb-3">
        <img :src="getImageUrl(project)" class="card-img-top" alt="Project Image">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.github_url" class="btn btn-primary">GitHub Repository</a>
        </div>
    </div>
</template>
  

  
<style scoped></style>
  