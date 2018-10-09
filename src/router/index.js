import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import AmCharts from '@/components/page/BasicCharts';
import FormInput from '@/components/page/FormInput';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';
import EditorPage from '@/components/page/EditorPage';
import MarkdownPage from '@/components/page/MarkdownPage';
import TodoList from '@/components/page/TodoListPage';
import planEnter from '@/components/page/planEnter';
import planList from '@/components/page/planList'
import qualityEnter from '@/components/page/qualityEnter'
import oeePage from '@/components/page/oeePage'
import qualityList from '@/components/page/qualityList'
Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },{
          path:'/DashBoard',
          component:DashBoard
        },{
          path:'/EditorPage',
          component:EditorPage
        },{
          path:'/MarkdownPage',
          component:MarkdownPage
        },{
          path:'/BasicCharts',
          component:AmCharts
        },{
          path:'/FormInput',
          component:FormInput
        },{
          path:'/FormLayouts',
          component:FormLayouts
        },{
          path:'/planEnter',
          component:planEnter
        },{
          path:'/TodoList',
          component:TodoList
        },,{
          path:'/planList',
          component:planList
        }
        ,{
          path:'/qualityEnter',
          component:qualityEnter
        },{
          path:'/oeePage',
          component:oeePage
        },{
          path:'/qualityList',
          component:qualityList
        }
        

      ]
    }
  ]
})
