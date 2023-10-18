<script>

export default {


}
</script>

<template>
    <div class="homepage">
        <div class="header">
            <h1 class="name">Ivano Pisaniello</h1>
            <p class="tagline">FullStuck Web Developer</p>
        </div>
        <div class="about">
            <h2>Chi Sono</h2>
            <p>
                Benvenuto nel mio portfolio! Sono un appassionato sviluppatore web creativo e innovativo. Nel mio portfolio
                troverai una vasta gamma di progetti che riflettono la mia dedizione e la mia passione.
            </p>
        </div>
        <div class="contact">
            <h2>Contattami</h2>
            <p>
                Se desideri collaborare o avere ulteriori informazioni sui miei progetti, non esitare a contattarmi.
            </p>
            <router-link class="nav-link" :to="{ name: 'contacts' }">Contattami</router-link>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
.homepage {
    text-align: center;
    padding: 20px;
}

.name {
    font-size: 48px;
    font-weight: bold;
    margin: 10px 0;
    color: #007BFF;
}

.tagline {
    font-size: 24px;
    color: #333;
    margin: 10px 0;
}

.about {
    margin: 30px 0;
}

.about h2 {
    font-size: 24px;
    font-weight: bold;
}

.about p {
    font-size: 18px;
    line-height: 1.4;
}

.contact {
    margin-top: 30px;
}

.contact h2 {
    font-size: 24px;
    font-weight: bold;
}

.contact p {
    font-size: 18px;
    line-height: 1.4;
}

.contact a {
    font-size: 18px;
    text-decoration: none;
    color: #007BFF;
    transition: color 0.3s;
}

.contact a:hover {
    color: #0056b3;
}
</style>
  