<template>
  <div class="container" v-scroll="scrollCtrl">
    <div class="loginMask">
        <div class="loginCircle">登录</div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <div class="block">
      <el-carousel height="100%" direction="vertical" :autoplay="false" ref="carousel">
        <el-carousel-item class="homePic" v-for="item in 3" :key="item"></el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" scoped src="./Home.scss"></style>
