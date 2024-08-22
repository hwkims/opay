$('#header').load("/header.html");
$('#footer').load("/footer.html");

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$('.header_brand').addClass('on')
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
$(window).scroll(function(){
        var herecon = $(".con2").offset().top -20;
        var herecon2 = $(".con7").offset().top -20;
        if(herecon < $(document).scrollTop()  && herecon2 >= $(document).scrollTop()){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(1)").addClass('on')
        }
        else if(herecon2 < $(document).scrollTop() ){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(2)").addClass('on')
        }
        else{
            $('.con7_mid_top_cate').removeClass('on')
        }
})
const swiper5 = new Swiper('.con7_mid_swiper_1 ', {
    slidesPerView: 2,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
    navigation : { // 네비게이션
        nextEl : '.con3_left_2nd_next', // 오른쪽(다음) 화살표
        prevEl : '.con3_left_2nd_prev', // 왼쪽(이전) 화살표
    },
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
    navigation : { // 네비게이션
        nextEl : '.con3_left_2nd_next', // 오른쪽(다음) 화살표
        prevEl : '.con3_left_2nd_prev', // 왼쪽(이전) 화살표
    },
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
const swiper555 = new Swiper('.con7_mid_swiper_3 ', {
    slidesPerView: 2,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
    navigation : { // 네비게이션
        nextEl : '.con3_left_2nd_next', // 오른쪽(다음) 화살표
        prevEl : '.con3_left_2nd_prev', // 왼쪽(이전) 화살표
    },
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


    let tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl.from(".main_top_2nd_p_1", {
        yPercent:-101,
    },'< 30%').from(".main_top_2nd_p_2", {
        yPercent:101,
    },'< 30%')


    let tl2 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_top",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl2.from(".con2 .con2_top_absol_p", {
        xPercent:-101,
    },'< 30%').from(".con2 .d_02", {
        xPercent:-101,
    },'< 30%').from(".con2 .b_05", {
        yPercent:101,
    },'< 30%').from(".con2_top_2nd_p_2", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con2_top_2nd_p_1", {
        yPercent:-101,
        opacity:0,
    },'< 30%')


    let tl3 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl3.from(".con4_absol_item", {
        yPercent:-301,
        opacity:0,
        stagger:0.3,
        duration:0.5,
    },'< 30%')
        
        
        
        .from(".con3_top", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con3_top_2nd_p", {
        yPercent:101,
    },'< 30%').from(".con3 .b_06", {
        xPercent:-101,
    },'< 30%').from(".con3_absol_1", {
        yPercent:50,
        opacity:0,
    },'< 30%').from(".con3_absol_2", {
        yPercent:50,
        opacity:0,
    },'< 30%').from(".b_07", {
//        repeat:-1,
        yoyo:true,
        opacity:0,
        scale:3,
//        ease:  SteppedEase.config(1),
        duration:0.4,
    }).from(".b_08", {
//        repeat:-1,
        yoyo:true,
        opacity:0,
        scale:3,
        
//        ease:  SteppedEase.config(1),
        duration:0.4,
    },'<').from(".con3_mid_1st", {
        yPercent:50,
        opacity:0,
    },'<').from(".con3_bottom_con_item", {
        xPercent:-50,
        rotate:-40,
        stagger:0.4,
        opacity:0,
    },'< 20%')


    let tl4 = gsap.timeline({  scrollTrigger: {
            trigger: ".con4 .con2_top_absol",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl4.from(".con4 .con2_top_absol_p", {
        xPercent:-101,
    },'< 30%').from(".con4 .d_02", {
        xPercent:-101,
    },'< 30%').from(".con4 .b_21", {
        yPercent:101,
    },'< 30%').from(".con4 .con4_top_2nd_p_2", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con4 .con4_top_2nd_p_1", {
        yPercent:-101,
        opacity:0,
    },'< 30%')

    let tl5 = gsap.timeline({  scrollTrigger: {
            trigger: ".con5_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl5.from(".con5_top_1st", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con5 .d_02_img", {
        xPercent:-101,
    },'< 30%').from(".con5_top", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con5_top_2nd_p", {
        yPercent:-101,
    },'< 30%').from(".con5 .b_06", {
        xPercent:-101,
    },'< 30%').from(".con5_mid_1st", {
        yPercent:-50,
        opacity:0,
    },'< 30%').from(".con5_bottom_item ", {
        yPercent:-30,
        stagger:0.35,
        opacity:0,
    },'< 30%')


    let tl6 = gsap.timeline({  scrollTrigger: {
            trigger: ".con6 .con7_mid_top",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl6.from(".con6_top_1st", {
        yPercent:-50,
        opacity:0,
    },'< 30%').from(".con6 .d_02_img", {
        xPercent:-101,
    },'< 30%').from(".con6_top_2nd", {
        yPercent:-50,
        opacity:0,
    },'< 30%').from(".con6_top_3rd", {
        yPercent:-50,
        opacity:0,
    },'< 30%')


    let tl7 = gsap.timeline({  scrollTrigger: {
            trigger: ".con7_top",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl7.from(".con7_top", {
        yPercent:-50,
        opacity:0,
    },'< 30%').from(".con7_absol_1", {
        xPercent:50,
        opacity:0,
    },'< 30%').from(".con7_absol_1 > .b_34", {
        yPercent:101,
        opacity:0,
    },'< 30%').from(".con7_absol_3 .b_34", {
        yPercent:-101,
        opacity:0,
        
    },'< 30%')




        .from(".con7_absol_2nd", {
        xPercent:-50,
        opacity:0,
    },'< 30%').from(".con7_absol_2nd > .b_36", {
        yPercent:101,
        opacity:0,
    },'< 30%').from(".con7_absol_2_3rd .b_36", {
        yPercent:-101,
        opacity:0,
        
    },'< 30%').from(".con7_bottom_p", {
        yPercent:-101,
        opacity:0,
    },'< 30%')


    let tl8 = gsap.timeline({  scrollTrigger: {
            trigger: ".con8_top_2nd_top",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl8.from(".con8_top", {
        yPercent:-100,
        opacity:0,
    },'< 30%').from(".con8_top_2nd_p", {
        yPercent:-100,
        opacity:0,
    },'< 30%').from(".b_43", {
        yPercent:100,
        xPercent:200,
        opacity:0,
        scale:0.4,
        duration:0.5,
    },'< 30%').from(".b_46", {
        yPercent:100,
        xPercent:-200,
        opacity:0,
        scale:0.4,
        duration:0.5,
    },'< 30%').from(".b_44", {
        yPercent:20,
        xPercent:200,
        opacity:0,
        scale:0.4,
        duration:0.5,
    },'< 30%').from(".b_49", {
        yPercent:20,
        xPercent:-200,
        opacity:0,
        scale:0.4,
        duration:0.5,
    },'< 30%').from(".b_45", {
        yPercent:-100,
        xPercent:200,
        opacity:0,
        scale:0.4,
        duration:0.5,
    },'< 30%').from(".b_50", {
        yPercent:-100,
        xPercent:-200,
        opacity:0,
        scale:0.4,
        duration:0.5,
    },'< 30%').from(".b_40", {
        yPercent:-100,
        xPercent:-200,
        opacity:0,
        scale:0.4,
        duration:0.5,
    },'< 30%').from(".con8_top_2nd_top", {
        width:0,
    },'< 30%').from(".b_39", {
        yPercent:101,
    },'< 30%').from(".con8_top_4th", {
        yPercent:101,
        opacity:0,
    },'< 30%')


    let tl9 = gsap.timeline({  scrollTrigger: {
            trigger: ".con9_top",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl9.from(".b_52", {
        yPercent:101,
    },'< 30%').from(".con9_p_1", {
        xPercent:101,
    },'< 30%').from(".con9_p_2", {
        xPercent:-101,
    },'< 45%')



    let tl10 = gsap.timeline({  scrollTrigger: {
            trigger: ".con10_con",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl10.from(".con10_top_img", {
        yPercent:101,
    },'< 30%').from(".con10_top_1st", {
        yPercent:-101,
    },'< 30%').from(".con10_top_1st_top .d_02_img", {
        xPercent:-101,
    },'< 30%').from(".con10_top_2nd", {
        opacity:0,
        yPercent:-101,
    },'< 30%').from(".con10_top_2nd_top .d_02_img", {
        xPercent:-101,
    },'< 30%').from(".con10_bottom_p", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con10_bottom_p_2", {
        yPercent:-101,
        opacity:0,

    },'< 30%')

})