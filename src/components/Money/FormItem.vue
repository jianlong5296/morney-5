<template>
    <div>
        <label class="formItem">
            <span class="name">{{this.fieldName}}</span>
            <input type="text"
                   :value="value"
                   @input="onValueChange($event.target.value)"
                   :placeholder="placeholder">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue {
        @Prop({default:''}) readonly value!:string;
        @Prop({required: true}) fieldName!: string;  //fieldName为必传属性 required
        @Prop() placeholder?: string;

        onValueChange(value: string, oldValue: string) {
            this.$emit('update:value', value);
        }
    }
</script>

<style lang="scss" scoped>
    .formItem {
        font-size: 14px;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name {
            padding-right: 16px;
        }

        input {
            height: 40px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>