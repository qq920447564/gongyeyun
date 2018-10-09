<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="生产日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <!-- <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col> -->
  </el-form-item>
  <el-form-item label="产品编号">
    <el-select v-model="ruleForm.id1" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="产线编号">
    <el-select v-model="ruleForm.id2" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  
  <el-form-item label="不良数量" prop="number">
    <el-input v-model="ruleForm.number"></el-input>
  </el-form-item>

   <el-form-item label="原因分类">
    <el-select v-model="ruleForm.reasonType" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <!-- <el-form-item label="班组" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item><el-form-item label="量试" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="计划人员" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item> -->
  
  
  <el-form-item label="不良原因" prop="reason">
    <el-input type="textarea" v-model="ruleForm.reason"></el-input>
  </el-form-item>

  <el-form-item label="生产批号" prop="id3">
    <el-input type="textarea" v-model="ruleForm.id3"></el-input>
  </el-form-item>

 <el-form-item label="检验员" prop="check">
    <el-select v-model="ruleForm.check" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

 <el-form-item label="创建人" prop="builder">
    <el-select v-model="ruleForm.builder" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>


  <el-form-item label="创建时间" required>
    <el-col :span="11">
      <el-form-item prop="date3">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date3" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <!-- <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col> -->
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
         id1:'',
          id2: '',
          reason:'',
          date1: '',
          date2: '',
          date3:'',
          delivery: false,
          type: [],
          resource: '',
          check:'',
          builder:'',
          number:'',
          reasonType:'',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>