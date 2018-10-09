<template>
   <el-table :data="tableData" style="width: 100%" border stripe>
      <el-table-column prop="id"  label="计划入库吨数"  ></el-table-column>
      <el-table-column prop="userName" label="实际入库吨数" ></el-table-column>
      
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [ 
           {
            id:'500.00',
            userName: '399.00',
           
          }]
        }
      }
    }
</script>
<style scoped>
    
</style>
