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
  align-items: center;
  padding: 24px 80px;
  width: 100%;
  height: 76px;
  background: #ED3237;
}

span {
  width: 100%;
  height: 16px;
  margin: 24px 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  @media (min-width: 584px){
    width: 425px;
    height: 28px;
    left: 80px;
    top: 24px;
  
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  color: #FFFFFF;
}
</style>