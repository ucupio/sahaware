/* eslint-disable no-console */
<template>
  <div class="home">
    <Hero/>
    <BoxArticle :articles="articles" :header="true"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      articles: [],
    }
  },
  async fetch (){
    await this.getArticles()
  },
  methods: {
    async getArticles(){
      const data = axios.get('http://localhost:3001/api/article?size=3')
      const result = await data
      result.data.data.forEach((el) =>{
        this.articles.push(el)
      })
    }
  }
}
</script>
