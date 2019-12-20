<template>
  <div>
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="img:statics/icons/vue.png" size="56px" />
          <div class="q-mt-md text-center">
            Vue.js
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="img:statics/icons/react.jpg" size="56px" />
          <div class="q-mt-md text-center">
            React.js
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="img:statics/icons/js.jpg" size="56px" />
          <div class="q-mt-md text-center">
            Javascript
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="img:statics/icons/css3.jpg" size="56px" />
          <div class="q-mt-md text-center">
            CSS3
          </div>
        </q-carousel-slide>
      </q-carousel>
      </div>
      <div class="q-px-lg q-pb-md">
    <q-timeline layout="loose" color="secondary">
      <q-timeline-entry heading>
        履历
      </q-timeline-entry>

      <q-timeline-entry
        title="壹平方科技有限公司"
        subtitle="2019至今"
        side="left"
      >
        <div>
          <h6>前端开发组长</h6>
          <p class="wow bounceInLeft">
            对产品需求进行调研并进行技术选型，对已确定的需求进行技术评估、模块拆分、分配任务给组员、并评估完成时间。在项目进行开始时，跟踪项目进度并汇报给项目经理，带领新同事或初、中级前端工程师进行技术的提升，或指导疑难问题的处理。项目后期对项目的bug进行修复、功能维护、并进行项目总结，小组内部也会进行简短的针对开发中遇到的问题进行讨论、交流
          </p>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="深圳雁联"
        subtitle="2018至2019"
        side="right"
      >
        <div>
          <h6>前端中级开发工程师</h6>
          <p class="wow bounceInLeft">
            参加需求评审，进行前端功能项目需求的开发，完成产品的提议提高用户体验，以及ui设计师的界面还原。对新技术的储备做提前研究学习
          </p>
        </div>
      </q-timeline-entry>

      <!-- <q-timeline-entry heading>November, 2017</q-timeline-entry> -->

      <q-timeline-entry
        title="重庆新时来科技有限公司"
        subtitle="2014至2018"
        side="left"
      >
        <div>
          <H6>前端开发（ASP.NET开发）、前端开发</H6>
           <p class="wow bounceInLeft">
            初入公司时，做的时ASP.NET后台开发，2年左右。后期因为公司项目的需要使用Angular.js(Angular 1.x)开始进行技术调研进行webApp的开发，2016年下半年转型公司前端，进行前端开发并自学了vue和react。并开进行了vue的项目的实际开发。
          </p>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="重庆风信科技有限公司"
        subtitle="2013年至2014"
        side="right"
      >
        <div>
          <H6>测试工程师</H6>
          <p class="wow bounceInLeft">第一年毕业进入公司，作为了公司的测试人员的储备，并开始了近1年的测试工作，有过功能测试以及部分的压力测试项目bug的追踪和回测</p>
        </div>
      </q-timeline-entry>
      <q-timeline-entry
      >
      </q-timeline-entry>
    </q-timeline>
  </div>
      <!-- <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="index in 4"
          :key="index"
          transition="scale"
          class="example-item"
        >
          <q-card class="q-ma-sm">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section>
              <div class="text-h6">Card #{{ index }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div> -->
      <div class="row justify-between">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        >
          <h3 class="text-white">我热爱前端，因为 Everything's Eventual</h3>
        </q-parallax>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import animated from 'animate.css'
import { WOW } from 'wowjs'
Vue.use(animated)
export default {
  name: 'PageOne',
  data() {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor'
    }
  },
  mounted() {
    new WOW().init()
  }
}
</script>
<style>
 .text-white{
   text-align: center
 }
</style>
