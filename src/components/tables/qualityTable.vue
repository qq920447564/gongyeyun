<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="产品编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="产线编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="不良数量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="原因分类"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="不良原因"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="生产批号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="检验员"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="创建人"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="创建时间"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>