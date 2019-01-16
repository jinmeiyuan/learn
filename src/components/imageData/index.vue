<template>
    <div>
        <img id='image' src="../../assets/flower.jpg"></img>
        <canvas id='canvas2' width='500' height='300'></canvas>
        <div>
            <a @click='unify("reverse")'>反转</a>
            <a @click='unify("toGrey")'>置灰</a>
            <a @click='unify("toGreyMax")'>置灰(最大)</a>
            <a @click='unify("blackWhite")'>黑白滤镜</a>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        reverse(ctx2,imageData){
            for(var i = 0; i < imageData.data.length; i += 4){
                // 颜色反转
                imageData.data[i] = 255 - imageData.data[i];
                imageData.data[i+1] = 255 - imageData.data[i+1];
                imageData.data[i+2] = 255 - imageData.data[i+2];
                imageData.data[i+3] = 255;
            }
            ctx2.putImageData(imageData,0,0);
        },
        unify(form){
            let c2 = document.getElementById("canvas2");
            let ctx2 = c2.getContext("2d");
            let img = document.getElementById("image");
            ctx2.drawImage(img,0,0);
            let imageData = ctx2.getImageData(0,0,c2.width,c2.height);
            switch(form){
                case 'reverse':
                    this.reverse(ctx2,imageData);
                    break;
                case 'toGrey':
                    this.toGrey(ctx2,imageData);
                    break;
                case 'toGreyMax':
                    this.toGreyMax(ctx2,imageData);
                    break;
                case 'blackWhite':
                    this.blackWhite(ctx2,imageData);
                    break;
            }
        },
        toGrey(ctx2,imageData){
            for(var i = 0; i < imageData.data.length; i += 4){
                //去灰度
                var gray = Math.floor((imageData.data[i]+imageData.data[i+1]+imageData.data[i+2])/3);
                imageData.data[i] = gray;
                imageData.data[i+1] = gray;
                imageData.data[i+2] = gray;
            }
            ctx2.putImageData(imageData,0,0);
        },
        toGreyMax(ctx2,imageData){
            for(var i = 0; i < imageData.data.length; i += 4){
                var gray = Math.max((imageData.data[i],imageData.data[i+1],imageData.data[i+2]));
                imageData.data[i] = gray;
                imageData.data[i+1] = gray;
                imageData.data[i+2] = gray;
            }
            ctx2.putImageData(imageData,0,0);
        },
        blackWhite(ctx2,imageData){
            for(var i = 0; i < imageData.data.length; i += 4){
                //对每一个灰度值给一个黑白的分类
                var gray = imageData.data[i]*0.3+imageData.data[i+1]*0.59+imageData.data[i+2]*0.11;
                var v= 0;
                if(gray > 255/2){
                    v = 255;
                }
                imageData.data[i] = v;
                imageData.data[i+1] = v;
                imageData.data[i+2] = v;
            }
            ctx2.putImageData(imageData,0,0);
        }
    },
}
</script>
<style>
a{
    display:block;
    height:32px;
}
</style>