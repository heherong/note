<template>
	<div id="main" class="alt">
		<!-- One -->
		<section id="one">
			<div class="inner">
				<header class="major">
					<h1 style="color:#dfb68f ;">书籍</h1>
				</header>
				<h3 style="color: #f1e2d3;font-size: 16px;">喜欢书里面的油墨香，却看的极少，以后的生活，需要更多的‘精神食粮’</h3>
				
				<!--model-->
				<div class="mylife_css_model mylife_js_model" v-for="(item,index) in lists">
					<p>
						<span class="image right"><img src="" alt="" /></span>
						<!--点击打开-->
						<img :src="require('@/assets/images/up.png')" class="button special small mylife_js_open mylife_css_open" :data-bookId='item.id' @click="commentOpen($event)">
						<!--点击关闭-->
						<img :src="require('@/assets/images/down.png')" class="button special small mylife_js_close mylife_css_close" @click="commitClose($event)">
						<h4>
							<span style="color: #dfb68f;" >{{item.title}}</span>
							<span class="books_worksName">推荐指数:
								<i v-if="item.recommend==1" class="back_heart1"></i>
								<i v-else-if="item.recommend==2" class="back_heart2"></i>
								<i v-else-if="item.recommend==3" class="back_heart3"></i>
								<i v-else-if="item.recommend==4" class="back_heart4"></i>
								<i v-else-if="item.recommend==5" class="back_heart5"></i>
							</span>
						</h4>
						<span class="mylife_css_font" v-html="item.body"></span>
						
					</p>
					<!--表情评论-->
					<div class="emoticons photo_detail_comment js_photo_detail"  style="display: none;">
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
								<button class="format" @click="formatFun($event)" :data-id="index" :data-bookId='item.id'>发表</button>
							</p>
							<p class="photo_detail_face"><a class="trigger" href="javascript:;">☺</a></p>
							<!--<div class="result">123 <p class="photo_detail_p"><span>吴先生</span><span>2018-07-02</span></p></div>-->
						</div>
					</div>
					<!--表情评论-->
				</div>
				
				<!--浏览次数-->
				<div class="tech-scan-mount js-scan-mount">
					<h4>浏览次数：<span>5</span></h4>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import "../assets/js/jquery.emoticons.js";
	export default{
		
		data(){
			return{
				back_heart1:'back_heart1',//推荐指数
				back_heart2:'back_heart2',
				back_heart3:'back_heart3',
				back_heart4:'back_heart4',
				back_heart5:'back_heart5',
				lists:[],     //数据渲染
				content:[],    //表情内容
				emoApi:'',
				dataUrl:'http://47.75.37.172:8080/rong/books/externalIndex.json', //总数据接口
				toGetCommit:'http://47.75.37.172:8080/rong/booksComment/externalIndex.json',//获取书籍对应评论
				toPostCommit:'http://47.75.37.172:8080/rong/booksComment/externalSave', //评论提交
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
			//当页面中的data和methods对象创建完毕以后，就会自动调用created
			this.getDatas();
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
			getDatas(){
				//实现数据请求
				var self_ = this;
				this.axios.get(self_.dataUrl)
				  	 .then(function (response) {
//				    	console.log(response);
				    	if(response.data.status){
	                    	self_.lists = response.data.data;
	                    }
				  	})
				  	.catch(function (error) {
				    	console.log(error);
				  	});
			},
			formatFun(e){
				//点击评论
				var self_ = this;
				var index_ = $(e.target).attr('data-id');
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
								self_.postCommit(content_,name,telOrEma,$(e.target).attr('data-bookId'));
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
			commentOpen(e){
				//获取对应评论
				var self_ = this;
				if(!$(e.target).attr('data-addCommit')){
					this.axios.get(self_.toGetCommit,{
						params:{
							booksId:$(e.target).attr('data-bookId')
						}
					}).then(function (res) {
				    	console.log(res);
				    	var response = res.data;
				    	if(response.status){
				    		for(let i=0;i<response.data.length;i++){
				    			var temp = '<div class="result">'+response.data[i].content
				    			+'<p class="photo_detail_p"><span>'
				    			+response.data[i].userName+'</span><span>'+response.data[i].dateCreated.substr(0,10)+'</span></p></div>';
				    			
								$(e.target).parent('p').parent('div').find('.publisher').append(temp);
								//给该文章设置已加载
								$(e.target).attr('data-addCommit',true);
				    		}
				    	}
				  	})
				  	.catch(function (error) {
				    	console.log(error);
				  	});
				}
				//显示
				$(e.target).next('.mylife_css_close').show();
				$(e.target).parent('p').parent('div').find('.js_photo_detail').show();
				$(e.target).hide();
				
			},
			commitClose(e){
				$(e.target).prev('.mylife_css_open').show();
				$(e.target).parent('p').parent('div').find('.js_photo_detail').hide();
				$(e.target).hide();
			},
			postCommit(content_,userName_,telOrmail_,books_){
				var self_ = this;
				this.axios.post(self_.toPostCommit,{
					content:content_,
					userName:userName_,
					telOrmail:telOrmail_,
					books:books_
				}).then(function(res){
					console.log(res);
				}).catch(function(err){
					console.log(err);
				})
			}
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