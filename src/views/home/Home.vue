<template>
  <div class="container">
    <div class="block">
      <el-carousel height="100%" direction="vertical" :autoplay="false">
        <el-carousel-item class="homePic" v-for="item in 3" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" scoped src="./Home.scss"></style>
