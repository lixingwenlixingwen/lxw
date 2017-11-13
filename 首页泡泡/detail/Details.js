$(document).ready(function(){
	$(document).on("click",".btn_buy",function(){
		$(".Im_shade").show(1);
		$(".div_onshade").show(1);
	})
	$(document).on("click",".btn_close",function(){
		$(".Im_shade").hide(1);
		$(".div_onshade").hide(1);
	})
	$(document).on("click",".btn_more",function(){
		
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