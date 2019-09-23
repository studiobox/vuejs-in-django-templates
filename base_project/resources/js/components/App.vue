<template>
    <div id="app">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Vue.js Into Django Templates!'
        }
    }
}
</script>

<style lang="sass" scoped>
h1
    font-size: 5em
    color: #fff
</style>