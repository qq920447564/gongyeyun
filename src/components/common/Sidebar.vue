<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <!-- <el-menu-item index="DashBoard">
               
                    <span class="sb-icon"><i class="material-icons">home</i></span>
                    <span class="sb-cn">DashBoard</span>
            </el-menu-item> -->

            <el-submenu index="2">
                <template slot="title">
               
                    <span class="sb-icon"><i class="material-icons">perm_data_setting</i></span>
                    <span class="sb-cn">综合报表</span>
                 
                </template>
                <el-menu-item index="EditorPage">每日汇总看板</el-menu-item>
                <el-menu-item index="">入库出货统计</el-menu-item>
                <el-menu-item index="">生产数据统计</el-menu-item>
                <el-menu-item index="oeePage">产线OEE统计</el-menu-item>
                <el-menu-item index="">生产不良统计</el-menu-item>
                     
                
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">pie_chart</i></span>
                    <span class="sb-cn">生产管理</span>
                </template>
                <el-menu-item index="planEnter"> 生产计划录入</el-menu-item>
                 <el-menu-item index=""> 生产信息录入</el-menu-item>
                  <el-menu-item index="planList"> 生产计划列表</el-menu-item>
                   <el-menu-item index=""> 生产信息列表</el-menu-item>      
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">content_paste</i></span>
                    <span class="sb-cn">质量管理</span>
                </template>
                <el-menu-item index="qualityEnter">质量问题上报</el-menu-item>
                <el-menu-item index="qualityList"> 质量问题列表</el-menu-item>
                 <el-menu-item index=""> 抽检结果上报</el-menu-item>
                  <el-menu-item index=""> 抽检结果记录</el-menu-item>
            </el-submenu>

             <el-submenu index="5">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">border_all</i></span>
                    <span class="sb-cn">停机管理</span>
                </template>
                <el-menu-item index="">停机事件上报</el-menu-item>
                  <el-menu-item index="">停机损失列表</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">border_all</i></span>
                    <span class="sb-cn">系统管理</span>
                </template>
                <el-menu-item index="">用户权限管理</el-menu-item>
                  <el-menu-item index="">产品参数设置</el-menu-item>
            </el-submenu>


 

 
            
        </el-menu>
    </div>
</template>
<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 66px;
        bottom:0;
        background: #324157;
       
    }
    .sidebar > ul {
        height:100%;
    }

   .el-menu-item, .el-submenu__title{
       font-size:14px;
     
   }
   
    .material-icons {font-size:12px;}
</style>
