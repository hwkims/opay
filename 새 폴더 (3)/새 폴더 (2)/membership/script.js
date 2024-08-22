$('#header').load("/header.html");
$('#footer').load("/footer.html");

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$('.header_membership').addClass('on')


$(window).scroll(function(){
        var herecon = $(".con2").offset().top-10;
        var herecon2 = $(".con3").offset().top-10;
        var herecon3 = $(".con4").offset().top-10;
        if(herecon < $(document).scrollTop()  && herecon2 >= $(document).scrollTop()){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(1)").addClass('on')
        }
        else if(herecon2 < $(document).scrollTop() && herecon3 >= $(document).scrollTop()){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(2)").addClass('on')
        }
        else if(herecon3 < $(document).scrollTop()){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(3)").addClass('on')
        }    
    
    
    
        else{
            $('.con7_mid_top_cate').removeClass('on')
        }
})



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

const swiper5 = new Swiper('.con4_mid_swiper_1 ', {
    slidesPerView: 3,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
     autoplay: {
         delay: 3000,
         disableOnInteraction: false,
     },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 640px
    },

});


const swiper55 = new Swiper('.con3_mid_swiper_1 ', {
    slidesPerView: 3,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
     autoplay: {
         delay: 3000,
         disableOnInteraction: false,
     },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 3,
            spaceBetween: 0
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
            trigger: ".con2_p_1",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl2.from(".con2_top_absol_4", {
        yPercent:-30,
        opacity:0,
        xPercent:-20
    },'< 30%').from(".con2_top_absol_5", {
        yPercent:-30,
        opacity:0,
        xPercent:20
    },'< 30%')
        .from(".f_03", {
        yPercent:101,
    },'< 30%').from(".con2_p_1 p", {
        yPercent:101,
    },'< 30%').from(".con2_p_2 p", {
        yPercent:101,
    },'< 30%')

    let tl3 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl3.from(".con3_top", {
        width :0,
        duration: 1.1
    },'< 30%').from(".con3_top_2nd", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".f_17", {
        yPercent:-101,
        scale:0,
        duration:0.5,
    },'< 30%').from(".f_18", {
        yPercent:-101,
        scale:0,
        duration:0.5,
    },'< 30%').from(".con3_bottom_p", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con3_bottom_p_2", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con3_bottom_bottom_item", {
        yPercent:-40,
        stagger:0.35,
        opacity:0,
    },'< 30%')


    let tl4 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_p_1",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl4.from(".f_24", {
        yPercent:-101,
    },'< 30%').from(".f_25", {
        xPercent:30,
        opacity:0,
        duration:0.6,
    },'< 30%').from(".con4_mid_1st", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con4_mid_2nd", {
        yPercent:-101,
        opacity:0,
    },'< 30%').from(".con4_bottom p", {
        yPercent:-101,
        stagger:0.4,
        opacity:0,
    },'< 30%')



})