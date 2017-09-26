<template>
    <md-button md-single class="mybutton" v-on:click="showMessages">
        <md-avatar>
            <img src="../assets/avatar.png" alt="Avatar">
        </md-avatar>
        {{firstname}} {{lastname}} ({{id}})
    </md-button>
</template>

<script>
export default {
    props: ['id', 'firstname', 'lastname'],
    methods: {
        showMessages() {
            const action = {
                type: 'setSelectedPersonId',
                id: this.id,
            };
            this.$store.commit(action);
        },
    },
};
</script>

<style scoped>

</style>


