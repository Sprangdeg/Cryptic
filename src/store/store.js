import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 4,
    messages: [
        {
            id: 1,
            message: 'Code',
            right: true,
        },
        {
            id: 2,
            message: 'Sleep',
            right: false,
        },
        {
            id: 3,
            message: 'Eat',
            right: true,
        },
    ],
};

export default new Vuex.Store({
    state,
});
