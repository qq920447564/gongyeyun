<template>
<div >
     <v-pageTitle vtitle="产线OEE统计"></v-pageTitle>
      <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <oeeChart></oeeChart>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
               <oeeTable></oeeTable>
            </el-col>
            
        </el-row>
</div>



</template>
<script>

import vPageTitle from '../common/pageTitle.vue';
import inlineFrom from '../forms/inlineForm.vue';
import planTable from '../tables/planTable.vue'
import enterForm from '../forms/enterForm.vue';
import oeeTable from '../tables/oeeTable.vue'
import oeeChart from '../charts/oeeChart.vue'
import barChart from '../charts/barChart.vue'

export default {
    components:{
      vPageTitle ,inlineFrom ,planTable,enterForm,oeeTable,oeeChart, barChart
    }
}
</script>
