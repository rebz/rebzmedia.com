<template>

    <div class="Container">

        <div class="AppGrid">

            <div class="AppGrid__con">

                <div class="AppGrid__col" v-for="n in 7">

                    <app-grid-item></app-grid-item>

                    <app-grid-item></app-grid-item>

                    <app-grid-item></app-grid-item>

                </div>

            </div>

        </div>

        <router-view></router-view>

    </div>

</template>

<script>
    import AppGridItem from './AppGridItem'

    export default {
        components: {
            AppGridItem
        }
    }
</script>
