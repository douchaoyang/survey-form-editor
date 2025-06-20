<template>
  <div class="w-input">
    <el-input
      :id="element.key"
      :placeholder="element.options.placeholder"
      v-model="value"
    ></el-input>
    <template v-if="element.options.smscode_active">
      <el-input class="code" placeholder="请输入短信验证码" v-model="code">
        <button circle slot="append">获取验证码</button>
      </el-input>
    </template>
    <template v-if="element.options.emailcode_active">
      <el-input class="code" placeholder="请输入邮箱验证码" v-model="code">
        <button slot="append">获取验证码</button>
      </el-input>
    </template>
  </div>
</template>

<script>
export default {
  props: ["element"],
  data() {
    return {
      value: "",
      code: "",
    };
  },
};
</script>

<style>
</style>