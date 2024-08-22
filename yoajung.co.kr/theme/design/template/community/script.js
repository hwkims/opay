$('#header').load("/header.html");
$('#footer').load("/footer.html");

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$('.header_community').addClass('on')

let tl = gsap.timeline({
    defaults: { duration: 0.8, ease: "power1.out" },
});
tl.from(".main_top_2nd_p_1", {
    yPercent:-101,
},'< 30%').from(".main_top_2nd_p_2", {
    yPercent:101,
},'< 30%')




let tlclick = gsap.timeline({
    defaults: { duration: 0.8, ease: "power1.out" },
});
tlclick.from(".con7_bottom_item_item", {
    yPercent:10,
    opacity:0,
},'< 30%')
$('#con3').hide();
$('#con4').hide();
$('#con7').hide();
$('.con7_mid_top_cate').on('click',function(){
    $('.con7_mid_top_cate').removeClass('on')
    $(this).addClass('on')
    $('.con7_bottom_item_item').hide();

    $('#'+$(this).data('value')).show()
    tlclick.restart();
    $('.con7_mid_top_cate_item').removeClass('con7_mid_top_cate_on')

    $(this).addClass('con7_mid_top_cate_on')



})


function email_check(email) {

	var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return reg.test(email);

}

$('.form_submit').on('click', function() {
        if (!email_check($('#email').val())) {
        alert('이메일을 확인 해주세요.')
        return
    }
    if ($('#tel1').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }

    if ($('.form_agree_check').is(':checked')) {
        $.ajax({
            url: "/bbs/mail2.php",
            type: "post",
            data: {
                name: $('#name').val(),
                tel1: $('#tel1').val(),
                email: $('#email').val(),                 
                form_index: $('#duration').val(),
                form_index2: $('#form_index2').val(),
            }
        }).done(function(data) {
            alert("문의양식이 전송 되었습니다.")
            $('#name').val('')
            $('#tel1').val('')
            $('#email').val('')
            $('#duration').val('')
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
})