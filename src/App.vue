<template>
  <div id="app">
    <router-link to="/">刷题中心</router-link>
    <router-link to="/exam">模拟考试</router-link>
    <!--<div v-if="this.$store.state.token">-->
      <!--<a>{{this.$store.state.username}}</a>-->
      <!--<a @click="logout">注销</a>-->
    <!--</div>-->
    <!--<div v-else>-->
      <!--<router-link to="/login">登录</router-link>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{

  }
}
</script>

<style>

</style>
