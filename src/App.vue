<script>
export default {

  data() {
    return {
      projects: [],
      pagination: {}

    };
  };

  methods: {
    fetchData() {
      axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
        this.projects = response.data.results;

      })

    }

  },

  mounted() {
    this.fetchData(); //metto nel mounted in modo da avere i dati già all'apertura della pagina

  }


}
</script>

<template>
  <main>
    <div class="container">
      <h1 class="text-center">I MIEI PROGETTI</h1>

    </div>

  </main>
</template>