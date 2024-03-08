
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

// 인테리어 이미지
let $interiorImgs = $(".interior-img img");
$interiorImgs.each((index, item)=>{
    $(item).hover(()=>{
        $(item).css("transform", "scale(1.05)");
        $(item).css("transition", "0.2s ease");
                
    }, ()=>{
        $(item).css("transform", "scale(1)");
        $(item).css("transition", "0.2s ease");
    });
});

// 오늘의 기획전 이미지
let $exhibitionImgs = $(".special_exhibition-img img");
$exhibitionImgs.each((index, item)=>{
    $(item).hover(()=>{
        $(item).css("transform", "scale(1.05)");
        $(item).css("transition", "0.2s ease");
                
    }, ()=>{
        $(item).css("transform", "scale(1)");
        $(item).css("transition", "0.2s ease");
    });
});


// 베스트-이미지
let $productionImgs = $(".production-item img");
$productionImgs.each((index, item)=>{
    $(item).hover(()=>{
        $(item).css("transform", "scale(1.1)");
        $(item).css("transition", "0.2s ease");
                
    }, ()=>{
        $(item).css("transform", "scale(1)");
        $(item).css("transition", "0.2s ease");
    });
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



class Banner_t {
    constructor($imgBox, $imgs, $arrowLeft, $arrowRight, n) {
        this.$imgBox = $imgBox;
        this.$imgs = $imgs;
        this.$arrowLeft = $arrowLeft;
        this.$arrowRight = $arrowRight;
  
        // 배너박스 + margin 
        // this.IMG_WIDTH = $box.width() + Number($imgs.css("margin-right").slice(0,-2));
        // this.IMG_WIDTH = ($imgs.width() + Number($imgs.css("margin-right").slice(0,-2))) * n;
        this.IMG_WIDTH = $imgBox.width() - 1136;
  
        $arrowLeft.on("click", () => {
            this.prevImg();
        });
  
        $arrowRight.on("click", () => {
            this.nextImg();
        });
    }
  
    nextImg() {
        this.$arrowRight.css("display", "none");
        this.$arrowLeft.css("display", "block");
  
        this.$imgBox.css("left", -this.IMG_WIDTH);
        this.$imgBox.css("transition", "0.5s ease");
    }
  
    prevImg() {
        this.$arrowRight.css("display", "block");
        this.$arrowLeft.css("display", "none");
  
        this.$imgBox.css("left", 0);
        this.$imgBox.css("transition", "0.5s ease");
    }
  }

  const bestBanner = new Banner_t(
    $(".best_nav-box"),
    $(".best_nav-box li"),
    $(".section-nav .arrow-box-left"),
    $(".section-nav .arrow-box-right"),
    6
);