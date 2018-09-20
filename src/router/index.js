import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
//定义组件对象 component
import index from '@/components/index'
import books from '@/components/books'
import doitmyself from '@/components/doitmyself'
import foods from '@/components/foods'
import mylife from '@/components/mylife'
import photos from '@/components/photos'
import technology from '@/components/technology'
export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  },
    {
			path:'/',
			component:index,
			meta: {
		        title: '首页'
		    }
		},
		{
			path:'/books',
			component:books,
			meta: {
		        title: '书籍'
		    }
		},
		{
			path:'/doitmyself',
			component:doitmyself,
			meta: {
		        title: '手工'
		    }
		},
		{
			path:'/foods',
			component:foods,
			meta: {
		        title: '食物'
		    }
		},
		{
			path:'/mylife',
			component:mylife,
			meta: {
		        title: '我的生活'
		    }
		},
		{
			path:'/photos',
			component:photos,
			meta: {
		        title: '游记'
		    }
		},
		{
			path:'/technology',
			component:technology,
			meta: {
		        title: '技术'
		    }
		}
  ]
})
