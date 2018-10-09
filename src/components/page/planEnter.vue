<template>
<div >
     <v-pageTitle vtitle="生产计划录入"></v-pageTitle>
      <el-row :gutter="20">
           
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
           <enterForm></enterForm>
           
            </el-col>
            
        </el-row>
</div>



</template>
<script>

import vPageTitle from '../common/pageTitle.vue';
import inlineFrom from '../forms/inlineForm.vue';
import planTable from '../tables/planTable.vue'
import enterForm from '../forms/enterForm.vue';
export default {
    components:{
      vPageTitle ,inlineFrom ,planTable,enterForm
    }
}
</script>
