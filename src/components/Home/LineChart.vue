<template>
  <div class="line-chart">
    <div class="sub-block">
      <div class="title">Activity</div>
      <canvas id="mycanvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','DEC','Jan'],
      blueLine: [6100,5200,1900,4050,3800,5500,6300,4900],
      redLine: [500,500,2500,3000,2300,500,900,2000],
      yellowLine: [7200,7000,5500,7200,5800,6100,7500,7400]
    }
  },
  mounted() {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext('2d');
    canvas.width = 860;
    canvas.height = 400;
    let nowMonth = new Date().getMonth()
    let drawPUBG = () => {
      // 格線系統
      for(let i = 0;i < 9; i++) {
        let pos = i * 40 + 40;
        ctx.beginPath();
        ctx.moveTo(80,pos);
        ctx.lineTo(860,pos);
        ctx.lineWidth=0.5;
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.stroke();
        if(i % 2 === 0) {
          ctx.save();
            ctx.translate(0, pos);
            ctx.beginPath()
            ctx.fillStyle='#9B9B9B';
            ctx.font="18px sans-serif";
            ctx.textAlign="end";
            ctx.fillText((8000 - i * 1000).toLocaleString('en-US'), 70, 6)
          ctx.restore();
        }
      }
      for(let i = 0;i < 8; i++) {
        let pos = i * 100 + 100;
        ctx.save();
          ctx.beginPath();
          ctx.translate(pos, 380);
          ctx.beginPath()
          ctx.fillStyle='#9B9B9B';
          ctx.font="18px sans-serif"
          ctx.fillText( `${i + nowMonth + 1 > 12 ? (i + nowMonth + 1) - 12 : i + nowMonth + 1}  ${ this.months[nowMonth + i]}`, 0, 5)
        ctx.restore();
      }
      
      //red line
      let transRedline = this.redLine.map(value => value / 1000 * 40);
      ctx.beginPath()
      ctx.moveTo(100, 360 - transRedline[0]);
      for(let i = 1; i < transRedline.length; i++){
        ctx.lineTo(100 * (i+1), 360 - transRedline[i])
      }
      ctx.strokeStyle = "#D0021B";
      ctx.stroke();
      //blue line
      let transBlueine = this.blueLine.map(value => value / 1000 * 40);
      ctx.beginPath()
      ctx.moveTo(100, 360 - transBlueine[0]);
      for(let i = 1; i < transBlueine.length; i++){
        ctx.lineTo(100 * (i+1), 360 - transBlueine[i])
      }
      ctx.strokeStyle = "#4A90E2";
      ctx.stroke();
      //blue line
      let transYellowLine = this.yellowLine.map(value => value / 1000 * 40);
      ctx.beginPath()
      ctx.moveTo(100, 360 - transYellowLine[0]);
      for(let i = 1; i < transYellowLine.length; i++){
        ctx.lineTo(100 * (i+1), 360 - transYellowLine[i])
      }
      ctx.strokeStyle = "#F5A623";
      ctx.stroke();
    }
    drawPUBG()
  }
}
</script>

<style lang="scss">

.line-chart{
	width: 100%;
	.sub-block{
		width: 100%;
		align-items: flex-start;
		overflow: auto;
		.title{
			margin-top: 30px;
			margin-left: 40px;
		}
	}
	#mycanvas{
		width: 100%;
		min-width: 600px;
	}
}
</style>
