$('#header').load("/header.html");
$('#footer').load("/footer.html");

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
let mm = gsap.matchMedia();
mm.add("(min-width: 600px)", () => {
    $(window).scroll(function(){
        var here2 = $(".con3").offset().top-350;
        var here3 = $(".con4").offset().top-350;
        if(here2 < $(document).scrollTop()&& here3 > $(document).scrollTop()){
            $(".main_fixed_bar_mid_absol").css('filter','grayscale(100%) brightness(0)')
        }else{
            $(".main_fixed_bar_mid_absol").css('filter','unset')

        }
    })
})
mm.add("(max-width: 600px)", () => {
    $(window).scroll(function(){
        var here2 = $(".con3").offset().top-200;
        var here3 = $(".con4").offset().top-650;
        if(here2 < $(document).scrollTop()&& here3 > $(document).scrollTop()){
            $(".main_fixed_bar_mid_absol").css('filter','grayscale(100%) brightness(0)')
        }else{
            $(".main_fixed_bar_mid_absol").css('filter','unset')

        }
    })
})
    $(".con1_right_bottom").on("keyup",function(key){         
        if(key.keyCode==13) {      
            location.href='/bbs/content.php?co_id=menustore&searchKeyword='+$(".con1_right_bottom").val()+'#con4';
        }     
    });

$('.form_submit').on('click', function() {
    if ($('#tel12').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }
    if ($('.form_agree01').is(':checked')) {
        $.ajax({
            url: "/bbs/mail.php",
            type: "post",
            data: {
                name: $('#name2').val(),
                tel1: $('#tel12').val(),
                duration: $('#area2').val(),
                choice: $('#budget2').val(),
                form_index: $('#form_index').val(),
            }
        }).done(function(data) {
            alert("문의양식이 전송 되었습니다.")
            $('#name2').val('')
            $('#tel12').val('')
            $('#area2').val('')
            $('#budget2').val('')
            $('#form_index').val('')
        });}
    else{
        alert('개인정보취급방침을 동의해주세요.')
    }
})

const swiper5 = new Swiper('.con7_mid_swiper_1 ', {
    slidesPerView: 2,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 4,
            spaceBetween: 45
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 640px
    },

});


const swiper55 = new Swiper('.con7_mid_swiper_2 ', {
    slidesPerView: 2,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 1250,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 4,
            spaceBetween: 45
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 640px
    },

});

const swiper4 = new Swiper('.con3_left_2nd_swiper ', {
    slidesPerView: 1,
    spaceBetween:0,
    slidesPerGroup: 1,
    allowTouchMove: false,
    navigation : { // 네비게이션
        nextEl : '.con3_left_2nd_next', // 오른쪽(다음) 화살표
        prevEl : '.con3_left_2nd_prev', // 왼쪽(이전) 화살표
    },
    loop: true,
     autoplay: {
         delay: 5000,
         disableOnInteraction: false,
     },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
    },

});

const swiper6 = new Swiper('.con3_left_3rd_swiper ', {
    effect: 'slide',
    spaceBetween: 0,
    slidesPerView: 2,
    allowTouchMove: false,
    direction: 'horizontal',

    navigation : { // 네비게이션
        nextEl : '.con3_left_2nd_next', // 오른쪽(다음) 화살표
        prevEl : '.con3_left_2nd_prev', // 왼쪽(이전) 화살표
    },
    loop: true,
     autoplay: {
         delay: 5000,
         disableOnInteraction: false,
     },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 2,
            spaceBetween: 0,
            direction: 'vertical',

        },
        600: {
            slidesPerView: 2,
            spaceBetween: 0,
            direction: 'vertical',

        },
        // when window width is >= 640px
    },

});
$('.popup_qa_1').hide()
$('.popup_qa_2').hide();
$('.popup_qa_3').hide();

$('.popup_qa_top_overlay').on('click',function(){
    $('.popup_qa_1').hide();
    $('.popup_qa_2').hide();
    $('.popup_qa_3').hide();

})
$('.popup_qa_top_img_2').on('click',function(){
    $('.popup_qa_1').hide();
    $('.popup_qa_2').hide();
    $('.popup_qa_3').hide();
})

$('.con3_left_swiper_1_slide_p_5th').on('click',function(){

    $('.'+$(this).data('value')).show()
})

