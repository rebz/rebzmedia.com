<template>

    <div class="Container">

<<<<<<< HEAD
        <navigation></navigation>
=======
        <div class="AppGrid">

            <div class="AppGrid__con">

                <div class="AppGrid__col" v-for="n in 7">

                    <app-grid-item></app-grid-item>

                    <app-grid-item></app-grid-item>

                    <app-grid-item></app-grid-item>

                </div>

            </div>

        </div>
>>>>>>> e30bd857f7acf57705f113b23ec2c61d2da6c555

        <router-view></router-view>

    </div>

</template>

<script>
    import AppGridItem from './AppGridItem'

    export default {
        components: {
<<<<<<< HEAD
            Navigation
        },
        mounted() {
=======
            AppGridItem
>>>>>>> e30bd857f7acf57705f113b23ec2c61d2da6c555
        }
    }
</script>
