<template>
  <Header :response="this.response"/>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
        return {
            response: null
        }
    },
    methods: {
        async getData() {
            const res = await fetch('https://gitconnected.com/v1/portfolio/ramirocastillo93')
            const data = await res.json()

            this.response = data
            console.log(data)
        }
    },
    beforeMount(){
        this.getData()
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
  margin-top: 60px;
}
</style>
