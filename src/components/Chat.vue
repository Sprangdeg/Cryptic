<template>
    <div class="chat">
        <md-layout md-gutter>
            <md-layout md-flex-xsmall md-align="center">
                <people-list></people-list>
            </md-layout>

            <md-layout md-flex-xsmall md-align="center">
                <md-layout md-column>
                    <md-layout md-flex-xsmall>
                        <message-list :messages="messages"></message-list>
                    </md-layout>
                    <md-layout md-flex-xsmall>
                        <message-box></message-box>
                    </md-layout>
                </md-layout>
            </md-layout>
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
        submit: function submit() {
            // code goes here
        },
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
.card {
    min-width: 300px;
    max-width: 600px;
}
</style>