<template>
    <div id="app-container">
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:'app-container',
    }
</script>
<style lang="scss" scoped>
    @import '../static/common/base.scss';
    #app-container{
        font-size: $font-default-size;
    }
</style>

