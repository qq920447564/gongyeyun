<template>
   <el-table :data="tableData" style="width: 100%" border stripe>
      <el-table-column prop="id"  label="项目"  ></el-table-column>
      <el-table-column prop="userName" label="待料" ></el-table-column>
      <el-table-column prop="age" label="故障" > </el-table-column>
      <el-table-column prop="ability" label="调机"> </el-table-column>
      <el-table-column prop="value" label="换线" align="right"> </el-table-column>
      <el-table-column prop="value" label="缺人" align="right"> </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [ 
           {
            id:'件数',
            userName: '0',
            age: '0',
            ability: '0',
            value:'0'
          }]
        }
      }
    }
</script>
<style scoped>
    
</style>
