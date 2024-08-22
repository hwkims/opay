$('#header').load("/header.html");
$('#footer').load("/footer.html");

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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


    let tl = gsap.timeline();
    tl.from(".main_mid_absol", {
        height:0,
        duration:2,
    })
})