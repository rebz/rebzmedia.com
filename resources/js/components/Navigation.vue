<template>

    <nav class="Navigation">

        <router-link :to="{name: 'Home'}">
            Home
        </router-link>

        <router-link :to="{name: 'Portfolio'}">
            Portfolio
        </router-link>

        <button>
            Contact
        </button>

    </nav>

</template>

<script>
    export default {
    }
</script>
