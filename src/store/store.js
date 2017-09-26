import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    selectedPersonId: 1,
    people: [
        {
            id: 1,
            firstname: 'Daniel',
            lastname: 'Larsson',
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
        },
        {
            id: 2,
            firstname: 'Maggie',
            lastname: 'Rose',
            messages: [
                {
                    id: 1,
                    message: 'I am stupid',
                    right: true,
                },
                {
                    id: 2,
                    message: 'Yes, yes I am',
                    right: false,
                },
                {
                    id: 3,
                    message: 'eaaaaat!',
                    right: false,
                },
            ],
        },
    ],
};

const getters = {
    people(stat) {
        return stat.people;
    },
    messages(stat) {
        const id = stat.selectedPersonId;
        return stat.people.find(x => x.id === id).messages;
    },
    selectedPerson(stat) {
        const id = stat.selectedPersonId;
        return stat.people.find(x => x.id === id);
    },
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
        const id = stat.selectedPersonId;
        stat.people.find(x => x.id === id).messages.push(mes);
    },
    setSelectedPersonId(stat, id) {
        stat.selectedPersonId = id.id;
    },
};

export default new Vuex.Store({
    state, mutations, getters,
});
