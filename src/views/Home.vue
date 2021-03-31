<template>
  <div id="wrap" :style="{ height: screenHeight + 'px' }">
    <div id="main" :style="{ top: nowTop + 'px' }">
      <ul id="pageUl" type="circle">
        <li id="pageUlLi1" class="pageUlLi" :class="{ active: curIndex == 1 }">
          &nbsp;
        </li>
        <li id="pageUlLi2" class="pageUlLi" :class="{ active: curIndex == 2 }">
          &nbsp;
        </li>
        <li id="pageUlLi3" class="pageUlLi" :class="{ active: curIndex == 3 }">
          &nbsp;
        </li>
        <li id="pageUlLi4" class="pageUlLi" :class="{ active: curIndex == 4 }">
          &nbsp;
        </li>
      </ul>
      <div id="page1" class="page">
        <div class="text">
          <p>你好，我叫陶星宇</p>
          <p>今年21岁</p>
          <p>我是一名前端开发工程师，坐标武汉</p>
          <p>不如...</p>
          <p>下滑来认识一下我吧？</p>
        </div>
      </div>
      <div id="page2" class="page">
        <div class="skills">
          <h2>下面是我对前端技术的掌握程度</h2>
          <div class="skill">
            <h5>Html5/Css3</h5>
            <el-progress
              type="circle"
              :percentage="80"
              :color="customColorMethod"
              :width="80"
            ></el-progress>
          </div>
          <div class="skill">
            <h5>JavaScript</h5>
            <el-progress
              type="circle"
              :percentage="80"
              :color="customColorMethod"
              :width="80"
            ></el-progress>
          </div>
          <div class="skill">
            <h5>Vue</h5>
            <el-progress
              type="circle"
              :percentage="80"
              :color="customColorMethod"
              :width="80"
            ></el-progress>
          </div>
          <div class="skill">
            <h5>jQuery</h5>
            <el-progress
              type="circle"
              :percentage="60"
              :color="customColorMethod"
              :width="80"
            ></el-progress>
          </div>
          <div class="skill">
            <h5>微信小程序</h5>
            <el-progress
              type="circle"
              :percentage="60"
              :color="customColorMethod"
              :width="80"
            ></el-progress>
          </div>
          <div class="skill">
            <h5>webpack/Git</h5>
            <el-progress
              type="circle"
              :percentage="60"
              :color="customColorMethod"
              :width="80"
            ></el-progress>
          </div>
          <div class="skill">
            <h5>Node</h5>
            <el-progress
              type="circle"
              :percentage="40"
              :color="customColorMethod"
              :width="80"
            ></el-progress>
          </div>
        </div>
      </div>
      <div id="page3" class="page">
        <div class="project">
          <h1>作品集</h1>
          <div class="swiper">
            <el-carousel :interval="5000" type="card" height="200px">
              <el-carousel-item>
                <img
                  src="http://p1.music.126.net/iOmohM1Sf9EHrun5jD-S-A==/109951165845341191.jpg"
                  alt=""
                  @click="projectClick1"
                />
                <div class="swipertext">EnjoyMusic移动端音乐app</div>
              </el-carousel-item>
              <el-carousel-item>
                <img
                  @click="projectClick2"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180925%2Fe8cf94faf46e4b738cd71b53658b93d7.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619684822&t=fab9d3678c287e0f766f36799ccc7f9b"
                  alt=""
                />
                <div class="swipertext">搜索联想demo</div>
              </el-carousel-item>
              <el-carousel-item>
                <img
                  @click="projectClick3"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2Fi1%2F769674070%2FTB2Us2Im25TBuNjSspmXXaDRVXa_%21%21769674070.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619685134&t=844a9ebbf09e712c1a37ffcc24046de5"
                  alt=""
                />
                <div class="swipertext">计算器demo</div>
              </el-carousel-item>
              <el-carousel-item>
                <img
                  @click="projectClick4"
                  src="http://bpic.588ku.com//back_origin_min_pic/21/03/15/ef1c10c0034fc71cc7f8829dc7183005.jpg!/fw/750/quality/99/unsharp/true/compress/true"
                  alt=""
                />
                <div class="swipertext">移动端计时器demo</div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div id="page4" class="page">
        <div class="text1">
          <h3 class="title">Thank for watch</h3>
          <p>如需联系我，可通过如下方式</p>
          <div class="icon">
            <el-popover
              placement="bottom-end"
              title="邮箱"
              :width="100"
              trigger="hover"
              content="2609813922@qq.com"
            >
              <template #reference>
                <img
                  src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/mail.png"
                  alt=""
                />
              </template>
            </el-popover>
            <el-popover
              placement="bottom"
              title="微信"
              :width="100"
              trigger="hover"
              content="19522968814。"
            >
              <template #reference>
                <img
                  src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/wechat.png"
                  alt=""
                />
              </template>
            </el-popover>
            <el-popover
              placement="bottom-start"
              title="GitHub"
              :width="100"
              trigger="hover"
              content="点击前往GitHub。"
            >
              <template #reference>
                <img
                  src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/github.png"
                  alt=""
                  @click="gitClick"
                />
              </template>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script scoped>
