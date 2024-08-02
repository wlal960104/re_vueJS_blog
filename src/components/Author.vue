<template>
  <div class="m-4">
    <h3 class="m-2">작가 소개입니다.</h3>
    작가의 이름은 : {{list[$route.params.id].author}} 입니다.
  </div>
</template>

<script>
export default {
  name : 'Author',
  props : {
    list : Array
  }
}
</script>

<style>

</style>