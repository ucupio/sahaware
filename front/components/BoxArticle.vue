<template>
  <div class="box-article">
    <h2>Article</h2>
    <div class="article-container">
      <CardArticle/>
      <CardArticle/>
      <CardArticle/>
    </div>
    
  </div>
</template>

<script>
import CardArticle from './CardArticle'
export default {
  name: 'BoxArticle',
  components: { CardArticle }
}
</script>

<style lang="scss" scoped>
.box-article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 100%;
  height: 437px;
  margin: auto 80px;
}
.article-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;

  position: static;
  width: 954px;
  height: 333px;
  left: 0px;
  top: 104px;
}

h2 {
  position: static;
  width: 144px;
  height: 56px;
  left: 405px;
  top: 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
}
</style>