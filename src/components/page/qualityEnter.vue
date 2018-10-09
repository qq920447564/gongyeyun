<template>
<div >
     <v-pageTitle vtitle="质量问题录入"></v-pageTitle>
      <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24"> 
     <qualityForm></qualityForm>
            </el-col>
            
        </el-row>
</div>



</template>
<script>

import vPageTitle from '../common/pageTitle.vue';

import planTable from '../tables/planTable.vue'
import qualityForm from '../forms/qualityForm'

 
export default {
    components:{
      vPageTitle  ,planTable,qualityForm
    }
}
</script>
