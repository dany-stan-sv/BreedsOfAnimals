<template>
    <div id="contD" v-if="animal">
        <!-- основной блок -->
        <p class="p1">{{ animal.title }}</p>
        <img :src="animal.image" @error="nopicture" width="340" height="280" />
        <p class="p2">{{ animal.text }}</p>
        <p class="p3">
            Категория: {{ animal.ctg }}
            <br>Источник: {{ animal.source }}
        </p>
        <!-- основной блок -->
        <!-- поле для ввода комментария и сами комменты -->
        <textarea v-model="message" placeholder="Оставьте анонимный комментарий..."></textarea>
        <button v-on:click="msgSave">Отправить</button>
        <ol>
            <li v-for="(comment, index) in filterId(comments)" v-if="comment.id_anml == animal.id">
                <p class="p4">Комментарий {{ index+1 }}:</p>
                <p class="p2">{{ comment.msg }}</p>
            </li>
        </ol>
        <!-- поле для ввода комментария и сами комменты -->
    </div>
</template>

<script>
    import animals from '../animals.js';

    export default {
        data() {
            return {
                animals: animals,
                animal: null,
                nopic: require( './nopic.jpg' ),
                message: ''
            }
        },
        // достаём комменты из хранилища
        computed: {
            comments() {
                return this.$store.state.comments;
            }
        }, 
        methods: {
            // отдаем новый коммент в хранилище
            msgSave() {
                this.$store.dispatch( 'setCom', { id: this.animal.id, txt: this.message } );
                this.message = '';
            },
            // если фото удалят, будет вставляться дефолтное изображение
            nopicture( value ) {
                value.target.src = this.nopic;
            },
            // фильтруем комменты по id записи
            filterId( value ) {
                return value.filter( ( val ) => {
                    return val.id_anml === this.animal.id;
                } );
            }
        },
        created() {
            var blockId = this.$route.params.id;
            this.animal = this.animals[blockId];
        }
    };
</script>

<style scoped>
    #contD {
        width: 65%;
        margin: auto;
        padding-bottom: 30px;
        word-wrap: break-word;
    }

    textarea {
        width: 100%;
        margin-top: 15px;
        margin-bottom: 7px;
        background: #2D2D30;
        color: #E2E2E2;
        font-size: 16px;
        border-color: rgb(51,102,153);
    }
        textarea::-webkit-input-placeholder {
            color: cadetblue;
        }
 
    ol {
        margin-top: 10px;
        margin-bottom: 30px;
    }

    li{
        margin-bottom: 20px;
    }

    img {
        padding: 10px 10px 10px calc(50% - 170px);
    }

    p {
        margin-top: 10px;
        font-size: 18px;
        white-space: pre-line;
    }

    .p1 {
        color: #007ACC;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
    }

    .p2 {
        text-align: justify;
        margin-top: 10px;
        color: #E2E2E2;
    }

    .p3 {
        margin-top: 15px;
        color: cadetblue;
        text-align: right;
        padding-bottom: 20px;
        border-bottom: 1px solid #2D2D30;
    }

    .p4 {
        color: cadetblue;
        font-size: 19px;
        text-decoration: underline;
    }
</style>