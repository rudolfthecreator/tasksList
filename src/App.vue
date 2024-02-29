<!-- @format -->

<template>
  <div id="content">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О проекте</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  color: #2c3e50;
  background-image: url(@/assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#content {
  width: 50vw;
  height: 50vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

nav a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2b4ce1;
}
</style>
