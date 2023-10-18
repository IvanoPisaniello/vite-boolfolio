<script>
export default {
}
</script>

<template>
    <div class="homepage">
        <div class="content">
            <div class="left-column">
                <h1 class="name">Ivano Pisaniello</h1>
                <p class="tagline">FullStack Web Developer</p>

                <div class="about">
                    <h2>Chi Sono</h2>
                    <p>
                        Benvenuto nel mio portfolio! Sono un appassionato sviluppatore web creativo e innovativo. Nel mio
                        portfolio troverai una vasta gamma di progetti che riflettono la mia dedizione e la mia passione.
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
            <div class="right-column">

            </div>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
.homepage {
    text-align: left;

    padding: 20px;
}

.content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.left-column {
    width: 60%;

}

.name {
    font-size: 64px;
    font-weight: bold;
    margin: 10px 0;
    color: white;
}

.tagline {
    font-size: 24px;
    color: white;
    margin: 10px 0;
}

.about {
    margin: 30px 0;
}

.about h2 {
    font-size: 24px;
    font-weight: bold;
    color: white;
}

.about p {
    font-size: 18px;
    line-height: 1.4;
    color: white;
}

.contact {
    margin-top: 30px;
}

.contact h2 {
    font-size: 24px;
    font-weight: bold;
    color: white;
}

.contact p {
    font-size: 18px;
    line-height: 1.4;
    color: white;
}

.right-column {
    width: 40%;

    background-color: #333;

}

.contact a {
    font-size: 18px;
    text-decoration: none;
    color: white;
    transition: color 0.3s;
}

.contact a:hover {
    color: #0056b3;
}
</style>
  