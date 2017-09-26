<template>
    <md-card class="messageColumn">
        <md-card-actions>
            <md-layout md-column>
                <div v-for="person in people" :key="person.id">
                    <person :id="person.id" :firstname="person.firstname" :lastname="person.lastname"></person>
                </div>
            </md-layout>
        </md-card-actions>
    </md-card>
</template>

<script>
import person from './Person';

export default {
    props: ['people'],
    components: {
        person,
    },
    methods: {
    },
};
</script>

<style scoped>
    .mybutton{
        width:100%;
        text-align:left;
    }
</style>


