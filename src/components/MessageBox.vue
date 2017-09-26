<template>
    <md-card id="messageBox" class="messageBox">
        <md-card-actions>
            <md-layout md-column md-gutter>
                <md-layout md-flex-xsmall="20">
                    <!-- <md-input-container @keydown="submit">
                        <label>Message</label>
                        <md-textarea v-model="message"></md-textarea>
                    </md-input-container> -->
                    <input class="messageInput" v-model="message" @keyup.enter="submit"></input>
                </md-layout>
            </md-layout>
        </md-card-actions>
    </md-card>
</template>

<script>
export default {
    data() {
        return {
            message: '',
        };
    },
    methods: {
        submit() {
            if (this.message.trim()) {
                const action = {
                    type: 'addMessage',
                    message: this.message.trim(),
                };
                this.$store.commit(action);
                this.message = '';

                /*  Defer the callback to be executed after the next DOM update cycle.
                    Use it immediately after you’ve changed some data to wait for the DOM update.
                */
                this.$nextTick(() => {
                    this.scrollToEnd('#messages');
                });
            }
        },
        scrollToEnd(listSelector) {
            // FIX THIS. DON'T USE RELATIVE PATHS. THEY BREAK!
            const container = this.$root.$el.querySelector(listSelector);
            container.scrollTop = container.scrollHeight;
        },
    },
};
</script>

<style scoped>
#messageBox{
    width: 400px;
    margin-top: 1em;
    margin-left: 1em;
}

.messageInput{
    width:100%;
}
</style>