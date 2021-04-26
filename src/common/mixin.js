import { debouce } from './utils'
import BackTop from 'components/content/backtop/BackTop'

export const itemImgListMixin = {
    data() {
        return {
            itemImgList: null
        }
    },
    mounted() {
        let refresh = debouce(this.$refs.scroll.refresh, 500);
        this.itemImgList = () => {
            refresh()
        }
        this.$bus.$on('ImageLoad', this.itemImgList)
    }
}

// 返回顶部抽取
export const backTopMixin = {
    components:{
        BackTop
    },
    data(){
        return {
            backTopShow:false,
        }
    },
    methods:{
        // 点击返回顶部
        topClick(){
            this.$refs.scroll.scrollTo(0,0,300);
        }
    }
}