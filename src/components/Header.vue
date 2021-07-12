<template>
    <div>
        <img class="picture" :src="response.basics.picture" alt="" >
        <h1>{{ response.basics.name }}</h1>
        <h4>{{ response.basics.label }}</h4>
    </div>
    <div class="container">
        <p>{{ response.basics.summary }}</p>
    </div>
    <!-- <Nav /> -->
</template>

<script>
// import Nav from './Nav'

export default {
  components: { },
    name: 'Header',
    props: {
        response: Object
    }
}
</script>

<style scoped>
    .picture {
        border-radius: 50%;
        width: 150px;
    }

    .container {
        background: #f4f4f4;
        padding: 20px;
        align-items: center;
        border-radius: 5px;
    }
</style>