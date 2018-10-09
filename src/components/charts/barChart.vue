<template>
    <div class="c-charts" >
        <IEcharts :option="bar"  ></IEcharts>
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
            bar: {
               title: {
                   

                        text: '件数'
                    },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // legend: {
                //     data: ['待料','故障','调机','换线','缺人']
                // },
                grid: {
                    x:'10%',
                    y:'10%',
                    width:'85%',
                    show:true,
                  
                },
                yAxis:  {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#999'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#ddd'
                        }
                    }
                   
                },
                xAxis: {
                    type: 'category',
                    data: ['待料','故障','调机','换线','缺人'],
                     axisLine:{
                        lineStyle:{
                            color:'#999'
                        }
                    },
                    splitLine:{
                        show:true, 
                        lineStyle:{
                            color:'#ddd'
                        }
                    }
                    
                },
                series: [
                    {
                        itemStyle:{
                            normal:{
                                color:'#63bbb2',
                                opacity:0.9
                            }
                        },
                        
                        
                        name: '待料',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0]
                    },
                   
                    {
                        itemStyle:{
                            normal:{
                                color:'#ef8989',
                                opacity:0.9
                            }
                        },
                        name: '故障',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0]
                    },
                    {
                        itemStyle:{
                            normal:{
                                color:'#6cc5df',
                                opacity:0.9
                            }
                        },
                        name: '调机',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0]
                    },
                    {
                        itemStyle:{
                            normal:{
                                color:'#b1ce4d',
                                opacity:0.9
                            }
                        },
                        name: '换线',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0]
                    },
                    {
                        itemStyle:{
                            normal:{
                                color:'yellow',
                                opacity:0.9
                            }
                        },
                        name: '缺人',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0]
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