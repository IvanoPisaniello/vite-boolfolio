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
    <router-link class="custom-link" :to="{ name: 'projects.show', params: { slug: project.slug } }">
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

            </div>
        </div>
    </router-link>
</template>


  

  
<style scoped>
.custom-link {
    text-decoration: none;
    color: inherit;
}

.my-card {
    border-radius: 10px;
    transition: box-shadow 0.3s, transform 0.3s;
    cursor: pointer;
}

.my-card:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
}
</style>
  