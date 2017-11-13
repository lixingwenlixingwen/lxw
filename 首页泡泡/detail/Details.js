$(document).ready(function(){
	/*轮播图*/
	var a=0;b=0;
	$(".btn_next").click(function next(){
		a-=1;b+=1;
		$(".btns_list li:eq(b) button").addClass("on");
		$(".img_list").animate({left:(a*3.75)-3.75+"rem"},600);
		if(a==-5){
			$(".img_list").css("left","-3.75rem");
			a=0;
		}
		if(b==4){
			b=0;
		}
	})
	$(".btn_prev").click(function prev(){
		a+=1;b-=1;
		$(".img_list").animate({left:(a*3.75)-3.75+"rem"},600);
		if(a==1){
			$(".img_list").css("left","-18.75");
			a=-4;
		}
		if(b==0){
			b=4;
		}
	})
	/*买买买按钮*/
	$(document).on("click",".btn_buy",function(){
		$(".Im_shade").show(1);
		$(".div_onshade").toggle(1000)
	})
	$(document).on("click",".btn_close",function(){
		$(".Im_shade").hide(1);
		$(".div_onshade").toggle(1000)
	})
	/*样式选择背景变化*/
	$(".btn_style").click(function(){
		
	})
	/*更多样式按钮点击*/
	$(".btn_more").click(function(){
		$(".hide_choose").css("overflow","visible");
		$(this).hide()
		$(".btn_hidemore").show();
		$(".choose_num, .btn_numsub, .btn_numadd, .text_num").hide()
	})
	$(".btn_hidemore").click(function(){
		$(".hide_choose").css("overflow","hidden");
		$(this).hide()
		$(".btn_more").show();
		$(".choose_num, .btn_numsub, .btn_numadd, .text_num").show()
	})
	/*数量加减*/
	$(".btn_numadd").click(function(){
		var num=parseInt($(".text_num").val());
		$(".text_num").val(num+1)
	})
	$(".btn_numsub").click(function(){
		var num=parseInt($(".text_num").val());
		$(".text_num").val(num-1);
		if(num==0){
			$(".text_num").val(num-0);
		}
	})
})