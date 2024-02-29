export default class MainBanner {
    constructor($totalBox, $box, $imgBox, $imgs, $arrowLeft, $arrowRight) {
        this.$totalBox = $totalBox;
        // this.$box = $box;
        this.$imgBox = $imgBox;
        // this.$imgs = $imgs;
        this.$arrowLeft = $arrowLeft;
        this.$arrowRight = $arrowRight;

        this.IMG_WIDTH = $box.width();
        this.IMG_LENGTH = $imgs.length;

        this.currentIdx = 0;

        $arrowLeft.on("click", () => {
            this.prevImg();
        });

        $arrowRight.on("click", () => {
            this.nextImg();
        });

        $totalBox.on("mouseenter", ()=>{
            clearInterval(this.interval);
        });

        $totalBox.on("mouseleave", ()=>{
            this.autoSlide();
        });
    }

    nextImg() {
        this.currentIdx++;
        if (this.currentIdx == this.IMG_LENGTH) this.currentIdx = 0;
        this.$imgBox.css("left", -(this.currentIdx * this.IMG_WIDTH));
        this.$imgBox.css("transition", "0.5s ease");
    }

    prevImg() {
        this.currentIdx--;
        this.$imgBox.css("left", -(this.currentIdx * this.IMG_WIDTH));
        this.$imgBox.css("transition", "0.5s ease");
    }

    autoSlide() {
        this.interval = setInterval(()=>{
            this.nextImg();
        }, 2000);
    }
}
