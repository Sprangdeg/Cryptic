<template>
    <div class="chat">
        <md-layout md-gutter>
            <md-layout md-align="end">
                <people-list></people-list>
            </md-layout>
            <md-layout md-align="start" class="messageList">
                <message-list :messages="messages"></message-list>
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