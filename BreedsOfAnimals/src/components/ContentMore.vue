<template>
    <div id="contM">
        <ol>
            <li v-for="animal in filteranimals">
                <img :src="animal.image" @error="nopicture" width="190" height="140" align="left"/>
                <router-link :to="{name: 'dtl', params: { id: animal.id }}">{{ animal.title }}</router-link>
                <p class="p2">{{ animal.text | snippet }}</p>
                <p class="p3">Источник: {{ animal.source }}</p>
            </li>
        </ol>
    </div>
</template>

<script>
    import animals from '../animals.js';

    export default {
        data() {
            return {
                nopic: require('./nopic.jpg' ),
                animals: animals
            }
        },
        computed: {
            ctg() {
                return this.$route.params.ctg;                
            },
            // фильтруем массив по категориям
            filteranimals: function () {
                if ( this.ctg === 'all' ) { return this.animals; }
                return this.animals.filter( ( animals ) => {
                    return animals.ctg === this.ctg;
                } );
            }
        },
        methods: {
            // если фото удалят, будет вставляться дефолтное изображение
            nopicture(value) {
                value.target.src = this.nopic
            }
        },
        filters: {
            // обрезаем текст для предварительного просмотра записи
            snippet: function ( value ) {
                return value.slice(0, 101) + '...';
            }
        }
    };
</script>

<style scoped>
    #contM {
        width: 65%;
        margin: auto;
        padding-bottom: 30px;
    }

    li {
        margin-top: 25px;
        margin-bottom: 35px;
        border-bottom: 1px solid #2D2D30;
        font-size: 16px;
        min-height: 160px;
    }

    img {
        padding: 0 10px 10px 0;
    }

    p {
        word-wrap: break-word;
        font-size: 18px;
    }
    .p2 {
        margin-top: 20px;
        color: #E2E2E2;
    }
    .p3 {
        margin-top: 25px;
        margin-bottom: 5px;
        color: cadetblue;
    }

    a:link {
        color: #007ACC;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
    }

    a:visited {
        color: #007ACC;
    }

    a:hover {
        color: aqua;
    }

    a:active {
        color: aqua;
    }
</style>