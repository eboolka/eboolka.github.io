
$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 300);
        return false;
    })
   
    var s=59;
	 setInterval(function(){
		 var m=parseInt($('#minut .mm').text());
			s=s-1;
			if(s>=0){
				$("#sec .mm").text(s) ;
			} else {
				s=59;
				$("#sec .mm").text(s) ;
				if(m!=0){
					$('#minut .mm').text(m-1);
				} else {
					$('#minut .mm').text('00');
					if(s>=0){
						$('#minut .mm').text('14');
					}
				}
				
			}
					
					 
			
			
			},1000);
			
	var s2=59;
	 setInterval(function(){
		 var m2=parseInt($('#minut2 .mm').text());
			s2=s2-1;
			if(s2>=0){
				$("#sec2 .mm").text(s2) ;
			} else {
				s2=59;
				$("#sec2 .mm").text(s2) ;
				if(m2!=0){
					$('#minut2 .mm').text(m2-1);
				} else {
					$('#minut2 .mm').text('00');
					if(s2>=0){
						$('#minut2 .mm').text('14');
					}
				}
				
			}
					
					 
			
			
			},1000);	
    
});

