<template>
	<!-- Main -->
	<div id="main" class="alt">
		<!-- One -->
		<section id="one">
			<div class="inner">
				<header class="major">
					<h1 style="color:#8f86c1;">前端技术收集</h1>
				</header>
				<h2 id="elements" style="font-size: 1.35em;font-weight:300;color:#c7c1ea;">链接模块</h2>
				<!-- Content 链接-->
				<ul style="font-size: 20px;">
					<li>前端特效框架：<a href="http://www.jq22.com/" target="_blank">http://www.jq22.com/</a></li>
					<li>git了解：<a href="http://blog.jobbole.com/78960/" target="_blank">http://blog.jobbole.com/78960/</a></li>
					<li>掘金网（帮助开发者成长的社区）：<a href="https://juejin.im/" target="_blank">https://juejin.im/</a></li>
					<li>HTML5前端数据库——Web SQL Database（SQLlite）：<a href="https://www.jianshu.com/p/64ded82068b0" target="_blank">https://www.jianshu.com/p/64ded82068b0</a></li>
					<li>upload文件上传插件使用：
						<a href="http://www.jb51.net/article/99179.htm" target="_blank">http://www.jb51.net/article/99179.htm</a>
						<br /><a href="https://www.kancloud.cn/shuiyueju/uploadifycn/79419">https://www.kancloud.cn/shuiyueju/uploadifycn/79419</a>
					</li>
					<li>scss学习：<a href="https://www.w3cschool.cn/sass/sass_overview.html" target="_blank">https://www.w3cschool.cn/sass/sass_overview.html/</a></li>
					<li>vue学习：<a href="https://cn.vuejs.org/v2/guide/" target="_blank">https://cn.vuejs.org/v2/guide/</a></li>
					<li>angular学习：<a href="https://www.w3cschool.cn/angular2/" target="_blank">https://www.w3cschool.cn/angular2/</a></li>
					<li>前端MVC模式框架：<a href="http://blog.csdn.net/xcymorningsun/article/details/53198690"  target="_blank">http://blog.csdn.net/xcymorningsun/article/details/53198690</a></li>
					<li>IT技术学习网：<a href="https://www.itying.com/" target="_blank">https://www.itying.com/</a></li>
					<li>弹框sweetAlert：<a href="http://www.layui.com/laydate/" target="_blank">http://www.layui.com/laydate/</a>(特点：小巧，不够功能还不是很强大)</li>
					<li>layUI：<a href="http://www.layui.com/" target="_blank">http://www.layui.com/</a>(它的时间插件还是很好用的，后台管理系统也有不错的模板)</li>
					<li>多张图片上传，且可在前端预览：<a href="http://www.jq22.com/jquery-info5231" target="_blank">http://www.jq22.com/jquery-info5231</a></li>
					<li>Mand Mobile是面向金融场景设计的移动端组件库，基于Vue.js实现。目前已实际应用于滴滴四大金融业务板块的10余款产品中。<a href="https://didi.github.io/mand-mobile/#/docs/introduce" target="_blank">https://didi.github.io/mand-mobile/#/docs/introduce</a></li>
					<li>js处理函数防抖和节流 <a href="https://mp.weixin.qq.com/s/Vkshf-nEDwo2ODUJhxgzVA" target="_blank">https://mp.weixin.qq.com/s/Vkshf-nEDwo2ODUJhxgzVA</a></li>
					<li>vue-cli脚手架搭建项目<a href="https://www.jianshu.com/p/1626b8643676" target="_blank"></a>https://www.jianshu.com/p/1626b8643676</li>
				</ul>				
				<!--<div>
					<h2>笔记</h2>
				</div>-->
				<!--<hr class="major" />-->

				<!-- Elements -->
				<h2 id="elements" style="font-size: 1.35em;font-weight:300;color:#c7c1ea;">笔记</h2>
				<span style="font-size: 20px;"> vue学习
					<a href="learnVue.html" target="_blank" style="margin-left: 15px;">详情</a>
				</span>
				<span style="font-size: 20px;margin-left:100px;"> sass学习 
					<a href="learnSass.html" target="_blank" style="margin-left: 15px;">详情</a>
				</span>
			</div>
		</section>
		<!--表情评论-->
		<div class="emoticons photo_detail_comment js_photo_detail">
			<div class="publisher">
				<span>
					<label for=""><i>*</i>姓名</label>
					<input type="text" name="" id="" value="" placeholder="请填写姓名" class='js_name'/>
				</span>&nbsp;&nbsp;&nbsp;
				<span>
					<label for=""><i>*</i>联系电话/邮箱</label>
					<input type="text" name="" id="" value="" style="width:250px;" class="js_relation"/>
				</span><br />
				
				<p style="margin-top: 15px;">
					<textarea name="content" class="photo_detail_textarea" placeholder="请开始你的表演..."></textarea>
					<button class="format" @click="formatFun($event)">发表</button>
				</p>
				<p class="photo_detail_face"><a class="trigger" href="javascript:;">☺</a></p>
				<div class="result">123 <p class="photo_detail_p"><span>吴先生</span><span>2018-07-02</span></p></div>
			</div>
		</div>
		<!--表情评论-->
	</div>
