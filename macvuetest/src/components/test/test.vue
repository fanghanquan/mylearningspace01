<template>
    <div id="test">   
    <fieldset>
        <legend>
            我创建了一个表格
        </legend>
        <div class="form-group">
            <label>Name:</label>
            <input type="text"/>
        </div>
        <div class="form-group">
            <label id="styleTest">Age:</label>
            <input type="text">    
        </div>   
        <div class="form-group">
            <label>Sex:</label>
            <select>
                <option value="Male">Male</option>
                <option value="Famale">Famale</option>
            </select>
        </div>
        <div class="form-group">
            <button>Creat</button>   
        </div> 
    </fieldset>
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Sex</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><button>Delete</button></td>    
            </tr>    
        </tbody>
    </table>
    <router-view></router-view>
    </div>
</template>

<!--<script>
    export default{
        name : 'test',
        data: {
            return{
                newPerson:{
                    name:'',
                    age:'0',
                    sex:'Male',
                },
                people: [{
                    name: 'Jack',
                    age: 30,
                    sex: 'Male'
                    }, {
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
        }            
    }
</script>  -->


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
}
thead td{
    background-color:mediumspringgreen;
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
    width: 24%;
    line-height: 36px;
}
</style>