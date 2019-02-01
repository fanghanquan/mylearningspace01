<template>
  <div class="page-bar">
    <ul>
      <li v-if="showFirst"><a @click="cur--">上一页</a></li>
      <li v-for="index in indexs" :key="index" v-bind:class="{'active': cur == index}"><a @click="btnClick(index)">{{index}}</a></li>
      <li v-if="showLast"><a @click="cur++">下一页</a></li>
      <li class="page-all">共<i>{{all}}</i>页</li>
    </ul>
  </div>
</template>


<script>
export default {
  name:'pageBar',
  data() {
    return {
      all:20,
      cur:1,
    }
  },
  computed: {
    indexs: function(){
      var left = 1
      var right = this.all
      var ar = []
      if(this.all>= 11){
        if(this.cur > 5 && this.cur < this.all-4){
                left = this.cur - 5
                right = this.cur + 4
        }else{
            if(this.cur<=5){
                left = 1
                right = 10
            }else{
                right = this.all
                left = this.all -9
            }
        }
      }
      while (left <= right){
        ar.push(left)
        left ++
      }
      return ar
    },
    showLast: function(){
        if(this.cur == this.all){
            return false
        }
        return true
    },
    showFirst: function(){
        if(this.cur == 1){
            return false
        }
        return true
    }
  },
  methods: {
    btnClick: function(data){//页码点击事件
        if(data != this.cur){
            this.cur = data
        }
    },
  },
}
</script>

<style scope>
.page-bar{
    margin: 60px 0;
}
.page-bar li{
    display: inline-block;
    margin: 5px;
    font-size: 18px;
}
.page-bar li:hover{
    color: red;
    cursor:default;
}
.page-bar .page-all:hover{
    color: #2c3e50;
}
.page-bar .page-all i{
    margin: 0 6px;
}
.page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
</style>