</template>

<script>
	import "../assets/js/jquery.emoticons.js";
	export default{
		data(){
			return{
				content:[],    //表情内容
				emoApi:'',
			}
		},
		created(){
			let	$window = $(window),
				 $body = $('body');
			$window.on('load pageshow', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});
			
		},
		updated(){
			this.commitCreat();
		},
		methods:{
			commitCreat(){
				var self_ = this;
				//表情插件
				$.emoticons({
					'activeCls':'trigger-active'
				},function(api){
					$('.format').each(function(index,elem){
						self_.content.push($($('textarea[name="content"]')[index]));
					})
					self_.emoApi = api;
				});
			},
			formatFun(e){
				//点击评论
				var self_ = this;
//				var index_ = $(e.target).attr('data-id');
				var index_ = 0;
				//内容
				var content_ = self_.emoApi.format(self_.content[index_].val());
				var $div_commit = $(e.target).parent('p').parent('div').parent('div')
				var name = $($('.js_name')[index_]).val()
				var telOrEma = $div_commit.find('.js_relation').val();
				//判断名字和内容是否填写了
				if(name){
					if(telOrEma){
						if($div_commit.find('.photo_detail_textarea').val()){
							var tel = /^1\d{10}$/;
							var email=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;  
							
							if (tel.test(telOrEma) || email.test(telOrEma)){
								var temp = '<div class="result">'+content_+'<p class="photo_detail_p"><span>'
								+name+'</span><span>2018-07-02</span></p></div>';
								$div_commit.find('.publisher').append(temp);
								$div_commit.find('.photo_detail_textarea').val("");
								//调接口 
//								self_.postCommit(content_,name,telOrEma,$(e.target).attr('data-bookId'));
							}else{ 
								alert("你填的号码格式/邮箱格式不正确！");
							}
						}else{
							alert("还没有填写内容哦！");
						}
					}else{
						alert("请留下您的联系方式！");
					}
				}else{
					alert("请留下您的大名！");
				}
			},
		}
		
	}
</script>
<style>
	@import "../assets/css/publicHtmls";
</style>
<style scoped>
	.books_worksName{
		font-size:15px;
		margin-left:15px;
	}
	i.back_heart5{
		display: inline-block;
	    width: 125px;
	    height:20px;
	    background-image: url(../assets/images/heart.png);
	    background-size: 25px 20px;
	    background-repeat: repeat-x;
	    position: relative;
	    top: 6px;
	    left: 8px;
	}
	i.back_heart4{
		display: inline-block;
	    width: 100px;
	    height:20px;
	    background-image: url(../assets/images/heart.png);
	    background-size: 25px 20px;
	    background-repeat: repeat-x;
	    position: relative;
	    top: 6px;
	    left: 8px;
	}
	i.back_heart3{
		display: inline-block;
	    width: 75px;
	    height:20px;
	    background-image: url(../assets/images/heart.png);
	    background-size: 25px 20px;
	    background-repeat: repeat-x;
	    position: relative;
	    top: 6px;
	    left: 8px;
	}
	i.back_heart2{
		display: inline-block;
	    width: 50px;
	    height:20px;
	    background-image: url(../assets/images/heart.png);
	    background-size: 25px 20px;
	    background-repeat: repeat-x;
	    position: relative;
	    top: 6px;
	    left: 8px;
	}
	i.back_heart1{
		display: inline-block;
	    width: 25px;
	    height:20px;
	    background-image: url(../assets/images/heart.png);
	    background-size: 25px 20px;
	    background-repeat: repeat-x;
	    position: relative;
	    top: 6px;
	    left: 8px;
	}
</style>