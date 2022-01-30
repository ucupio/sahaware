<template>
  <Loading v-if="$fetchState.pending" />
  <div v-else class="detail-article">
    
    <h2>{{article.title}}</h2>
    <span>{{article.short_description}}</span>
    <div class="thumbnail">
      <img :src="article.image" alt="">
    </div>
    <div class="text-paragraf" v-html="article.description" ></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "DetailArticle",
  data() {
    return {
      article: null,
    }
  },
  async fetch() {
    await this.getArticle()
  },
  fetchDelay: 1000,
  methods: {
    async getArticle() {
      const data = axios.get(`http://localhost:3001/api/article/${this.$route.params.articleid}`)
      const result = await data
      this.article = result.data
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-article {
  width: 100%;
  padding: 80px 406px;

  @media (max-width: 584px){
    padding: 8px 16px;
  }
}

.thumbnail {
  max-width: 100%;
  height: 100%;
  margin: 20px 0px;
}

.text-paragraf {
  flex: flex;
  gap: 12px;
}

img {
  width: 100%;
  height: 393px;
  object-fit: cover;
}

h2 {
  margin: 20px 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  @media (min-width: 584px){
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
  }
}

span {
  margin: 20px 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 150%;
  @media (max-width: 584px){
    font-size: 18px;
  }
}

::v-deep .text-paragraf > p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 20px;
  @media (max-width: 584px){
    font-size: 18px;
  }
}
</style>