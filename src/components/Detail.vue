<template>
  <div class="container-fluid">
    <h2 class="mt-4">{{ list[$route.params.id].title }}</h2>
    <p class="mt-4">{{ list[$route.params.id].content }}</p>
  </div>

  <router-view :list="list"></router-view>
</template>

<script>
export default {
  name : 'Detail',
  props : {
    list : Array
  }
}
</script>

<style>

</style>