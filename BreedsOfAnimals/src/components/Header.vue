<template>
    <div id="header">
        <ul>
            <router-link tag="li" :to="{name: 'ctg', params: { ctg: 'all' }}">Все</router-link>
            <!-- Навигация по категриям -->
            <router-link tag="li" v-for="item in arr" :to="{name: 'ctg', params: { ctg: item }}">{{ item }}</router-link>
        </ul>
    </div>
</template>

<script>
    import animals from '../animals.js';

    export default {
        data() {
            return {
                animals: animals,
                arr: []
            }
        },
        created() {
            // выбираем из базы какие есть категории
            for ( var i = 0; i < this.animals.length; i++ ) {
                if ( this.arr.indexOf( this.animals[i].ctg ) < 0 ) {
                    this.arr[this.arr.length] = this.animals[i].ctg;
                }
            }
        }
    }
</script>

<style scoped>
    #header {
        text-align: center;
        white-space: nowrap;
        padding: 7px;
        border-bottom: 3px solid #007ACC;
        background: #2D2D30;
        color: #E2E2E2;
        font-size: 20px;
        font-weight: bold;
    }

    ul {
        display: inline-flex;
        justify-content: flex-start;
        height: 20px;
        margin: 0px;
    }

        ul li {
            height: 37px;
            padding: 0 25px;
            line-height: 40px;
        }

            ul li:hover {
                background: #1C97EA;
                cursor: pointer;
            }

            ul li.router-link-exact-active {
                background-color: #007ACC;
            }
        
</style>