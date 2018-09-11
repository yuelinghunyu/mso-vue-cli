<template>
    <div id="app-container">
        <img :src="logo" alt="logo">
        <p class="logo-text">jdj vue</p>
        <p class="slogon-text">不念过去、不畏将来</p>
    </div>
</template>
<script>
    export default{
        name:'app-container',
        data(){
            return{
                logo:require('../static/img/logo.jpg'),
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../static/common/base.scss';
    #app-container{
        font-size: $font-default-size;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:100px auto 0px;
        img{
            width: 70px;
            height: 70px;
        }
        .logo-text{
            width: 100%;
            font-size: 28px;
            color: #3e3a39;
            font-family: jianhei;
            line-height: 50px;
            text-align: center;
        }
        .slogon-text{
            width: 100%;
            font-size: 13px;
            color: #888888;
            text-align: center;
            line-height: 50px;
        }
    }
</style>

