<template>
  <div class="footer">
    <span>Copyright © Sahaware Asessment 2021</span>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 80px;

  position: absolute;
  width: 1440px;
  height: 76px;
  left: 0px;
  top: 1497px;

  background: #ED3237;
}

span {
  position: static;
  width: 425px;
  height: 28px;
  left: 80px;
  top: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #FFFFFF;
}
</style>