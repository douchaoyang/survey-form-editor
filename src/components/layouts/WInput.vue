<template>
  <div>
    <el-input :placeholder="element.options.placeholder"></el-input>
    <div v-if="element.options.smscode_active" class="sms-code">
      <el-input placeholder="请输入短信验证码"></el-input>
      <el-button type="text">获取短信验证码</el-button>
    </div>
    <div v-if="element.options.emailcode_active" class="sms-code">
      <el-input placeholder="请输入邮箱验证码"></el-input>
      <el-button type="text">获取邮箱验证码</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["element"],
};
</script>
