<template>
    <md-layout v-if="message.right" md-align="end">
        <span class="margin">{{ message.message }}</span>
    </md-layout>
    <md-layout v-else md-align="start">
        <span class="margin">{{ message.message }}</span>
    </md-layout>
</template>

<script>
export default {
    props: ['message'],
};
</script>

<style scoped>
    .margin{
        margin-right: 1em;
        margin-left: 1em;
    }
</style>