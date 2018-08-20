<template>
    <div id="app-container">
        <img src="./static/images/logo.png" alt="logo">
        <span>{{msg}}</span>
    </div>
</template>
<script>
    export default{
        name:'app-container',
        data(){
            return{
                msg:'hello vue!'
            }
        }
    }
</script>
<style lang="less" scoped>
    #app-container{
        img{
            width: 100px;
            height:50px;
            display: block;
            margin: 100px auto 0px;
        }
        span{
            display: block;
            font-size: 20px;
            color: royalblue;
            line-height: 50px;
            text-align: center;
        }
    }
</style>

