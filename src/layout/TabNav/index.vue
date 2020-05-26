<template>
    <div class="u-tab-nav">
        <div class="u-tab-nav__box">
            <div class="el-tabs__nav-wrap is-scrollable is-top">
                <span class="el-tabs__nav-prev">
                    <i class="el-icon-arrow-left"></i>
                </span>
                <span class="el-tabs__nav-next">
                    <i class="el-icon-arrow-right"></i>
                </span>
                <div class="el-tabs__nav-scroll">
                    <div role="tablist" class="el-tabs__nav is-top" style="transform: translateX(0px);">
                        <div class="el-tabs__active-bar is-top" style="width: 56px; transform: translateX(96px);"></div>
                        <div aria-controls="pane-first" role="tab" tabindex="-1" class="el-tabs__item is-top">用户管理</div>
                        <div aria-controls="pane-second" role="tab" aria-selected="true" tabindex="0" class="el-tabs__item is-top is-active">配置管理</div>
                    </div>
                </div>
            </div>
        </div>
        <ul v-show="this.rightMenuShow" :style="{left:this.left+'px',top:this.top+'px'}" class="u-tab-nav__menu">
            <li @click="removeTab($store.getters.rightNav)">关闭右边</li>
            <li @click="removeOtherTab($store.getters.rightNav)">关闭其他</li>
            <li @click="removeAllTab">关闭全部</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                rightMenuShow: false,
                left: 0,
                top: 0
            }
        },
        methods: {
            leftMove(){

            },
            rightMove(){

            },
            openMenu (item, e, index) {
                if (index === 0) {
                    return false
                }
                this.rightMenuShow = true
                this.left = e.clientX + 10
                this.top = e.clientY
                this.$store.dispatch("openMenu", item)
            },
            removeTab (tabItem) {
                this.$store.dispatch("removeTab", {tabItem, fullPath: this.$route.fullPath, router: this.$router})
            },
            removeOtherTab (tabItem) {
                this.$store.dispatch("removeOtherTab", {tabItem, router: this.$router})
            },
            removeAllTab () {
                this.$store.dispatch("removeOtherTab", {all: true, router: this.$router})
            }
        },
        watch: {
            rightMenuShow (value) {
                if (value) {
                    document.body.addEventListener("click", () => {
                        this.rightMenuShow = false
                    })
                } else {
                    document.body.removeEventListener("click", () => {
                        this.rightMenuShow = false
                    })
                }
            }
        }
    }
</script>
<style>
    .tabnav {
        display: inline-block;
        transition: all 0.5s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);

    }

    .list-enter-active {
        transition: all 0.5s;
    }

    .list-leave-active {
        position: absolute;
        transition: all 1s;
    }
</style>
<style lang="scss">
    .u-tab-nav{
        padding: 5px;
        &__box{
            display: flex;
            overflow: hidden;
            &--left,&--right{
                padding: 5px 6px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                border: 1px solid #cccccc;
                cursor: pointer;
                &:hover{
                    background: #333333;
                    color: white;
                }
            }
            &--left{
                margin-right: 5px;
            }
            &--right{
                margin-left: 5px;
            }
            ul{
                flex: 1;
                list-style-type: none;
                display: flex;
                justify-content: flex-start;
                flex-wrap: nowrap;
                overflow-x: hidden;
                position: relative;
                li{
                    padding: 5px 6px;
                    height: 20px;
                    border: 1px solid #cccccc;
                    border-radius: 2px;
                    &:hover{
                        background: #333333;
                        color: white;
                        a{
                            color: white;
                        }
                    }
                    &:not(:last-child){
                        margin-right: 5px;
                    }
                    &:not(:first-child){
                        min-width: 80px;
                    }
                    a{
                        color: #333333;
                        text-decoration: none;
                    }
                    i{
                        margin-left: 5px;
                        cursor: pointer;
                        &:hover{
                            color: red;
                        }
                    }
                }
                .active{
                    background: #333333;
                    color: white;
                    a{
                        color: white;
                    }
                }
            }
        }
    }

    .u-tab-nav__menu {
        margin: 0;
        background: #fff;
        z-index: 999;
        position: absolute;
        padding: 5px 0;
        border: 1px solid #cccccc;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 2px 1px 6px 0 rgba(0, 0, 0, .3);
        li {
            cursor: pointer;
            list-style-type: none;
            margin: 0;
            padding: 7px 16px;
            &:hover {
                background: #e1e6ea;
            }
        }
    }
</style>
