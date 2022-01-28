<template>
  <div class="home">
    <Header />
    <Hero/>
    <BoxArticle/>
    <Footer/>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import Header from '../components/Header'
import BoxArticle from '../components/BoxArticle'
import Footer from '../components/Footer'

export default {
  name: 'IndexPage',
  components: { Hero, Header, BoxArticle, Footer }
}
</script>
