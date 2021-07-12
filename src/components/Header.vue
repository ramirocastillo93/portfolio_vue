<template>
    <div>
        <Nav />
        <img class="picture" :src="response.basics.picture" alt="" >
        <h1>{{ response.basics.name }}</h1>
        <h4>{{ response.basics.label }}</h4>
    </div>
    <div class="card text-center text-dark bg-light mb-3">
        <div class="card-body">
            <p class="card-text">{{ response.basics.summary }}</p>
            <hr />
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" :href="response.basics.profiles[0].url"><i class="fab fa-git"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="response.basics.profiles[1].url"><i class="fab fa-github"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="response.basics.profiles[2].url"><i class="fab fa-linkedin"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="response.basics.profiles[3].url"><i class="fab fa-angellist"></i></a>
                </li>
            </ul>
        </div>
    </div>
    <!-- <Nav /> -->
</template>

<script>
import Nav from './Nav'

export default {
  components: { Nav },
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
        margin: 25px 0 0 0;
    }
    h1 {
        margin: 20px 0;
    }
    .card {
        margin: 0px 75px 0;
    }
    hr {
        width: 20%;
        margin: 0 auto;
        align-self: center;
    }
</style>