<script>
// import axios from 'axios';
// import ProjectCard from "./components/ProjectCard.vue"
import TheHeader from "./components/TheHeader.vue"
export default {

  components: {
    // ProjectCard,
    TheHeader,
  },

  data() {
    return {
      // projects: [],
      // pagination: {}

    };
  },

  methods: {
    // fetchData(url) {
    //   axios.get(url ?? 'http://127.0.0.1:8000/api/projects').then((response) => {
    //     this.projects = response.data.results.data;


    //     //cancelliamo la chiave results che abbiamo già salvato e salviamo i dati nella paginazione

    //     delete response.data.results.data;
    //     this.pagination = response.data.results;
    //     console.log(response);
    //   })

    // }

  },

  mounted() {
    // this.fetchData(); //metto nel mounted in modo da avere i dati già all'apertura della pagina

  }


}
</script>

<template>
  <body>


    <header>
      <TheHeader :project="project" />
    </header>
    <main>
      <!-- <div class="container p-5">
        <div class="row">
          <div v-for="project in projects" :key="project.id" class="col-md-4">
            <ProjectCard :project="project" />
          </div>
        </div>
        <a v-for="pageLink in pagination.links" class="btn btn-link" @click="fetchData(pageLink.url)"
          v-html="pageLink.label"></a>
      </div> -->

      <router-view></router-view>
    </main>
  </body>
</template>

<style scoped lang="scss">
body {
  background-color: #57838C;
  height: 900px;
  color: white;
}
</style>
