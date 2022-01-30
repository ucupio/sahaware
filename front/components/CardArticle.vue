<template>
  <NuxtLink class="card-article" :to="{name: 'article-articleid', params: {articleid: article.id}}">
    <div class="image-container">
    <img :src="article.image" alt="Ok">
    </div>
    <div class="card-content">
      <span>{{article.title}}</span>
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
  align-items: flex-start;
  padding: 12px;
  width: 302px;
  height: 333px;
  color: black;
  text-decoration: none;
  @media (max-width: 584px){
    padding: 16px 32px;
    width: 100%;
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px;
  width: 100%;
  height: 112px;
  overflow: none;
}

.image-container {
  width: 100%;
  height: 205px;
  margin-bottom: 16px;
  @media (max-width: 584px){
    width: 100%;
    height: 205px;
    overflow: hidden;
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

span {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 56px;
  height: 56px;
  overflow: hidden;
}

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
}
</style>