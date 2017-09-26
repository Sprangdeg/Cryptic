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

const mutations = {
    addMessage(stat, message) {
        // mutate state
       // alert('adding');
        const mes = {
            id: 1,
            message: message.message,
            right: true,
        };
        state.messages.push(mes);
    },

};

export default new Vuex.Store({
    state, mutations,
});
