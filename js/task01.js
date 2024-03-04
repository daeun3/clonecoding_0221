
import MainBanner from './main_banner.js'
import Banner from './banner.js'

// =========================== main img ===========================

//(css로는 mouseout에 transition을 줄 수 없어서 js로 구현)
let $mainImg = $(".main-img img");
$mainImg.hover(()=>{
    $mainImg.css("transform", "scale(1.05)");
    $mainImg.css("transition", "0.2s ease");
    
}, ()=>{
    $mainImg.css("transform", "scale(1)");
    $mainImg.css("transition", "0.2s ease");
});

// =========================== banner ===========================
const mainBanner = new MainBanner(
    $(".side-banner"),
    $(".banner-box"),
    $(".banner-img-box"),
    $(".banner-img"),
    $(".side-banner .arrow-box-left"),
    $(".side-banner .arrow-box-right")
);

mainBanner.autoSlide();     //작동 시작


// console.log(mainBanner);
// console.log(mainBanner.IMG_WIDTH);

// =========================== interior-pictures ===========================

const interiorBanner = new Banner(
    // $(".interior-contents"),
    $(".interior-box"),
    $(".interior-box li"),
    $(".interior-pictures .arrow-box-left"),
    $(".interior-pictures .arrow-box-right"),
    6                                               //몇 개를 숨길지 알려줘야 함.
);

// console.log(interiorBanner);
// console.log(interiorBanner.IMG_WIDTH);

// =========================== special_exhibition ===========================

const exhibitionBanner = new Banner(
    // $(".special_exhibition-contents"),
    $(".special_exhibition-box"),
    $(".special_exhibition-box li"),
    $(".special_exhibition .arrow-box-left"),
    $(".special_exhibition .arrow-box-right"),
    1
);

// console.log(exhibitionBanner);
// console.log(exhibitionBanner.IMG_WIDTH);