export default {
  name: "Home",
  data() {
    return {
      screenWeight: 0, // 屏幕宽度
      screenHeight: 0, // 屏幕高度
      index: 1, // 用于判断翻页
      curIndex: 1, // 当前页的index
      startTime: 0, // 翻屏起始时间
      endTime: 0, // 上一次翻屏结束时间
      nowTop: 0, // 翻屏后top的位置
      pageNum: 0, // 一共有多少页
      main: Object,
      obj: Object,
      percentage: 20,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      visible: false,
    };
  },
  mounted() {
    this.screenWeight = document.documentElement.clientWidth;
    this.screenHeight = document.documentElement.clientHeight;
    this.main = document.getElementById("main");
    this.obj = document.getElementsByTagName("div");
    for (let i = 0; i < this.obj.length; i++) {
      if (this.obj[i].className == "page") {
        this.obj[i].style.height = this.screenHeight + "px";
      }
    }
    this.pageNum = document.querySelectorAll(".page").length;

    // 浏览器兼容
    if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
      document.addEventListener("DOMMouseScroll", this.scrollFun, false);
    } else if (document.addEventListener) {
      document.addEventListener("mousewheel", this.scrollFun, false);
    } else if (document.attachEvent) {
      document.attachEvent("onmousewheel", this.scrollFun);
    } else {
      document.onmousewheel = this.scrollFun;
    }
  },
  methods: {
    scrollFun(event) {
      this.startTime = new Date().getTime();
      // mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
      // DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
      let delta = event.detail || -event.wheelDelta;
      // 如果当前滚动开始时间和上次滚动结束时间的差值小于1.5s，则不执行翻页动作，这样做是为了实现类似节流的效果
      if (this.startTime - this.endTime > 1500) {
        if (
          delta > 0 &&
          parseInt(this.main.offsetTop) >=
            -(this.screenHeight * (this.pageNum - 2))
        ) {
          // 向下滚动
          this.index++;
          this.toPage(this.index);
        } else if (delta < 0 && parseInt(this.main.offsetTop) < 0) {
          // 向上滚动
          this.index--;
          this.toPage(this.index);
        }
        // 本次翻页结束，记录结束时间，用于下次判断
        this.endTime = new Date().getTime();
      }
    },
    // 翻页
    toPage(index) {
      if (index != this.curIndex) {
        let delta = index - this.curIndex;
        this.nowTop = this.nowTop - delta * this.screenHeight;
        this.curIndex = index;
      }
    },
    //进度条
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    gitClick() {
      location.href = "https://github.com/18277991288";
    },
    projectClick1() {
      location.href = "http://18277991288.host3v.vip/#/home";
      console.log(1);
    },
    projectClick2() {
      this.$router.push("AutoComplete");
    },
    projectClick3() {
      this.$router.push("Calculator");
    },
    projectClick4() {
      this.$router.push("Timer");
    },
  },
};
</script>
<style>
html,
body {
  height: 100%;
}

body,
ul,
li,
a,
p,
div {
  /*慎删*/
  padding: 0px;
  margin: 0px;
}

#wrap {
  overflow: hidden;
  width: 100%;
}

#main {
  position: relative;
  transition: top 1.5s;
}

.page {
  /*谨删*/
  width: 100%;
  margin: 0;
}

#page1 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_3.jpg")
    center center no-repeat;
  background-size: 100%;
  position: relative;
}

#page2 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_7.jpg")
    center center no-repeat;
  background-size: 100%;
  position: relative;
}

#page3 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_11.jpg")
    center center no-repeat;
  background-size: 100%;
  position: relative;
}

#page4 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_10.jpg")
    center center no-repeat;
  background-size: 100%;
  position: relative;
}

.pageUlLi {
  width: 20px;
  height: 20px;
}

#pageUl {
  position: fixed;
  right: 10px;
  bottom: 50%;
  font-size: 30px;
}

.active {
  color: #409eff;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 650px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  border-radius: 10px;
  font-family: youzai;
  font-size: 30px;
  line-height: 42px;
}
.text1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 650px;
  height: 300px;
  text-align: center;
  border-radius: 10px;
  font-family: youzai;
  font-size: 30px;
  line-height: 42px;
}
.text p {
  margin-top: 14px;
}
.skills {
  width: 30%;
  height: 80%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-0%, -50%);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
}
.skills h2 {
  margin-top: 20px;
}
.skill {
  height: 85px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.skill h5 {
  height: 30px;
  width: 120px;
  margin-right: 20px;
}

.project {
  width: 55%;
  height: 45%;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
.swiper {
  width: 85%;
  height: 80%;
  margin: 70px auto;
}
.swiper img {
  width: 100%;
  height: 85%;
}

.swiper ul {
  transform: translate(63%);

}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.btn_list {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.text1 img {
  width: 100px;
  height: 100px;
}
.icon {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>