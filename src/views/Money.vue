<template>
    <Layout class-prefix="layout">
        {{recordList}}
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :value.sync="record.value"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Tags from '@/components/Money/Tags.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import model from '@/model';

    const recordList = model.fetch();


    @Component({
        components: {Tags, Notes, Types, NumberPad}
    })
    export default class Money extends Vue {
        tags = ['餐饮', '购物', '交通', '娱乐', '医疗'];
        recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        record: RecordItem = {
            tags: [], notes: '', type: '+', amount: 0
        };

        onUpdateAmount(value: string) {
            this.record.amount = parseFloat(value);
        }

        onUpdateType(value: string) {
            this.record.type = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        saveRecord() {
            // JSON.parse() 用于从一个字符串中解析出json对象
            // JSON.stringfy() 用于从一个对象解析出字符串
            const record2: RecordItem = model.clone(this.record);
            record2.createdAt = new Date();
            this.recordList.push(record2);
        }

        @Watch('recordList')
        onRecordListChange() {
            model.save(this.recordList);
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
