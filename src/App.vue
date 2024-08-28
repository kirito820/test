<template>
  <el-container>
    <el-header class="header">
      <el-menu mode="horizontal" v-bind:router="true">
        <el-menu-item index="/home">首页</el-menu-item>
        <el-sub-menu index="shopping">
          <template #title>购物</template>
          <el-menu-item index="/cart">购物车</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
        </el-sub-menu>
        <!-- <el-sub-menu index="student">
          <template #title>学生</template>
          <el-menu-item index="/stu-list">学生列表</el-menu-item>
          <el-menu-item index="/stu-add">添加学生</el-menu-item>
        </el-sub-menu> -->
      </el-menu>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style>
body {
  margin: 0;
}
.header {
  height:10vh;
  background-color: #dfdfdf;
}
.main {
  height:90vh;
  background-color: #8ec8e3;
}
</style>
