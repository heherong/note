<template>
	<div>
		<section id="banner" class="major">
			<div class="inner header_inner">
				<header class="major">
					<h1>Hi,我是何蓉 </h1>
				</header>
				<div class="content">
					<p>一个集肥胖与傲娇于一体的‘焦虑症患者’<br />
							并拥有着神(经)一般的八卦与分析能力.</p>
					<ul class="actions">
						<li><a href="#one" class="button next scrolly">想要了解更多？猛戳</a></li>
					</ul>
				</div>
			</div>
		</section>
		<!-- Main -->
		<div id="main">
			<!-- Two -->
			<section id="two">
				<div class="inner">
					<header class="major">
						<h2>待完成</h2>
					</header>
					<ol>
						<li>页面细节完善</li>
						<li>评论添加</li>
						<li>评论的完善（例如翻页，点赞等）</li>
						<li>每个内容的浏览数</li>
						<li>使用java调用数据库设置后台</li>
					</ol>
					<ul class="actions">
						<li><a href="javascript:void(0)" class="button next">有更多、更好的建议和意见，可联系</a></li>
					</ul>
				</div>
			</section>
				
			<!-- One -->
			<section id="one" class="tiles">
				<article>
					<span class="image">
						<img :src="require('@/assets/images/pic01.jpg')"/>
					</span>
					<header class="major">
						<h3><router-link to="/photos" class="link">城市之间的游荡~</router-link></h3>
						<p>我觉得更适合叫‘到处走走与留影’</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img :src="require('@/assets/images/pic02.jpg')"/>
					</span>
					<header class="major">
						<h3><router-link to="/technology" class="link" >前端技术集合</router-link></h3>
						<p>工作中发现的知识点</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img :src="require('@/assets/images/pic03.jpg')"/>
					</span>
					<header class="major">
						<h3><router-link to="/mylife" class="link">点滴生活</router-link></h3>
						<p>神神叨叨，啰啰嗦嗦，步入老年的一段过渡期</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img :src="require('@/assets/images/pic04.jpg')"/>
					</span>
					<header class="major">
						<h3><router-link to="/books" class="link">书籍</router-link></h3>
						<p>精神食粮，吃的较少，偏瘦</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img :src="require('@/assets/images/pic05.jpg')"/>
					</span>
					<header class="major">
						<h3><router-link to="/doitmyself" class="link">手工</router-link></h3>
						<p>执着与热情</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img :src="require('@/assets/images/pic06.jpg')"/>
					</span>
					<header class="major">
						<h3><router-link to="/foods" class="link">美食篇</router-link></h3>
						<p>放最后不是没有原因的</p>
					</header>
				</article>
			</section>
		</div>
	</div>

</template>

<script>
	export default{
		data(){  ///等价于es5的data:function(){}
			return {
				list:[]
			}
		},
		mounted(){
			// Tiles.
			var $tiles = $('.tiles > article');

			$tiles.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					$link = $this.find('.link'),
					x;

				// Image.

					// Set image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide original.
						$image.hide();

				// Link.
					if ($link.length > 0) {
						var $x;
						$x = $link.clone()
							.text('')
							.addClass('primary')
							.appendTo($this);

						$link = $link.add($x);

						$link.on('click', function(event) {

							var href = $link.attr('href');

							// Prevent default.
								event.stopPropagation();
								event.preventDefault();

							// Start transitioning.
//								$this.addClass('is-transitioning');
//								$wrapper.addClass('is-transitioning');

							// Redirect.
								window.setTimeout(function() {

									if ($link.attr('target') == '_blank')
										window.open(href);
									else
										location.href = href;

								}, 500);

						});

					}
			});
		}
	}
</script>

<style scoped>
	.header_inner{
	    /*padding: 4em 0 2em 0;*/
	    margin: 0 auto;
	    max-width: 65em;
	    width: calc(100% - 6em);
	}
</style>