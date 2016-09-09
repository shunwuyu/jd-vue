<template>
    <div class="slider">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="item in slides" class="swiper-slide" v-link="{params:{id:item.id}}">
					<img class="img" v-bind:src="item.image" >
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	export default {
    props:['data'],
		data: function() {
			return {
				slides: [

				]
			}
		},
    watch:{
      'data': function(newData, oldData) {
        var self = this;
        var images = newData[1].groupList[0].elementList;
        for(var i=0; i<images.length; i++) {
            self.slides.push({
              image: images[i].eproductImgA
            })
        }
      }
    },
		ready: function() {
			new window.Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        spaceBetween: 0,
		        centeredSlides: true,
		        autoplay: 4000,
		        autoplayDisableOnInteraction: false,
		        observer: true,
		        lazyLoading: true,
		        resistanceRatio: 0
      		})
		}
	}
</script>

<style>
  @import "../../static/swiper.css";
  .swiper-container{
    height: 100%;
  }
  .swiper-slide{
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    .swiper-mask{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
      background-image: linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
    }
    .slider-title{
      position: absolute;
      bottom: 23px;
      line-height: 1.2;
      left: 0;
      padding: 0 18px;
      font-weight: 300;
      font-size: 21px;
      color: #ffffff;
    }
  }
	.img{
		width:100%;
	}
  .swiper-pagination-bullet{
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background: #5a5a5a;
    opacity: .8;
  }
  .swiper-pagination-bullet-active{
    opacity: 1;
    background: #f4f5ff;
  }
</style>
