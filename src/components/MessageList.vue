<template>
    <md-card id="messages" class="card">
        <md-layout md-column md-gutter>
            <div v-for="message in $store.state.messages" :key="message.id">
                <message :message="message"></message>
            </div>
        </md-layout>

    </md-card>
</template>

<script>
import Message from './Message';

export default {
    props: ['messages'],
    components: {
        message: Message,
    },
};
</script>

<style scoped>

</style>