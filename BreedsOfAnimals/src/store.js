/*////////////////////////////
** решил немного потыкать Vuex
*/////////////////////////////

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    state: {
        comments: [
            {
                id_anml: 0,
                msg: 'opa1'
            },
            {
                id_anml: 0,
                msg: 'opa2'
            },
            {
                id_anml: 1,
                msg: 'Опачки!'
            }
        ]
    },
    getters: {
        getComments: state => state.comments
    },
    mutations: {
        setComment( state, cmnt ) {
            Array.prototype.push.apply( state.comments, cmnt );
        }
    },
    actions: {
        setCom( { commit }, { id, txt }) {
            var cmnt = [];
            cmnt.push( {
                id_anml: id,
                msg: txt
            } )
            // потом здесь будем сохранять в БД
            commit('setComment', cmnt);
        }
    }
} )