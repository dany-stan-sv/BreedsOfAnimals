<template>
    <div id="block">
        <app-header></app-header>
        <app-content-detail></app-content-detail>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ContentDetail from './components/ContentDetail.vue';

    export default {
        components: {
            'app-content-detail': ContentDetail
        }
    }
</script>

<style scoped>
</style>