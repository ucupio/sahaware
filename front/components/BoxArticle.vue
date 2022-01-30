<template>
  <div class="box-article">
    <div v-if="header" class="header-article">
      <p>Article</p>
    </div>
    <div class="article-container">
      <CardArticle v-for="(article, index) in articles" :key="index" :article="article"/>
    </div>
  </div>
</template>

<script>
import CardArticle from './CardArticle'
export default {
  name: 'BoxArticle',
  components: { CardArticle },
  props: ['articles', 'header']
}
</script>

<style lang="scss" scoped>
.box-article {
  display: flex;
  flex-direction: column;
  padding: 80px 243px;
  width: 100%;
  @media (max-width: 584px){
    padding: 0px;
  }
}
.article-container {
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 100%;
  flex-wrap: wrap;
  margin: 12px;


  @media (min-width: 584px) {
    flex-direction: row;
  }
}

.header-article {
  width: 100%;
  margin-bottom: 48px;
  @media (max-width: 584px){
    margin: 32px 0px 36px;
  }
}

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #000000;
}


</style>