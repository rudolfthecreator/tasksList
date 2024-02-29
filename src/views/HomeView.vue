<!-- @format -->

<template>
  <div class="home">
    <h2>
      «Для того чтобы жить, нужно иметь цель, ради которой стоит жить» —
      <i>Александр Грибоедов</i>.
    </h2>
    <router-link to="/tasks">К списку задач</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.home a {
  border: solid;
  padding: 4px;
  background-color: #ff3c3c05;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff3c3c;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #2b4ce1;
}
</style>
