<template>
    <md-card id="messages">
        <md-list>
            <md-list-item v-for="message in messages" :key="message.id">
                <md-avatar>
                    <img src="../assets/avatar.png" alt="Avatar">
                </md-avatar>
                <message :message="message"></message>
                <md-divider class="md-inset"></md-divider>
            </md-list-item>
        </md-list>
    </md-card>
</template>

<script>
import message from './Message';

export default {
    props: ['messages'],
    components: {
        message,
    },
};
</script>

<style scoped>
    .message{
        width:100%;
    }
    #messages{
        height:400px;
        width: 500px;
    }
</style>