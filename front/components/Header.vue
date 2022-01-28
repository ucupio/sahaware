<template>
  <div class="header">
    <img src="../assets/imgs/logo.svg" alt="">
    <div class="divider"></div>
    <span> Assesments</span>
    <span> Home </span>
    <span> Article </span>
    <span> Create</span>
    <span>Login</span>

    
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  padding: 20px 80px;
  background: #FFFFFF;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
}

.divider {
  height: 0px;
  width: 21px;  
  border: 1px solid #848688;
  transform: rotate(90deg);
}

span {
  position: static;
  width: 38px;
  height: 16px;
  left: 24px;
  top: 12px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #ED3237;
}
</style>