$(window).on('load', function(){
    $('section > img').each(function() {
        var imageWidth = $('html').width()*$(this).prop('naturalWidth')/2020;    // Current image width
        var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산

        var percent =(imageWidth/parentsWidth) *100
        $(this).css('width',percent+'%')

    });


    $('section div').each(function() {
        // if($(this).children('img:visible').length>1){
        //     var imageWidth = $('html').width()*$(this).children('img').prop('naturalWidth')/2020;    // Current image width
        //     var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산
        //     var percent =(imageWidth/parentsWidth) *100
        //     $(this).css('width',percent+'%')
        //
        // }
        if( $(this).children('img:visible').length==1 && $(this).children('video:visible').length==0 &&$(this).children('p:visible').length==0 &&$(this).children('iframe:visible').length==0){

            var imageWidth = $('html').width()*$(this).children('img').prop('naturalWidth')/2020;    // Current image width
            var windowWidth = 2020;    // pc 기준 2020px 으로 계산

            var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산

            //div 안에 div 또 있을경우 퍼센트 보정 계산식
            var percent =(imageWidth/parentsWidth) *100
            // * (parentsWidth/windowWidth*100) / 100
            if($(this).css('display')!='flex'){
                $(this).css('width',percent+'%')
                $(this).css('display','flex')
                $(this).css('justify-content','center')
                $(this).css('align-items','center')
            }

            //image 가 reveal class 가지고 있을때는 이미지에 vw 값 넣어주기 (vw[viewport width] 는 절대값이라 windowWidth 로 계산)
            if($(this).children('img').hasClass('reveal')){
                percent  =(imageWidth/$('html').width()) *100
                $(this).children('img').css('width',percent+'vw')
                $(this).css('overflow','hidden')
            }else{
                $(this).children('img').css('width','100%')

            }
        }







    });


    let tl = gsap.timeline({  scrollTrigger: {
            trigger: "body",
            start: "0",
            end: "90%",
            scrub:true,
            toggleActions: "play none none none",
        },
        defaults: { duration: 1, ease: "power1.out" },
    });


    tl.from(".main_fixed_bar_mid_absol", {
        height: 0,
    },'< 50%')


    let tl2 = gsap.timeline({
        defaults: { duration: 0.8, ease: "power1.out" },

    });
    tl2.from(".a_07", {
        yPercent:100,
    },'< 40%').from(".a_08", {
        yPercent:-100,
    },'< 40%').from(".main_top_3rd_p", {
        yPercent:-100,
    },'< 40%')

    let tl3 = gsap.timeline({  scrollTrigger: {
            trigger: ".con1",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl3.from(".con1_left", {
        yPercent:-30,
        opacity:0,
    },'< 30%').from(".con1_right", {
        yPercent:-30,
        opacity:0,
    },'< 30%').from(".con2 .a_13", {
        yPercent:101,
    },'< 30%').from(".con7_mid_con_top_p", {
        yPercent:101,
    },'< 20%')

    let tl4 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_left_1st_3",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl4.from(".a_18", {
        yPercent:101,
    },'< 30%').from(".con3_left_1st_2_p", {
        yPercent:101,
    },'< 30%').from(".con3_left_1st_3_p", {
        yPercent:101,
        opacity:0,
    },'< 30%')

    let tl5 = gsap.timeline({  scrollTrigger: {
            trigger: ".con4_right",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl5
//        .from(".con4_absol_1_item", {
//        opacity:0,
//        stagger:0.2,
//        yPercent:-300,
//        duration:0.5,
//    },'< 30%')
        
        
        .from(".con4 .a_13", {
        yPercent:101,
    },'< 30%').from(".con4 .con4_left_top_p_div", {
        yPercent:110,
    },'< 30%').from(".con4 .con4_left_top_p", {
        yPercent:110,
    },'< 30%')

    
    
    
    //페이스북에서 받은 토큰 입력
    var token = "IGQWRQSXdUeE1mS2VVbzI0dldxbzRCS1FjTldwY2tBUFBlWUpjSzFoWDZAzcFM3ZAFZA2QXZAWOWdlRmNQLXhTdElTeHkzVzltWkl3UXo3c2RHNmR3NGVOV0lheEd2cXR2ZAVNObnhOWmtoWmk3Q2l3bTRqa3JNQ3Rka3cZD";
    $.ajax({
        url: "/bbs/instagram.php",
        type: "post",
        data: {
            token : token
            
        }
    }).done(function(data) {
        //db 에서 가져온 토큰
        token = JSON.parse(data)[0].token
//        console.log(token,'  got token from db')
        //날자 체크 후 토큰 저장된지 30일 이후에만 refresh 토큰 생성
        const date1 = new Date(JSON.parse(data)[0].regDate);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffDays,' 일 된 토큰')
        if(diffDays>30){
            $.ajax({    
                type:'GET',    
                url : 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token='+token,   
                dataType:'json',
                success:function(data){       
//                    console.log(data.access_token)
                    console.log("token refreshed")
                    $.ajax({
                        url: "/bbs/instagramInsert.php",
                        type: "post",
                        data: {
                            token : data.access_token
                        }
                    }).done(function(data) {    
                        console.log("refreshed token saved")
                    });
                },
                error:function(request, error) {
                    alert("error");
                }
            });             
        }
       //인스타 피드가져오기
       const feed = new Instafeed({
            accessToken: token,
            target: 'gallery',
            limit: 10,
            template: '<div class="ccon3_mid_slide ">' +
                ' <a class="ccon4_mid_slide_a rltv" href= "{{link}}" target="_blank">' +
            '<img class="a_33" src="/images/a_33.png"> <img src="{{image}}">'+
                //	  '<h3 class="scon_name">{{caption}}</h3>'+
                '</a>' +'</div>'
                //    '<p class="scon_tel">{{username}}</p>'+

        });
        feed.run();                 
        
        
           
    });
})