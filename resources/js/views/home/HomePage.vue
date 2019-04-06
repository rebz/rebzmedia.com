<template>

    <div>

        HomePage.vue

        <br>

        {{ item || 'no data' }}

    </div>

</template>

<script>
    export default {

        data() {
            return {
                item: null
            }
        },

        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
                this.item = response.data
            })
        }
    }
</script>
