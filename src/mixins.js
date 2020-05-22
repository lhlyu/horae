import Vue from 'vue';
import isMobile from 'ismobilejs'

import { mapState } from 'vuex'

const defaultImg = new Image()
defaultImg.src = "https://cdn.jsdelivr.net/gh/lhlyu/pb@master/b/10.jpg"

Vue.prototype.$isMobile = isMobile().phone

Vue.mixin({
    components:{
    },
    data(){
        return {
            isLoading: false,
            defaultImg: defaultImg.src
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    methods:{
        init(){},
        scrollTop(cb,top){
            window.scrollTo({
                top: top || 0,
                behavior: 'smooth'
            })
            if(cb){
                setTimeout(() => {
                    cb()
                },this.$isMobile ? 0 : 400)
            }
        }
    },
    computed: {
        cls(){
            return {}
        }
    }
});
