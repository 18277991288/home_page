<template>
  <div class="Timer">
    <el-button type="primary" plain @click="back" class="back">返回首页</el-button>
    <div id="countdown">
      <svg :width="size" :height="size">
        <circle
          fill="transparent"
          :stroke-width="stroke"
          stroke="#262628"  
          :r="radius"
          :cx="circleoffset"
          :cy="circleoffset"
          stroke-linecap="round"
        ></circle>
        <circle
          class="circle"
          fill="transparent"
          :stroke-width="stroke"
          stroke="#000"
          :r="radius"
          :cx="circleoffset"
          :cy="circleoffset"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progress"
        ></circle>
      </svg>
      <span>{{ countdown }}</span>
      
    </div>
    
    <el-button v-if="!start" type="success" round @click="animate" class="button1">开始</el-button>
    <el-button v-else type="warning" round @click="pause" class="button1">暂停</el-button>
    <el-button type="info" round @click="cancel" class="button2">取消</el-button>

    <div class="time">
      <p>设置</p>
      <!-- <input type="text" v-model="hours" placeholder="00" @keyup="dealTime"><p>小时</p> -->
      <input type="text" v-model="min" placeholder="00" @keyup="dealTime"><p>分钟</p>
      <input type="text" v-model="sec" placeholder="00" @keyup="dealTime"><p>秒</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 300, //圆尺寸
      stroke: 7, //进度条宽度
      percentage: 100, //进度条百分比
      timer: null,
      seconds: 0, //秒数
      start: false,
      min: '',
      hours: '',
      sec: '',
    };
  },
  computed: {
    //圆半径
    radius() {
      return this.size / 2 - this.stroke / 2;
    },

    

    //圆的位置，是size的一半才在正中间
    circleoffset() {
      return this.size / 2;
    },

    //圆周长
    circumference() {
      return this.radius * 2 * Math.PI;
    },

    //灰色进度条进度
    progress() {
      return this.circumference - (this.circumference * this.percentage) / 100;
    },

    //展示的时间
    countdown() {
      // return Math.ceil((this.seconds * this.percentage) / 100);
      let time = Math.ceil((this.seconds * this.percentage) / 100);
      return (
        (parseInt(time / 60) < 10
          ? "0" + parseInt(time / 60)
          : parseInt(time / 60)) +
        ":" +
        (time % 60 < 10 ? "0" + (time % 60) : time % 60)
      );
    },

  },
  methods: {
    // 启动倒计时
    animate() {
      this.start = true ;
      if(this.seconds <= 0) {
        this.$message("请设置时间");
      }else {
         this.timer = setInterval(() => {
        //控制倒计时秒速
        this.percentage = this.percentage - 1 / 10;
        if (this.percentage <= 0) {
          clearInterval(this.timer);
          this.percentage = 100;
          this.start = false ;
        }
      }, this.seconds);
      }
     
    },
    //处理时间
    dealTime() {
      this.seconds = this.sec * 1 + this.min * 60 + this.hours * 3600 ;
    },
    // 取消倒计时
    cancel() {
      clearInterval(this.timer);
      this.percentage = 100;
      this.start = false ;
    },
    // 暂停倒计时
    pause() {
      this.start = false ;
      clearInterval(this.timer);
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  min-height: 100vh;
  
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.Timer {
  width: 100%;
  height: 936px;
  background-color: #010101;
}

.circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke: #f1a33b; /* fallback for old browsers */
  /* -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);   */
  /* linear-gradient(to right, #ffdde1, #ee9ca7);  */
}

#countdown {
  display: inline-block;
  position: relative;
  left: 00px;
  top: 5%;
}

span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translatex(-50%) translatey(-50%);
  font-size: 70px;
  color: #ffffff; /* fallback for old browsers */
  /* -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);   */
  /* linear-gradient(to right, #ffdde1, #ee9ca7);  */
}

.button1 {
  position: fixed;
  font-size: 20px;
  top: 55%;
  right: 5%;
}
.button2 {
  position: fixed;
  font-size: 20px;
  top: 55%;
  left: 5%;
}
.time input {
  height: 40px;
  width: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
}
.time p {
  height: 40px;
  width: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
.time {
  width: 100%;
  height: 40px;
  position: fixed;
  top: 65%;
  display: flex;
  justify-content: center;
}
.back {
    position: fixed;
    top: 3%;
    left: 5%;
}
</style>