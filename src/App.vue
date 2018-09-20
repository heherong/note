<template>
  <div id="app">
    <div id="wrapper">
			<!-- Header -->
			<header id="header" class="alt">
				<router-link to="/" class="logo"><strong>何蓉</strong> <span>herong</span></router-link>
				<nav>
					<a href="#menu">菜单</a>
				</nav>
			</header>
			<!-- Menu -->
			<nav id="menu">
				<ul class="links">
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to="/photos">旅游与摄影</router-link></li>
					<li><router-link to="/technology">前端技术</router-link></li>
					<li><router-link to="/mylife">点滴生活</router-link></li>
					<li><router-link to="/books">书籍</router-link></li>
					<li><router-link to="/doitmyself">手工</router-link></li>
					<li><router-link to="/foods">美食篇</router-link></li>
				</ul>
				<ul class="actions vertical">
					<li><a href="javascript:void(0)" class="button special fit">返回</a></li>
					
				</ul>
			</nav>
			<!--利用vue-router的<router-view>进行占位-->
			<router-view></router-view>
				
			<!-- Footer -->
			<footer id="footer">
				<div class="inner">
					<ul class="copyright">
						<li>来自: <a href="https://weibo.com/5496821501/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">@何蓉丫</a></li>
					</ul>
				</div>
			</footer>
		</div>
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  
  data(){  ///等价于es5的data:function(){}
			return {
				
			}
		},
		methods:{
			
		}
	
}
</script>

<style>
</style>
