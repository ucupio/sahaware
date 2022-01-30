<template>
  <div class="article-list">
    <BoxArticle :articles="articles" :header="false"/>
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
      const data = axios.get('http://localhost:3001/api/article?size=9&number=1')
      const result = await data
      result.data.data.forEach((el) =>{
        this.articles.push(el)
      })
    }
  }
}
</script>

<style>

</style>