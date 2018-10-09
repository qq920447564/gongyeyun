<template>
   <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="计划人员：">
        <el-input v-model="formInline.option" placeholder="计划人员"></el-input>
    </el-form-item>
    <el-form-item label="产品编号:">
        <el-input v-model="formInline.user" placeholder="产品编号"></el-input>
    </el-form-item>
    <el-form-item label="班组:">
        <el-input v-model="formInline.option" placeholder="班组"></el-input>
    </el-form-item>
    <el-form-item label="量试:">
        <el-input v-model="formInline.option" placeholder="量试"></el-input>
    </el-form-item>
    <el-form-item label="选择日期:">
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    
    <!-- <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
        </el-select>
    </el-form-item> -->
    <!-- <el-form-item>
        <el-button type="success" @click="onSubmit">查询</el-button>
    </el-form-item> -->
    </el-form>
</template>
<script>
    export default {
    data() {
      return {
         value1: '',
        formInline: {
          user: '',
          region: '',
          option:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
    
</style>
