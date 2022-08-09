<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "~@/assets/style/helper.scss";
    @import "~@/assets/style/reset.scss";
    body {
        -webkit-font-smoothing: antialiased;  //apple系统用的
        -moz-osx-font-smoothing: grayscale;   //apple系统用的
        color: #333;
        font-family: $font-hei;
        line-height: 1.5;
        background: #f5f5f5;
    }
</style>
