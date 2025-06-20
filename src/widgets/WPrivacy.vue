<template>
  <div class="w-privacy">
    <div class="privacy">
      <el-checkbox v-model="value"></el-checkbox>
      <span v-html="element.options.title"></span>
    </div>
    <div class="privacy-expand" v-show="expand">
      <i class="el-icon-close privacy-icon" @click="expand = false"></i>
      <p class="privacy-title">{{ element.options.name }}</p>
      <p class="privacy-content" v-html="element.options.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["element"],
  data() {
    return {
      value: "",
      expand: true,
    };
  },
};
</script>

<style>
</style>