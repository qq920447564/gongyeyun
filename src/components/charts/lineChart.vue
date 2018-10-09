<template>
    <div class="c-charts" >
        <IEcharts :option="line"  ></IEcharts>
    </div>
</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import IEcharts from 'vue-echarts-v3';
    export default {
        components:{
            vPageTitle,IEcharts
        },
        data: () => ({
            line: {
                    title: {
                        text: ''
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    // legend: {
                    //     data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    // },
                    
                    grid: {
                        left: '1%',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true,
                        show:true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['9月10日','9月11日','9月12日','9月13日','累计'],
                            axisLine:{lineStyle:{color:'#999'}},
                            splitLine:{show:true,lineStyle:{color:'#ddd'}}
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLine:{lineStyle:{color:'#999'}},
                            splitLine:{lineStyle:{color:'#ddd'}}

                        }
                    ],
                    series : [
                        {
                            itemStyle:{normal:{ color:'#96d6e8'}},
                            name:'9月10日',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[0.80,0.81,0.76,0.59]
                        },
                        {
                            itemStyle:{normal:{ color:'#e6d385'}},
                            name:'9月11日',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            
                        },
                        {
                            itemStyle:{normal:{ color:'#f4abab'}},
                            name:'9月12日',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                           
                        },
                        {
                            itemStyle:{normal:{ color:'#a6c733'}},
                            name:'9月13日',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[0.59]
                        },
                        {
                            itemStyle:{normal:{ color:'#4cb1a7'}},
                            name:'9月14 ',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            areaStyle: {normal: {}},
                           
                        },
                        {
                            itemStyle:{normal:{ color:'#4cb1a7'}},
                            name:'累计 ',
                            type:'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            areaStyle: {normal: {}},
                           
                        }
                    ]
                }  
            }),

            methods: {
            
               
            }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
   
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
    .c-charts{
        height:400px;
        width:100%;
    }
 
    
</style>