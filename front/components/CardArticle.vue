<template>
  <NuxtLink class="card-article" :to="{name: 'article-articleid', params: {articleid: article.id}}">
    <div class="image-container">
    <img :src="article.image" alt="Ok">
    </div>
    <div class="card-content">
      <h3>{{article.title}}</h3>
      <p>{{article.short_description}}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="scss" scoped>
.card-article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  width: 250px;
  height: 333px;
  color: black;
  text-decoration: none;
  @media (max-width: 584px){
    width: 100%;
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 112px;
}

.image-container {
  width: 250px;
  height: 205px;
  @media (max-width: 584px){
    width: 100%;
    height: 205px;
    overflow: hidden;
  }
}

h3 {
  width: 100%;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>