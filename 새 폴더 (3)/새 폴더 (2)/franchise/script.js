$('#header').load("/header.html");
$('#footer').load("/footer.html");

 var cat1_num = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
 var cat1_name = new Array('서울','부산','대구','인천','광주','대전','울산','강원','경기','경남','경북','전남','전북','제주','충남','충북');

 var cat2_num = new Array();
 var cat2_name = new Array();

 cat2_num[1] = new Array(17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41);
 cat2_name[1] = new Array('강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구');

 cat2_num[2] = new Array(42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57);
 cat2_name[2] = new Array('강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군');

 cat2_num[3] = new Array(58,59,60,61,62,63,64,65);
 cat2_name[3] = new Array('남구','달서구','동구','북구','서구','수성구','중구','달성군');

 cat2_num[4] = new Array(66,67,68,69,70,71,72,73,74,75);
 cat2_name[4] = new Array('계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군');

 cat2_num[5] = new Array(76,77,78,79,80);
 cat2_name[5] = new Array('광산구','남구','동구','북구','서구');

 cat2_num[6] = new Array(81,82,83,84,85);
 cat2_name[6] = new Array('대덕구','동구','서구','유성구','중구');

 cat2_num[7] = new Array(86,87,88,89,90);
 cat2_name[7] = new Array('남구','동구','북구','중구','울주군');

 cat2_num[8] = new Array(91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108);
 cat2_name[8] = new Array('강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','횡성군');

 cat2_num[9] = new Array(109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148);
 cat2_name[9] = new Array('고양시 덕양구','고양시 일산구','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시 소사구','부천시 오정구','부천시 원미구','성남시 분당구','성남시 수정구','성남시 중원구','수원시 권선구','수원시 장안구','수원시 팔달구','시흥시','안산시 단원구','안산시 상록구','안성시','안양시 동안구','안양시 만안구','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','하남시','화성시','가평군','양주군','양평군','여주군','연천군','포천군');

 cat2_num[10] = new Array(149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168);
 cat2_name[10] = new Array('거제시','김해시','마산시','밀양시','사천시','양산시','진주시','진해시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군');

 cat2_num[11] = new Array(169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192);
 cat2_name[11] = new Array('경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시 남구','포항시 북구','고령군','군위군','봉화군','성주군','영덕군','영양군','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군');

 cat2_num[12] = new Array(193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214);
 cat2_name[12] = new Array('광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군');

 cat2_num[13] = new Array(215,216,217,218,219,220,221,222,223,224,225,226,227,228,229);
 cat2_name[13] = new Array('군산시','김제시','남원시','익산시','전주시 덕진구','전주시 완산구','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군');

 cat2_num[14] = new Array(230,231,232,233);
 cat2_name[14] = new Array('서귀포시','제주시','남제주군','북제주군');

 cat2_num[15] = new Array(234,235,236,237,238,239,240,241,242,243,244,245,246,247,248);
 cat2_name[15] = new Array('공주시','논산시','보령시','서산시','아산시','천안시','금산군','당진군','부여군','서천군','연기군','예산군','청양군','태안군','홍성군');

 cat2_num[16] = new Array(249,250,251,252,253,254,255,256,257,258,259,260);
 cat2_name[16] = new Array('제천시','청주시 상당구','청주시 흥덕구','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','진천군','청원군');

function cat1_change(key,sel){

    if(key != '' && key != '-선택-'){
        $('.h_area1').css('background','#F73C5A')
        $('.h_area1').css('color','white')
    }else{
        $('.h_area1').css('background','white')
        $('.h_area1').css('color','rgb(0 0 0 / 36%)')
        $('.h_area2').css('background','white')
        $('.h_area2').css('color','rgb(0 0 0 / 36%)')        
    }
     if(key == '') return;
 var name = cat2_name[key];
 var val = cat2_num[key];

 for(i=sel.length-1; i>=0; i--)
  sel.options[i] = null;
 sel.options[0] = new Option('-선택-','', '', 'true');
 for(i=0; i<name.length; i++){
  sel.options[i+1] = new Option(name[i],val[i]);
 }
}


function cat2_change(key){
 
    if(key != '' && key != '-선택-'){
        $('.h_area2').css('background','#F73C5A')
        $('.h_area2').css('color','white')
    }else{
        $('.h_area2').css('background','white')
        $('.h_area2').css('color','rgb(0 0 0 / 36%)')
    }
if(key == '') return;
    
    var areaval = $('.h_area1 option:checked').text()+ ' ' + $('.h_area2 option:checked').text()
    $('#area').val(areaval);
    
}

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$('.header_franchise').addClass('on')

