<template>

<div >
     <v-pageTitle vtitle="质量问题列表"></v-pageTitle>
      <el-row :gutter="20">
           
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
          
           <qualityTable></qualityTable>
            </el-col>
            
        </el-row>
</div>


</template>
<script>
import vPageTitle from '../common/pageTitle.vue';
import qualityTable from '../tables/qualityTable.vue'
export default {
  components:{

      vPageTitle,qualityTable
  }
    
}
</script>
<style>



</style>
