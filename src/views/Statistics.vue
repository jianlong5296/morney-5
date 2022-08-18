<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
        <div>
            type:{{type}}
            <br/>
            interval:{{interval}}
        </div>
    </Layout>
</template>


<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';
    import intervalList from '@/constants/intervalList';

    @Component({
        components: {Tabs},
    })
    export default class Statistics extends Vue {
        type = '-';
        interval = 'day';
        intervalList = intervalList;
        typeList = recordTypeList;
    };
</script>
<style scoped lang="scss">
    ::v-deep .type-tabs-item {
        background: white;

        &::after {
            display: none;
        }

        &.selected {
            background: #c4c4c4;
        }
    }
    ::v-deep .interval-tabs-item{
        height: 48px;
    }

</style>