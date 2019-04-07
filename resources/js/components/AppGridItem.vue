<template>

    <div class="AppGrid__item" :style="background">
        <div class="AppGrid__item__left"></div>
        <div class="AppGrid__item__bottom"></div>
        <div class="AppGrid__item__right"></div>
        <div class="AppGrid__item__shadow"></div>
    </div>

</template>

<script>
    export default {
        props: {

        },
        computed: {
            bgImage() {
                return '/images/placeholder_app_01.png'
            },
            background() {
                // TODO - get this styling out
                // Was originally settings just the background-image here, but it would ignore background sizing in CSS
                // Want to manage images externally at some point, do not manage image background via pure CSS
                return {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${this.bgImage})`,
                    backgroundSize: '0, cover'
                }
            }
        }
    }
</script>
