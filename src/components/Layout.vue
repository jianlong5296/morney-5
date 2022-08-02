<template>
    <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
        <div class="content" :class="classPrefix && `${classPrefix}-content`   ">
<!-- 用于标记往哪个具名插槽中插入子组件内容-->
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['classPrefix'],
        name: 'Layout'
    };
</script>

<style lang="scss" scoped>
    .layout-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content {
        overflow: auto;
        flex-grow: 1;
    }
</style>

