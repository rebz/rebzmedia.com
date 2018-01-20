<template>

    <div>

        <app-header></app-header>

        <router-view></router-view>

    </div>

</template>

<script>
    export default {
        mounted() {
            console.info('App.vue mounted... congrats!')
        }
    }
</script>