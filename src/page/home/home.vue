<script>
    export default{
        name:'home-container',
        data(){
            return{
                logo:require('#/img/logo.jpg'),
            }
        },
        methods: {
             redirectEvent() {
                this.$store.commit({
                    type: 'setInitMso',
                    textContent: '欢迎使用mso-vue-cli, 这是通过 vuex 传过来的值'
                })
                this.$router.push({
                    path: '/page1-view'
                })
            }
        },
        render() {
            return(
                 <div class="home-container">
                    <img src={this.logo} alt={this.logo} />
                    <p class="logo-text">jdj vue</p>
                    <p class="slogon-text">不念过去、不畏将来</p>
                    <p click={this.redirectEvent}>路由跳转</p>
                </div>
            )
        }
    }
</script>
<style lang="scss" scoped>
    @import '#/common/base.scss';
    .home-container{
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
            border-radius: 50%;
            display: block;
            border: none;
            animation: roleing 5s infinite linear;
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
    @keyframes roleing{
        0%{
            transform: rotate(0deg)
        }
        100%{
            transform: rotate(360deg)  
        }
    }
</style>

