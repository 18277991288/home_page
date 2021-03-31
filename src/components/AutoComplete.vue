<template>
<div>
  <div id="autocomplete">

    <el-button type="primary" plain @click="back">返回首页</el-button>
    <span class="span">例子：a,b,c,开头的单词，北，广开头的文字</span>
    <input
      type="text"
      id="input"
      placeholder="有autocomplete的输入框"
      v-model="InputText"
    />
    <ul id="ul" v-show="isshow" v-for="(item,index) in SelectArrs" :key="index" @click="pushClink(item)">
      {{item}}
    </ul>
  </div>

</div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      arrs: [
        "a","applee","applef","alinkf","alinke","ays","await","ayanc",
        "bilibili","beep","before","become","being","by","bye","banana",
        "camp","chin","clam","coin","club","clinp","clop","cat",
        "北京","北海","北极","广西","广东","广阔","成都","重庆",
      ],
      isshow: false,
      InputText: "",
      SelectArrs: [],
    };
  },
  methods:{
    pushClink(item) {
        this.InputText = item;
        setTimeout(()=>{
        this.isshow = false;
        },10)  
    },
    back() {
      this.$router.go(-1);
    }

  },
  watch: {
    InputText: function (val) {
        this.SelectArrs = [];
      if (val.length == 0) {
        this.isshow = false;
      } else {
        this.isshow = true;
        this.arrs.forEach((item) => {
          if (item.indexOf(val) == 0 ) {
            this.SelectArrs.push(item);  
          } 
        });
      }
      
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#autocomplete {
  margin: 200px auto;
  position: relative;
}

ul {
  list-style: none;
  margin: 0 auto;
  background-color: #ededed;
  color: #3b200c;
  width: 400px;
  height: 30px;
  border: none;
  font-size: 20px;
  text-align: left;
}

li {
  cursor: pointer;
}

input {
  display: block;
  margin: 0 auto;
  line-height: 40px;
  height: 40px;
  width: 400px;
  font-size: 20px;
  background-color: #64d09c;
  border: none;
}
.span {
    font-size: 15px;
    text-align: center;
    margin-left: 800px;
}
.back {
    position: fixed;
    top: 100px;
    left: 100px;
}
</style>