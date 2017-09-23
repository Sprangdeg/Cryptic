<template>
    <md-card id="messageBox" class="card">
        <md-card-actions>
            <md-layout md-column md-gutter>
                <md-layout md-flex-xsmall="20">
                    <md-input-container>
                        <label>Message</label>
                        <md-textarea v-on:keyup.enter="submit"></md-textarea>
                    </md-input-container>
                </md-layout>
            </md-layout>
        </md-card-actions>
    </md-card>
</template>

<script>
export default {
    methods: {
        submit: function submit() {
            this.counter += 1;
            this.$emit('submit');
        },
    },
};
</script>

<style scoped>
#messageBox{
    margin-top: 2em;
}
</style>