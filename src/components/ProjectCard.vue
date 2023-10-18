<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImageUrl(project) {
            return `http://127.0.0.1:8000/storage/${project.image}`;
        }
    },
};
</script>

<template>
    <div class="my-card project-card card mb-3" style="border-radius: 10px;">
        <img :src="getImageUrl(project)" class="card-img-top" alt="Project Image" style="border-radius: 10px;">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="badges">
                <div class="badge" v-for="technology in project.technologies"
                    :style="{ backgroundColor: technology.color, borderRadius: '10px', padding: '5px', marginRight: '5px' }">
                    {{ technology.name }}
                </div>
            </div>
            <p>{{ project.type.name }}</p>
            <router-link class="fs-1 text-warning" :to="{ name: 'projects.show', params: { slug: project.slug } }"><i
                    class="fa fa-eye"></i></router-link>
        </div>
    </div>
</template>


  

  
<style scoped></style>
  