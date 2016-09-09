import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Index from './components/Index.vue'
import Home from './components/Home.vue'
import Invest from './components/Invest.vue'
import Iou from './components/Iou.vue'
import Crowdfunding from './components/Crowdfunding.vue'
import User from './components/User.vue'
import Swiper from 'swiper'
Vue.use(vueRouter)
Vue.use(vueResource)
var router = new vueRouter();

/* eslint-disable no-new */
router.map({
  '/':{
    component:Index,
    subRoutes:{
      '/':{
        component:Home
      },
      '/home':{
        component:Home
      },
      '/invest':{
        component:Invest
      },
      '/iou':{
        component:Iou
      },
      '/crowdfunding':{
        component:Crowdfunding
      },
      '/user':{
        component:User
      }
    }
  }
})

router.start(App, '#app')
