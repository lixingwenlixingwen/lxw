$(function(){
	/*数据交互*/
	var DetailData={
	  "error":0,
	  "data":{
	    "img_url":["http://i0.hdslb.com/bfs/archive/9f233f3f6bffa44a471a872df365692ebc8dc96e.png","http://i0.hdslb.com/bfs/archive/08bf65e3db505390d08c703ba15991441c24c581.png","http://i0.hdslb.com/bfs/archive/9f233f3f6bffa44a471a872df365692ebc8dc96e.png","http://i0.hdslb.com/bfs/archive/08bf65e3db505390d08c703ba15991441c24c581.png"],
	    "headers":"回忆那年冬天的雪花——双层果(商品标题)",
	    "price":15,
	    "details":["http://i0.hdslb.com/bfs/archive/9f233f3f6bffa44a471a872df365692ebc8dc96e.png"],
	    "style":['style1','style2','style3','style4','style5']
	  }
	};
	$(".p_price").text(DetailData.data.price);
	$(".p_title").text(DetailData.data.headers);	
	var index=0;
	/*样式按钮自适应*/
	$.each(DetailData.data.style,function(index){
		var style = "<button class='btn_style'></button>";
		$(".hide_choose").append(style);
		index += 1;
		$(".btn_style").each(function(index){
			$(this).text(DetailData.data.style[index]);
		});
	})
	/*自适应轮播图片数量*/
	$.each(DetailData.data.img_url,function(index,value){
		var html = "<li class='li_showOrderStatus'><img src='noton.png' alt='' class='img_showOrderStatus'></li>";
		var html1 = "<li class='img_num0'><img src="+DetailData.data.img_url[index]+"></li>"
		$(".ul_showOrderStatus").append(html);
		$(".img_list").append(html1);
		index += 1;
		if(index == DetailData.data.img_url.length) {
            $(".img_list").find("li").eq(0).css("display","block");
            $(".ul_showOrderStatus").find("li").eq(0).find("img").attr("src","on.png");
            var len = $(".ul_showOrderStatus").width();
            $(".ul_showOrderStatus").css("left", function() {
                return ($(this).parent().width()-len)/2+"px";
            });
		}
	});
	/*详情图片*/
    $(".longimg_detail img").attr("src",DetailData.data.details);
	/*轮播图*/
	var pos = 0;
	function car(){
		pos = pos + 1;
		if (pos == DetailData.data.img_url.length) {
            pos = 0;
        }
        $(".img_list").find("li").css("display","none");
        $(".img_list").find("li").eq(pos).css("display","block");
        $(".ul_showOrderStatus").find("img").attr("src","noton.png");
        $(".ul_showOrderStatus").find("li").eq(pos).find("img").attr("src","on.png")
	}
	$(".btn_next").click(function(){
		car();
	});
	$(".btn_prev").click(function(){
        pos = pos - 1;
        if (pos == -1) {
            pos = DetailData.data.img_url.length - 1;
        }
        $(".img_list").find("li").css("display","none");
        $(".img_list").find("li").eq(pos).css("display","block");
        $(".ul_showOrderStatus").find("img").attr("src","noton.png");
        $(".ul_showOrderStatus").find("li").eq(pos).find("img").attr("src","on.png")
	});
	var timer=null;
	timer=setInterval(car,3000);
	/*买买买按钮*/
	$(document).on("click",".btn_buy",function(){
		$(".Im_shade").show(1);
		$(".div_onshade").toggle(400)
	});
	$(document).on("click",".btn_close",function(){
		$(".Im_shade").hide(1);
		$(".div_onshade").toggle(400)
	});
	/*样式选择背景变化*/
	$(".btn_style").click(function(){
		$(this).toggleClass("byClick");
	});
	/*更多样式按钮点击*/
	$(".btn_more").click(function(){
		$(".hide_choose").css("overflow","visible");
		$(this).hide();
		$(".btn_hidemore").show();
		$(".choose_num, .btn_numsub, .btn_numadd, .text_num").hide()
	});
	$(".btn_hidemore").click(function(){
		$(".hide_choose").css("overflow","hidden");
		$(this).hide();
		$(".btn_more").show();
		$(".choose_num, .btn_numsub, .btn_numadd, .text_num").show()
	});
	/*数量加减*/
	$(".btn_numadd").click(function(){
		var num=parseInt($(".text_num").val());
		$(".text_num").val(num+1)
	});
	$(".btn_numsub").click(function(){
		var num=parseInt($(".text_num").val());
		$(".text_num").val(num-1);
		if(num==0){
			$(".text_num").val(num-0);
		}
	})
});