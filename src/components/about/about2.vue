<template>
<div class="container g-piclist" ref="bg">
	<div @click="changeBg">改变背景</div>
  <div class="row">
			  <div class="col-sm-4 col-md-4">
			    <div class="thumbnail">
			      <img src="../../assets/img/news/news_15.png" alt="...">
			      <div class="caption">
			        <h3>悠果维赞助国家体育总局训练局 为国家队提供备战保障</h3>
			        <h4>2018-11-09江苏名芊</h4>
			        <p>11月8日，悠果维赞助国家体育总局训练局签约仪式在北京举行。据悉，这是训练局首次接受来自黑莓行业的赞助，悠果维将为国家队运动员提供黑莓浆饮品，为1200多名国家队运动员保障健康。</p>
			      	<a href="newsContent.html">查看详细</a>
			      </div>
			    </div>
			  </div>
			  <div class="col-sm-4 col-md-4">
			    <div class="thumbnail">
			      <img src="../../assets/img/news/news_01.png" alt="...">
			      <div class="caption">
			        <h3>悠果维2017母亲节专场活动暨新品发布会在沪举行</h3>
			        <h4>2018-11-09江苏名芊</h4>
			        <p>11月8日，悠果维赞助国家体育总局训练局签约仪式在北京举行。据悉，这是训练局首次接受来自黑莓行业的赞助，悠果维将为国家队运动员提供黑莓浆饮品，为1200多名国家队运动员保障健康。</p>
			      	<a href="newsContent.html">查看详细</a>
			      </div>
			    </div>
			  </div>
			  <div class="col-sm-4 col-md-4">
			    <div class="thumbnail">
			      <img src="../../assets/img/news/news_03.png" alt="...">
			      <div class="caption">
			        <h3>热烈祝贺悠果维开年盛典在上海华纳国际会议中心隆重举行</h3>
			        <h4>2018-11-09江苏名芊</h4>
			        <p>11月8日，悠果维赞助国家体育总局训练局签约仪式在北京举行。据悉，这是训练局首次接受来自黑莓行业的赞助，悠果维将为国家队运动员提供黑莓浆饮品，为1200多名国家队运动员保障健康。</p>
			      	<a href="newsContent.html">查看详细</a>
			      </div>
			    </div>
			  </div>
			</div>
      </div>
</template>

<script>
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var c = "rgb("+r+","+g+","+b+")";
export default {
     methods:{
			 changeBg(){
				  this.$refs.bg.style.background=c;
			 }
		 }
}
</script>

<style>
    .g-piclist{
	padding: 0 120px;
}
.g-piclist .thumbnail {
    padding: 0px;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 0px;
    box-shadow: 2px 3px 4px 2px rgba(180,180,180,0.50);
    /*height: 400px;*/
}
.g-piclist .thumbnail  img{
	width: 100%;
	height: 200px;
}
.g-piclist .thumbnail h3{
	height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 16px;
}
.g-piclist .thumbnail h4{
	height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 14px;
}
.g-piclist .thumbnail p{
	height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 10px;
}
.g-piclist .thumbnail a{
	color: #008000;
}
</style>
