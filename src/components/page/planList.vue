<template>

<div >
     <v-pageTitle vtitle="生产计划列表"></v-pageTitle>
      <el-row :gutter="20">
           
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
           <planTable></planTable>
           
            </el-col>
            
        </el-row>
</div>


</template>
<script>
import vPageTitle from '../common/pageTitle.vue';
import planTable from '../tables/planTable.vue'
export default {
  components:{

      vPageTitle,planTable
  }
    
}
</script>
<style>



</style>
