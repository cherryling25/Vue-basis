<!--1 模版：html结构-->
<template>
  <div id="home"><!--有且只有一个根标签-->
    <!---->
      <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
      <HelloWorld v-bind:cherryf="cherrys"></HelloWorld>
      <HelloWorld v-bind:cherryf="cherrys"></HelloWorld>	
      <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!--2 行为：处理逻辑-->
<script>
//局部注册组件
import HelloWorld from './HelloWorld'
import Header from './Header'
import footer from './footer'

export default {
  name: 'home',
  data(){
    return{
       cherrys:[
        /*{name:"cherry",position:"Web开发",show:false},
        {name:"cherry",position:"Web开发",show:false},
        {name:"cherry",position:"Web开发",show:false},
        {name:"cherry",position:"Web开发",show:false},
        {name:"cherry",position:"Web开发",show:false},
        {name:"cherry",position:"Web开发",show:false},
        {name:"cherry",position:"Web开发",show:false}*/


      ],
      title:"传递的是一个值"
    }
  },

  methods:{
    updateTitle(title){
      this.title= title;
    }
  },

  components: {
    HelloWorld ,
    "app-header":Header,
    "app-footer":footer
  },
  created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users")//请求的别的网络上的数据
      //如果请求成功的话，就会讲数据传给data
        .then((data) => {
            //console.log(data);
            this.cherrys = data.body;//就会把数据赋给cherrys
        })
  }
}
</script>

<!--3 样式-->
<style>

</style>
