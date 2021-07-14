<template>
  <Nav />
  <div>
    <div v-if="loading" class="loading m-5">
      <div class="d-flex justify-content-center m-5">
        <strong>Loading...</strong>
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="response" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
        return {
          loading: false,
          response: null,
          error: null
        }
    },
    methods: {
        async getData() {
          this.error = this.post = null
          this.loading = true
          const res = await fetch('https://gitconnected.com/v1/portfolio/ramirocastillo93')
          const data = await res.json()
          this.response = data
          this.loading = false
          // console.log(data)
        }
    },
    created(){
        this.getData()
    },
    // watch: {
    //   $route: 'Home'
    // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
