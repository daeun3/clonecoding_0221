
// =========================== main img ===========================

//(css 로는 mouseout에 transition을 줄 수 없어서 js로 구현)
let $mainImg = $(".main-img img");
$mainImg.hover(()=>{
    $mainImg.css("transform", "scale(1.05)");
    $mainImg.css("transition", "0.2s ease");
    
}, ()=>{
    $mainImg.css("transform", "scale(1)");
    $mainImg.css("transition", "0.2s ease");
});

// =========================== banner ===========================

// let $bannerBox = $(".banner-box");
let $bannerImgBox = $(".banner-img-box");
let $bannerImgs = $(".banner-img");

const IMG_WIDTH = 220;
const IMG_LENGTH = $bannerImgs.length;
let currentIdx = 0;

setInterval(()=>{
    nextImg();
}, 2000);

function nextImg() {
    currentIdx++;

    if(currentIdx == IMG_LENGTH) currentIdx = 0;

    $bannerImgBox.css("left", -(currentIdx*IMG_WIDTH));
    $bannerImgBox.css("transition", "0.5s ease");
}

function prevImg() {
    currentIdx--;
    $bannerImgBox.css("left", -(currentIdx*IMG_WIDTH));
    $bannerImgBox.css("transition", "0.5s ease");
}


// function hideBtn() {
//     if(currentIdx == IMG_LENGTH - 1) {
        
//     }
// }

// console.log(IMG_LENGTH);



// 다같이 커져서 보류
// $bannerImgs.hover(()=>{
//     console.log("호버했당");
//     $bannerImgs.css("transform", "scale(1.05)");
//     $bannerImgs.css("transition", "0.2s ease");
    
// }, ()=>{
//     $bannerImgs.css("transform", "scale(1)");
//     $bannerImgs.css("transition", "0.2s ease");
// });