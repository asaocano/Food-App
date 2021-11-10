<template>
  <div id="app">
    <div id="nav">
      <div class="navbar-container">
        <div class="navbar-content">
          <router-link to="/"><i class="bx bx-home"></i></router-link>
          <router-link to="/chest"><i class="bx bx-basket"></i></router-link>
          <router-link to="/favorites"
            ><i class="bx bxs-heart"></i
          ></router-link>
          <router-link to="/historial"
            ><i class="bx bx-history"></i
          ></router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
  font-family: "Josefin Sans", sans-serif;
}
.navbar-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  .navbar-content {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 32px;
      color: rgba(163, 163, 163);
      &.router-link-exact-active {
        color: rgba(255, 131, 62);
      }
    }
  }
}
</style>