$(window).scroll(function(){
        var herecon = $(".con1_5").offset().top-10;
        var herecon2 = $(".con5").offset().top-10;
        var herecon3 = $(".con6").offset().top-10;
        var herecon4 = $(".con7").offset().top-10;
        if(herecon <= $(document).scrollTop()  && herecon2 > $(document).scrollTop()){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(1)").addClass('on')
        }
        else if(herecon2 <= $(document).scrollTop() && herecon3 > $(document).scrollTop()){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(2)").addClass('on')
        }
        else if(herecon3 <= $(document).scrollTop() && herecon4 > $(document).scrollTop()){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(3)").addClass('on')
        }    
        else if(herecon4 <= $(document).scrollTop()){
            $('.con7_mid_top_cate').removeClass('on')
            $(".con7_mid_top .con7_mid_top_cate:nth-child(4)").addClass('on')
        }    
    
    
    
        else{
            $('.con7_mid_top_cate').removeClass('on')
        }
})
const swiper55 = new Swiper('.con2_mid_swiper_1 ', {
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

$('.form_submit').on('click', function() {
    if ($('#tel1').val().trim() == '') {
        alert('연락처를 입력 해주세요.')
        return
    }
    if ($('.h_area2').val().trim() == ''||$('.h_area2').val().trim() == '-선택-') {
        alert('희망지역을 입력 해주세요.')
        return
    }
    if ($('.form_agree_check').is(':checked')) {
        $.ajax({
            url: "/bbs/mail.php",
            type: "post",
            data: {
                name: $('#name').val(),
                tel1: $('#tel1').val(),
                duration: $('#form_index').val(),
                choice: $('#area').val(),
                form_index: $('#duration').val(),
                form_index2: $('#form_index2').val(),
                email: $('#email').val(),
            }
        }).done(function(data) {
            var _nasa={};
            if(window.wcs) _nasa["cnv"] = wcs.cnv("4","0"); // 전환유형, 전환가치 설정해야함. 설치매뉴얼 참고
            alert("문의양식이 전송 되었습니다.")
            $('#name').val('')
            $('#tel1').val('')
            $('#budget').val('')
            $('#duration').val('')
            $('#email').val('')
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
            trigger: ".con1_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl2.from(".con1_top_1st_p_1", {
        yPercent:-101,
    },'< 30%').from(".con1_top_2nd_p_1", {
        yPercent:-101,
    },'< 30%').from(".con1_top_3rd_p_1", {
        yPercent:-101,
    },'< 30%')

    let tl3 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl3.from(".con2 .d_06", {
        yPercent:-101,
    },'< 30%').from(".con2_top_2nd_p", {
        yPercent:-101,
    },'< 30%').from(".con2_top_3rd_2", {
        yPercent:-101,
    },'< 30%').from(".d_09", {
        scale:3,
        opacity:0,
        ease:'expo.in'
    },'< 30%')

    let tl4 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl4.from(".con3_top_2nd_p", {
        yPercent:-101,
    },'< 30%').from(".con3_top_3rd_2", {
        yPercent:-101,
    },'< 30%').from(".d_28", {
        yPercent:-101,
        ease:'bounce.out'
    },'< 30%').from(".con3_mid_mid_2nd", {
        yPercent:-30,
        opacity:0,
    },'< 30%').from(".con3_mid_mid_3rd", {
        yPercent:-30,
        opacity:0,
    },'< 30%').from(".d_30", {
//        repeat:-1,
//        yoyo:true,
        opacity:0,
        scale:3,
//        ease:  SteppedEase.config(1),
        duration:0.4,
    }).from(".d_31", {
//        repeat:-1,
//        yoyo:true,
        opacity:0,
        scale:3,
        
//        ease:  SteppedEase.config(1),
        duration:0.4,
    },'<').from(".con3_bottom_item_item", {
        yPercent:-30,
        opacity:0,
        stagger:0.3,
    },'<')
    let tl5 = gsap.timeline({  scrollTrigger: {
            trigger: ".con5_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl5.from(".con5_p", {
        yPercent:-100,
        opacity:0,
    },'< 30%').from(".con5_p_2", {
        yPercent:-100,
        opacity:0,
    },'< 30%').from(".con5_mid_item", {
        xPercent:-40,
        stagger:0.4,
        opacity:0,
    },'< 30%').from(".con5_arrow_item", {
        xPercent:-40,
        stagger:0.6,
        opacity:0,
    },'< 30%')


    let tl6 = gsap.timeline({  scrollTrigger: {
            trigger: ".con6_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl6.from(".con6_p_2", {
        yPercent:-100,
        opacity:0,
    },'< 30%').from(".d_47", {
        yPercent:-30,
        opacity:0,
    },'< 30%')

    let tl7 = gsap.timeline({  scrollTrigger: {
            trigger: ".form",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.8, ease: "power1.out" },
    });
    tl7.from(".con7_p_2", {
        yPercent:-100,
        opacity:0,
    },'< 30%').from(".form_row_label", {
        xPercent:-40,
        stagger:0.3,
        opacity:0,
    },'< 30%')

})