<template>
    <div class="container">
        <div class="container">
            <img class="picture mx-auto d-block" :src="response.basics.picture" alt="" >
            <h1 class="display-5">{{ response.basics.name }}</h1>
            <h4>{{ response.basics.label }}</h4>
        </div>
        <div class="container">
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
        </div>
    </div>
</template>

<script>
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
        height: 200px;
    }
</style>