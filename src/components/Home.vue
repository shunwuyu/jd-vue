<template lang="html">
  <section class="slider">
    <slider :data='msg'></slider>
  </section>
  <section class="section-model">
    <h6 class="title font-normal">{{ one.title }}</h6>
    <div class="row">
      <div class="item" v-for="item in one.images" @click="link(item.ejumpUrl)">
        <img :src="item.eproductImgA">
        <span class="tit">{{ item.etitle1 }}</span>
        <span class="desc">{{ item.etitle2 }}</span>
      </div>
    </div>
  </section>
  <section class="section-new">
    <h6 class="title font-normal bottom-line">{{two.title}}</h6>
    <div class="row" @click="link(two.ejumpUrl)">
      <div class="icon left"><img :src="two.images" alt=""></div>
      <div class="info left">
        <span class="tit">{{two.etitle1}}</span>
        <span class="desc">{{two.etitle2}}</span>
      </div>
      <div class="fenifit right">{{two.etitle3}}</div>
    </div>
  </section>
  <section class="section-invest">
    <h6 class="title font-normal bottom-line" @click="link(three.fjumpUrl)">
      <div class="com-title">{{three.title}}</div>
      <div class="com-desc">{{three.fsubtitle}}</div>
    </h6>
    <div class="row">
      <a :href="img.ejumpUrl" v-for="img in three.images">
        <img :src="img.eproductImgA" alt="">
      </a>
    </div>
  </section>
  <section class="section-iou">
    <h6 class="title font-normal bottom-line" @click="link(four.fjumpUrl)">
      <div class="com-title">{{ four.title }}</div>
      <div class="com-desc">{{ four.fsubtitle }}</div>
    </h6>
    <div class="row" @click="link(two.ejumpUrl)">
      <div class="item" v-for="item in four.data">
        <div class="icon left">
          <img :src="item.eproductImgA">
        </div>
        <div class="info left">
          <span class="tit">{{ item.etitle1 }}</span>
          <span class="desc">{{ item.etitle2 }}</span>
        </div>
        <div class="fenifit right">{{ item.etitle3 }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import slider from './slider.vue'
export default {
  props:['data'],
  data: function () {
    return {
      msg:'',
      one:{},
      two:{},
      three:{},
      four:{}
    }
  },
  watch:{
    'data':function(newData, oldData) {
      this.msg = newData;
      this.getOne(newData)
      this.getTwo(newData)
      this.getThree(newData)
      this.getFour(newData)
    }
  },
  compiled:function() {

    var newData = JSON.parse(sessionStorage.getItem('indexData'));

    if(newData) {
      this.getOne(newData);
      this.getTwo(newData)
      this.getThree(newData)
      this.getFour(newData)
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    getOne:function(arr) {
      this.one = {
        title:arr[2].ftitle,
        images:arr[2].groupList[0].elementIconList[0]
      }
    },
    getTwo:function(arr) {
      this.two ={
        title:arr[3].ftitle,
        images:arr[3].groupList[0].elementList[0].eproductImgA,
        etitle1:arr[3].groupList[0].elementList[0].etitle1,
        etitle2:arr[3].groupList[0].elementList[0].etitle2,
        etitle3:arr[3].groupList[0].elementList[0].etitle3,
        ejumpUrl:arr[3].groupList[0].elementList[0].ejumpUrl
      }
    },
    getThree:function(arr) {
      this.three = {
        title : arr[4].ftitle,
        fsubtitle: arr[4].fsubtitle,
        fjumpUrl: arr[4].fjumpUrl,
        images: arr[4].groupList[0].elementList
      }
    },
    getFour: function (arr) {
        this.four = {
            title : arr[5].ftitle,
            fsubtitle: arr[5].fsubtitle,
            fjumpUrl: arr[5].fjumpUrl,
            data: arr[5].groupList[0].elementList,
            banner: arr[6].groupList[0].elementList[0].eproductImgA,
            lk: arr[6].groupList[0].elementList[0].ejumpUrl,
            terminal: arr[7].groupList[0].elementIconList[0]
        }
    },
    link:function(url) {
      window.location.href=url;
    }
  },
  components: {
    slider
  }
}
</script>

<style lang="css">
</style>
