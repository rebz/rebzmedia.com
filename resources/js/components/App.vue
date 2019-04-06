<template>

    <div>

        App.vue

        <navigation></navigation>

        <router-view></router-view>

    </div>

</template>

<script>
    import Navigation from '@views/layout/Navigation'

    export default {
        components: {
            Navigation
        },
        mounted() {
            console.info('App.vue mounted... congrats!')
        }
    }
</script>
