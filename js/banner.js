export default class Banner {
    constructor($imgBox, $imgs, $arrowLeft, $arrowRight, n) {
        this.$imgBox = $imgBox;
        this.$imgs = $imgs;
        this.$arrowLeft = $arrowLeft;
        this.$arrowRight = $arrowRight;

        // 배너박스 + margin 
        // this.IMG_WIDTH = $box.width() + Number($imgs.css("margin-right").slice(0,-2));
        this.IMG_WIDTH = ($imgs.width() + Number($imgs.css("margin-right").slice(0,-2))) * n;


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
