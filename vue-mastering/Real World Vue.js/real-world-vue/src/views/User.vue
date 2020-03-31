<template>
  <div class="user">
    <!-- <h1>This is {{ $route.params.username }} page </h1> -->
    <h1>This is {{ username }} page .</h1>
    <p>path: {{ $route.path }}</p>
    <p>full path: {{ $route.fullPath }}</p>
    <p>name: {{ $route.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>

<style></style>
