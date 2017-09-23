<template>
    <md-layout v-if="message.right" md-align="end">
        <span>{{ message.message }}</span>
    </md-layout>
    <md-layout v-else md-align="start">
        <span>{{ message.message }}</span>
    </md-layout>
</template>

<script>
export default {
    props: ['message'],
};
</script>

<style scoped>
</style>