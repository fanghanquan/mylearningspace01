<template>
    <div id="testTable">
    <fieldset>
        <legend>
            我创建了一个表格
        </legend>
        <div class="form-group">
            <label>Name:</label>
            <input type="text" v-model="newPerson.name">
        </div>
        <div class="form-group">
            <label id="styleTest">Age:</label>
            <input type="text" v-model="newPerson.age">
        </div>
        <div class="form-group">
            <label>Sex:</label>
            <select v-model="newPerson.sex">
                <option value="Male">Male</option>
                <option value="Famale">Famale</option>
            </select>
        </div>
        <div class="form-group">
            <button @click="createPerson">Creat</button>
        </div>
    </fieldset>
    <table >
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Sex</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(person, index) in people" :key="index">
                <td>{{person.name}}</td>
                <td>{{person.age}}</td>
                <td>{{person.sex}}</td>
                <td><button @click="deletePerson(index)">Delete</button></td>
            </tr>
        </tbody>
    </table>
    <div class="page-bar">
      <ul>
        <li v-if="showFirst"><a @click="cur--">上一页</a></li>
        <li v-for="index in indexs" :key="index" v-bind:class="{'active': cur == index}"><a @click="btnClick(index)">{{index}}</a></li>
        <li v-if="showLast"><a @click="cur++">下一页</a></li>
        <li class="page-all">共<i>{{all}}</i>页</li>
      </ul>
    </div>
    </div>
</template>

<script>
    export default{
        name : 'testTable',
        data(){
            return{
                newPerson:{
                    name:'',
                    age:'0',
                    sex:'Male',
                },
                people: [
                    {
                    name: 'Jack',
                    age: 30,
                    sex: 'Male'
                    },
                    {
                    name: 'Bill',
                    age: 26,
                    sex: 'Male'
                    }, {
                    name: 'Tracy',
                    age: 22,
                    sex: 'Female'
                    }, {
                    name: 'Chris',
                    age: 36,
                    sex: 'Male'
                }],
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
            createPerson:function(){
                this.people.push(this.newPerson);
                this.newPerson = {name:'',age:0,sex:'Male'};
            },
            deletePerson:function(index){
                this.people.splice(index,1);
            },
            btnClick: function(data){//页码点击事件
                if(data != this.cur){
                    this.cur = data
                }
            },
        },
    }
</script>

<style scope>
.form-group{
    color:darkslategray;
    line-height: 40px;
    font-weight: bolder;
}
.form-group input{
    margin: 0 20px;
}
.form-group select{
    margin: 0 45px;
}
.form-group button{
    width: 80px;
    height: 24px;
}
#styleTest{
    margin-left: 14px;
}
table{
    width: 100%;
    border-collapse: collapse;

}
thead td{
    background-color:mediumspringgreen;
    border: 1.5px solid #2c3e50;

}
tbody td button{
    background-color:rgb(119, 228, 155);
    width: 70px;
    height: 25px;
    border-radius: 5px;
    color:white;
    font-weight: bolder;
    font-size: 15px;
}
td{
    width: 25%;
    line-height: 36px;
    border: 1px solid mediumspringgreen;
}
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
