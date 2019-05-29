<!--1 模版：html结构-->
<template>
  <div id="app"><!--有且只有一个根标签-->
    <!---->
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/HelloWorld">HelloWorld</router-link></li>
    </ul>
      <router-view></router-view>
  </div>
</template>

<!--2 行为：处理逻辑-->
<script>

export default {
  name: 'App',
  data(){
    return{
       
    }
  }
}
</script>

<!--3 样式-->
<style>

</style>
