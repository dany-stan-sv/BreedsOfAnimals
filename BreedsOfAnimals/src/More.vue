<template>
    <div id="more">
        <app-header></app-header>
        <app-content-more></app-content-more>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ContentMore from './components/ContentMore.vue';

    export default {
        components: {
            'app-content-more': ContentMore
        }
    }
</script>

<style scoped>
</style>