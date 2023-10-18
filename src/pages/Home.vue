<script>

export default {


}
</script>

<template>
    <div class="homepage">
        <div class="header">
            <h1>Benvenuto nel mio portfolio</h1>
            <p>Ciao, sono Ivano Pisaniello, e questa è la home page del mio portfolio personale.</p>
        </div>
        <div class="about">
            <h2>Chi Sono</h2>
            <p>Sono uno sviluppatore web appassionato di creare progetti creativi e innovativi. Nel mio portfolio troverai
                una varietà di lavori che ho realizzato con impegno e dedizione.</p>
        </div>
        <div class="contact">
            <h2>Contattami</h2>
            <p>Se desideri collaborare o avere ulteriori informazioni sui miei progetti, non esitare a contattarmi.</p>
            <a href="/contatti">Contattami</a>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
.homepage {
    text-align: center;
    padding: 20px;
}

.header {
    margin-bottom: 30px;
}

.header h1 {
    font-size: 36px;
}

.header p {
    font-size: 18px;
}

.about {
    margin: 30px 0;
}

.about h2 {
    font-size: 24px;
}

.about p {
    font-size: 16px;
}

.contact {
    margin-top: 30px;
}

.contact h2 {
    font-size: 24px;
}

.contact p {
    font-size: 16px;
}

.contact a {
    font-size: 14px;
    text-decoration: none;
    color: #007BFF
}
</style>