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
    <div class="my-card project-card card mb-3">
        <img :src="getImageUrl(project)" class="card-img-top" alt="Project Image">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.github_url" class="btn btn-primary d-block ">GitHub Repository</a>
            <div class="badge mt-3" v-for="technology in project.technologies"
                :style="{ backgroundColor: technology.color, borderRadius: '10px', padding: '5px', marginRight: '5px' }">
                <div>
                    {{ technology.name }}
                </div>

            </div>
            <p>{{ project.type.name }}</p>
        </div>
    </div>
</template>
  

  
<style scoped>
.my-card {
    background-color: rgba(255, 255, 255, 0.074);
}
</style>
  