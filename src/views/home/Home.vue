<template>
  <div class="container" v-scroll="scrollCtrl">
    <div class="loginMask" v-if="showLogin">
      <div class="loginCircle" ref="loginCircle" @click="toLogin">登录</div>
      <div class="left" ref="left"></div>
      <div class="right" ref="right"></div>
    </div>
    <div class="block" ref="block">
      <el-carousel
        height="100%"
        direction="vertical"
        @change="changeCarousel"
        :autoplay="false"
        ref="carousel"
      >
        <el-carousel-item class="homePic" v-for="item in 3" :key="item">
          <div class="triangleWrap" v-show="nowPage==0&&!showLogin">
            <div class="topTriangle" ref="topTriangle"></div>
            <div class="bottomTriangle" ref="bottomTriangle"></div>
            <div class="contentWrap" v-if="showUser">
              <div class="content">
                <div class="user">
                  <span class="photo"></span>
                  <span class="value">Mr Wen</span>
                </div>
                <div class="weight">
                  <span class="name">体重:</span>
                  <span class="value">80</span>kg
                </div>
                <!-- 日消耗总热量 -->
                <div class="consume">
                  <span class="name">日消耗总热量:</span>
                  <span class="value">2558.875</span>
                </div>
              </div>
              <!-- ----------- -->
              <div class="content2">
                <div class="user">
                  <span class="photo">
                      <img src="../../assets/images/bds.png" alt="">
                  </span>
                  <span class="value">Miss Wang</span>
                </div>
                <div class="weight">
                  <span class="name">体重:</span>
                  <span class="value">80</span>kg
                </div>
                <!-- 日消耗总热量 -->
                <div class="consume">
                  <span class="name">日消耗总热量:</span>
                  <span class="value">2558.875</span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" scoped src="./Home.scss"></style>
