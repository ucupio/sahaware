<template>
  <div class="hero">
    <img src="../assets/imgs/hero.png" alt="Hero">
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 100%;
}
img {
  @media (min-width: 584px) {
    padding: 80px;
    height: 100%;
  }
  padding: 0px;
  width: 100%;
  height: 584px;
  object-fit: cover;
}

</style>