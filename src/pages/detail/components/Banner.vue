<template>
   <div>
      <div class="banner" @click="handLeBannreClick">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="">
        <div class="banner-info">
          <div class="banner-tittle">啊啊啊啊啊啊啊</div>
          <div div class="banner-number"><span class="iconfont">&#xe692;</span>39</div>
        </div>
       </div>
       <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: 'DetailBanner',
    data () {
      return {
        showGallary: false,
        imgs: [    'http://img1.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_r_800x800_f811b75f.jpg',
            'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg']
      }
    },
    methods: {
      handLeBannreClick () {
        this.showGallary = true
      },
      handleGallaryClose () {
        this.showGallary = false
      }
    },
    
    components: {
      CommonGallary
    }
}

</script>
<style lang="stylus" scoped>
  .banner
    position :relative
    overflow :hidden
    height :0
    padding-bottom :33%
    .banner-img
     width :100%
    .banner-info
      width :99%
      display :flex
      position :absolute
      left: 0
      rigth : 0
      bottom :0 
      line-height : .4rem
      color: #fff
      background-image :linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0.2rem
      .banner-number
        height: .32rem
        line-height :.32rem
        margin-top: .14rem
        padding : 0 .4rem
        border-radius: .2rem
        background :rgba(0, 0, 0, .8)
        font-size :.24rem
        margin-top :.23rem
        float :right
        .banner-icon
          font-size : .24rem
        .iconfont
          margin-right .1rem
</style>
