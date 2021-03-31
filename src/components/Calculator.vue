<template>
  <div id="Calculator">
       <el-button type="primary" plain @click="back" class="back">返回首页</el-button>
    <div id="box">
      <table>
        <tr>
          <td><input type="button" value="del" @click="del()" /></td>
          <td><input type="button" value="C" @click="clean()" /></td>
          <td colspan="2">
            <input type="text" style="width: 200px" value="" v-model="rel" />
          </td>
        </tr>
        <tr>
          <td><input type="button" value="7" @click="add('7')" /></td>
          <td><input type="button" value="8" @click="add('8')" /></td>
          <td><input type="button" value="9" @click="add('9')" /></td>
          <td><input type="button" value="/" @click="add('/')" /></td>
        </tr>

        <tr>
          <td><input type="button" value="4" @click="add('4')" /></td>
          <td><input type="button" value="5" @click="add('5')" /></td>
          <td><input type="button" value="6" @click="add('6')" /></td>
          <td><input type="button" value="*" @click="add('*')" /></td>
        </tr>

        <tr>
          <td><input type="button" value="1" @click="add('1')" /></td>
          <td><input type="button" value="2" @click="add('2')" /></td>
          <td><input type="button" value="3" @click="add('3')" /></td>
          <td><input type="button" value="-" @click="add('-')" /></td>
        </tr>

        <tr>
          <td><input type="button" value="0" @click="add('0')" /></td>
          <td><input type="button" value="." @click="add('.')" /></td>
          <td><input type="button" value="+" @click="add('+')" /></td>
          <td><input type="button" value="=" v-on:click="result()" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rel: "",
    };
  },
  methods: {
    add(index) {
      //这里就是按键绑定的方法，把获取到的值拼接到rel字符串上
      this.rel += index;
    },
    result() {
      this.rel = eval(this.rel); //这里是用eval方法进行一个计算
      this.rel = String(this.rel); //这里的目的是为了显示在显示栏的数字还是字符串，只有字符串才能进行退格，归零的操作
    },
    del() {
      //这个就是退格的操作，用字符串的substring方法截取，每一次截取都是从第0个开始，到长度的前一个，就相当于退格了。
      this.rel = this.rel.substring(0, this.rel.length - 1);
    },
    clean() {
      //这里就是归零的方法，通过给结果赋一个空字符串的方法来实现归零的操作，当然也可以使用删除的方法，例如unshift方法或者pop方法，直接赋值为空比较简便。
      this.rel = "";
    },
    back() {
      this.$router.go(-1);
    }
  },
};
</script>

<style scoped>
#Calculator {
    margin: 200px auto;
}
input {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  line-height: 100px;
  text-align: center;
  border-radius: 10px;
  background-color: gainsboro;
  outline: none;
  font-size: 20px;
}
table {
  background-color: #b3d7ff;
  margin: auto;
}
.back {
    position: fixed;
    top: 100px;
    left: 100px;
}
</style>