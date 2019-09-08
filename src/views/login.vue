<template>
    <div class="container">
        <bg>
            <div class="login">
                <div class="login-con">
                    <div class="header">
                        欢迎登陆
                    </div>
                    <div class="main">
                        <input type="text" maxlength="16" placeholder="请输入账号" v-model="account">
                        <input type="password" maxlength="16" placeholder="请输入密码" v-model="password">
                        <input type="button" value="登陆" @click="login()">
                    </div>
                    <div class="footer">
                        {{tip}}
                    </div>
                </div>
            </div>
        </bg>
    </div>
</template>

<script>

    import bg from '../components/bg'

    export default {
        name: "login",
        components:{
            bg
        },
        data() {
            return {
                account: "test",
                password: "",
                tip:"输入任意用户和密码即可"
            }
        },
        methods: {
            login(){
                if(this.account === ""){
                    this.tip = "请输入账号"
                    return
                }
                if(this.password === ""){
                    this.tip = "请输入密码"
                    return
                }
                this.tip = "输入任意用户和密码即可"
                this.$router.push({path : "/admin"})
            }
        }
    }
</script>

<style scoped lang="less">
    .container{
        width: 100vw;
        height: 100vh;
        text-align: center;
        .login{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 100;
            .login-con{
                border: 10px solid rgba(255,255,255,0.13);
                position: absolute;
                right: calc(50% - 150px);
                top: calc(50% - 125px);
                width: 300px;
                height: 250px;
                background: rgba(255,255,255,0.8);
                box-shadow: 0 0 10px rgba(255,255,255,0.9);
                border-radius: 5px;
                transition: all .2s ease-in-out;
                .header{
                    padding: 15px 0;
                    font-size: 1.1rem;
                    font-weight: bolder;
                    border-bottom: 1px solid #e8eaec;
                }
                .main{
                    margin-top: 10px;
                    padding: 15px;
                    input{
                        width: 100%;
                        border: none;
                        outline: none;
                        background-color: rgba(255,255,255,0.7);
                        padding: 5px;
                        margin-bottom: 10px;
                        font-size: 1rem;
                        box-sizing: border-box;
                        border-radius: 5px;
                        color: #888;
                    }
                    input[type="button"]:active{
                        background-color: #e5e5e5;
                        color: #444;
                    }
                }
                .footer{
                    font-size: 0.7rem;
                    font-weight: lighter;
                }
            }
        }
    }

</style>