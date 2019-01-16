<template>
    <div>
        <canvas id='myCanvas' width='600' height='300'
        style='border:1px solid #666'></canvas>
    </div>
</template>
<script>
export default {
    data(){
        return{
            myData:[
                {x: 471, y: 277, value: 25},
                {x: 438, y: 375, value: 97},
                {x: 373, y: 19, value: 71},
                {x: 473, y: 42, value: 63},
                {x: 463, y: 95, value: 97},
                {x: 590, y: 437, value: 34},
                {x: 377, y: 442, value: 66},
                {x: 171, y: 254, value: 20},
                {x: 6, y: 582, value: 64},
                {x: 387, y: 477, value: 14},
                {x: 300, y: 300, value: 80}
            ],
            radius:50,
            min:10,
            max:120,
            defaultColorStops:{
                0: "#0ff",
                0.2: "#0f0",
                0.4: "#ff0",
                1: "#f00",
            }
        }
    },
    // 画圆：arc(x, y, radius, startAngle, endAngle, anticlockwise)
    // 径向渐变：createRadialGradient(x1, y1, r1, x2, y2, r2)
    // 定义渐变规则：addColorStop(position, color)
    methods:{
        init(){
            let c = document.getElementById('myCanvas'),
                context = c.getContext("2d");
            this.myData.forEach(pointer=>{
                let {x,y,value} = pointer;
                
                context.beginPath();
                context.arc(x, y, this.radius, 0, 2*Math.PI);
                context.closePath();

                let radialGradient = context.createRadialGradient(x, y,0,x,y,this.radius);
                radialGradient.addColorStop(0,'rgba(0,0,0,1)');
                radialGradient.addColorStop(1,'rgba(0,0,0,0)');
                context.fillStyle = radialGradient;

                let globalAlpha = (value - this.min)/(this.max - this.min);
                context.globalAlpha = Math.max(Math.min(globalAlpha, 1), 0 );

                context.fill();
            });

            let imageData = context.getImageData(0,0,600,300);
            let data = imageData.data;
            for(var i = 3; i < data.length;i+=4){
                let alpha = data[i];
                let color = this.initPal(alpha);
                data[i - 3] = color[0];
                data[i - 2] = color[1];
                data[i - 1] = color[2];
            }
            context.putImageData(imageData,0,0);
        },
        initPal(position){         
            let colorStops = this.defaultColorStops,
                width = 20,
                height = 256;

            let canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            let ctx = canvas.getContext("2d");

            let linearGradient = ctx.createLinearGradient(0,0,0,height);
            for(const key in colorStops){
                linearGradient.addColorStop(key, colorStops[key]);
            }

            ctx.fillStyle = linearGradient;
            ctx.fillRect(0,0,width,height);

            let imageData = ctx.getImageData(0,0,1,height).data;
            // canvas = canvas;
            return imageData.slice(position*4,position*4+3);
        }
    },
    mounted() {
        this.init();
    },
}
</script>