<template>
  <div class="hello">
    <ul>
      <li v-for="cherry in cherryf" v-bind:key="cherry">
          <h2>{{cherry.name}}</h2>
          <h3>{{cherry.email}}</h3>
      </li>
    </ul>

    <button v-on:click="deleteUser">删除</button>
  </div>
</template>


<script>
export default {
  name: 'helloWorld',
  //props:["cherrys"],
  props:{
      cherryf:{
          type:Array,
          required:true
      }
  },
  data () {
    return {
     
    }
  },
  methods:{
    deleteUser:function(){
      this.cherryf.pop();
    }
  }
}
</script>


<style scoped>
  .users{
    width: 100%;
    max-width: 1200px;
    margin:40px auto;
    padding:0 20px;
    box-sizing: border-box;   /*就不用计算padding*/
  }

  ul{
    list-style-type: none;
    display: flex;    /*li 都在一行*/
    flex-wrap: wrap;  /*li 在容器里，不会超出*/
    padding: 0;
  }

  li{
    flex-grow: 1;   /*如果只有一个 li 就撑满整行，两个 li 时就两个撑满整行*/
    flex-basis: 200px;  /*每一个 li 的宽*/
    text-align: center;
    padding: 30px;
    border:1px solid #222;
    margin: 10px;
  }
</style>
