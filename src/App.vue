<template>
  <!-- nav -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">List</router-link>
          </li>
          <!--<li class="nav-item">-->
          <!--  <a class="nav-link disabled" aria-disabled="true">Disabled</a>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </nav>

  <!-- 라우터로 설정한 컴포넌트를 보여줄 자리 -->
  <router-view :list="blogList"></router-view>
  <!--<router-link to="/list">list 로 이동</router-link>-->

</template>

<script>
import blogList from "@/assets/blogList";

export default {
  name: 'App',
  data () {
    return {
      blogList
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin-bottom: 30px;
}
</style>
