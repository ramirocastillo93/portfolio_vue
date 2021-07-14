<template>  
    <Header :response="this.$root.response"/>
</template>

<script>
import Header from '../components/Header'

export default {
    name: 'Home',
    components: {  Header }
}
</script>
