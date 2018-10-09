<template>
   <el-table :data="tableData" style="width: 100%" border stripe>
      <el-table-column prop="id"  label="9.10"  ></el-table-column>
      <el-table-column prop="userName" label="9.11" ></el-table-column>
      <el-table-column prop="age" label="9.12"> </el-table-column>
      <el-table-column prop="ability" label="9.13" > </el-table-column>

    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [ 
           {
            id:'80%',
            userName: '81%',
            age: '76%',
            ability: '59%',
            value:'73%'
          }]
        }
      }
    }
</script>
<style scoped>
    
</style>
