<template>
  <div class="header">
    <NuxtLink to="/"><img class="logo" src="../assets/imgs/logo.svg" alt=""></NuxtLink>
    <div class="nav">
      <NuxtLink to="/" ><span>Home</span></NuxtLink>
      <NuxtLink to="/article/list" ><span> Article </span></NuxtLink>
      <NuxtLink to="/article/create" ><span> Create</span></NuxtLink>
      <span class="login">Login</span>
    </div>
    <img class="menu" src="../assets/imgs/menu.svg" alt="">
    <div class="menu-float"></div>
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
  height: 56px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  @media (min-width: 584px){
    height: 80px;
    padding: 20px 80px;
  }
}

.menu {
  display: block;
  @media (min-width: 584px) {
    display: none;
  }
}

.logo {
  @media (min-width: 584px) {
    padding: 12px;
  }
  padding: 0px
}

.nav {
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  display: none;
  @media (min-width: 584px) {
    display: flex;
  }
}

.login {
  margin-left: auto;
}

.menu-float {
  display: none;
}

span {
  width: auto;
  height: 100%;
  padding: 24px 12px;
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}

.link.nav{
  color: black;
  text-decoration: none;
}

.nuxt-link-exact-active {
  color: red;
  text-decoration: none;
}
</style>