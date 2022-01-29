<template>
  <div class="card-article">
    <img :src="article.image" alt="Ok">
    <div class="card-content">
      <h3>{{article.title}}</h3>
      <p>{{article.short_description}}</p>
    </div>
  </div>
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
  padding: 0px;
  width: 250px;
  height: 333px;
  margin: 12px;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 100%;
  height: 112px;
  left: 0px;
  top: 221px;
}

img {
  position: static;
  width: 100%;
  height: 205px;
  left: 0px;
  top: 0px;
}
</style>