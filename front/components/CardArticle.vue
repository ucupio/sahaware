<template>
  <div class="card-article">
    <img src="" alt="Ok">
    <div class="card-content">
      <h3>Judul Artikel</h3>
      <p>Isi artikel</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card-article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 302px;
  height: 333px;
  left: 0px;
  top: 0px;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 302px;
  height: 112px;
  left: 0px;
  top: 221px;
}

img {
  position: static;
  width: 302px;
  height: 205px;
  left: 0px;
  top: 0px;
}
</style>