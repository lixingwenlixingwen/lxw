$(function(){
	var NewData=[
    {
      "appleid":0,
      "headimgurl": "aaa.jpg",
      "price": 15,
      "history": 666,
      "headers": "标题1",
    },
    {
      "appleid":1,
      "headimgurl": "bbb.jpg",
      "price": 16,
      "history": 667,
      "headers": "标题2",
    },
    {
      "appleid":2,
      "headimgurl": "ccc.jpg",
      "price": 17,
      "history": 668,
      "headers": "标题3",
    },
    {
      "appleid":3,
      "headimgurl": "ddd.jpg",
      "price": 18,
      "history": 669,
      "headers": "标题4",
    },
    {
      "appleid":4,
      "headimgurl": "eee.jpg",
      "price": 19,
      "history": 670,
      "headers": "标题5",
    },
  ];
  $(".bubble").each(function(index,element){
  		$(this).attr("data-id",NewData[index].appleid);
  	});
  $(document).on("click",".bubble",function(){
  	var DataIndex=-1;
  	var ThisId=-1;
  	var PopData={};
  	    ThisId=$(this).attr("data-id");
	  	$(".shade").show(1);
	  	$(".pop_window").show(1);
	  	$(".pop_skipTo").attr("data-id",ThisId);
  		DataIndex=NewData.findIndex(function(value){
  		return value.appleid == ThisId;
  	});
  		PopData=NewData[DataIndex];
  		$(".pop_price").text(PopData.price);
  		$(".pop_history").text(PopData.history);
  		$(".pop_img").src(PopData.headimgurl);
  	});
   $(".pop_close").click(function(){
  		$(".shade").hide(1);
  		$(".pop_window").hide(1);
  })
})