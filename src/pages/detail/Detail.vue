<template>
  <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div class="content"></div>
     <!--  <detail-banner
        :sightNmae="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
      ></detail-banner>
      <detail-header></detail-header>
      <detail-list></detail-list>
      <div class="content">qqq</div> -->
  </div>    
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}


/* import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'
export default {
    name: 'Detail',
    components: {
        DetailHeader,
        DetailBanner,
        DetailList
    },
    data () {
        return {
            sighName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json',{
                params: {
                    id: this.$router.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data){
                const data = res.data
                this.sighName = data.sighName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    }
} */
</script>
<style lang="stylus" scoped>
.content
  height :50rem
</style>
