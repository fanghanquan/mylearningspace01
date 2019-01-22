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
    <router-view></router-view>
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
                }]
            }
        },
        methods: {
            createPerson:function(){
                this.people.push(this.newPerson);
                this.newPerson = {name:'',age:0,sex:'Male'};
            },
            deletePerson:function(index){
                this.people.splice(index,1);
            }
        },            
    }
</script>

<style>         
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
</style>