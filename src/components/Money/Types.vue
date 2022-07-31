<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'"
                @click="selectType('-')">支出
            </li>
            <li :class="type === '+' && 'selected'"
                @click="selectType('+')">收入
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';  //自第三方库引入Component装饰器
    //声明以下为 TS 写的组件，type='-'会自动处理为data，selectType会自动处理为methods
    // @Component      //将此装饰器修饰到class上；@Component由vue-class-component官方库提供
    @Component
    export default class Types extends Vue {     // TS 写组件的引入
        type = '-';      //相当于js中的data '-'表示支出,'+'表示收入
        // helloMsg = 'hello,' + this.propMessage;    //官方文档引入props，不能用
        @Prop(Number) xxx: number | undefined   //第三方库引入props，vue-property-decorator
        //@Prop是装饰器，作用是告诉 Vue xxx不是data 而是prop
        // (Number)告诉Vue xxx是个 Number ；
        //number | undefined 就是 TS 的语法 意为 xxx 的类型是number或undefined
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        selectType(type: string) {       //相当于js中的methods；  type: string即为 TS 语法
            if (type !== '-' && type !== '+') {
                throw new Error('type is unknown');
            }
            this.type = type;
        }
        mounted() {
            if (this.xxx === undefined) {
                console.log('没有xxx')
            } else {
                console.log(this.xxx.toString());
            }
        }
    }
</script>

<style lang="scss" scoped>
    .types {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>