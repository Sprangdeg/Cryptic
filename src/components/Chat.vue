<template>
    <div class="chat">
        <md-layout md-gutter>
            <md-layout md-align="end">
                <people-list :people="getPeople"></people-list>
            </md-layout>
            <md-layout md-align="start" class="messageList">
                <message-list :messages="getMessages"></message-list>
            </md-layout>
        </md-layout>
        <md-layout md-align="center">
            <message-box></message-box>
        </md-layout>
    </div>
</template>

<script>
import PeopleList from './PeopleList';
import MessageBox from './MessageBox';
import MessageList from './MessageList';

export default {
    name: 'chat',
    methods: {
    },
    components: {
        'people-list': PeopleList,
        'message-box': MessageBox,
        'message-list': MessageList,
    },
    computed: {
        getMessages() {
            return this.$store.getters.messages;
        },
        getPeople() {
            return this.$store.getters.people;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat {
    height: 600px;
    margin-top: 2em;
}
.messageList {
    margin-left: 2em;
}
</style>