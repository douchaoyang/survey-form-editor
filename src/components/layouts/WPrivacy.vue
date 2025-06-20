<template>
  <div class="privacy">
    <p class="privacy-title">
      <el-checkbox label=""></el-checkbox>
      <span v-html="element.options.title"></span>
    </p>
    <p class="privacy-icon">
      <i class="el-icon-close"></i>
    </p>
    <p class="privacy-name">{{ element.options.name }}</p>
    <p
      class="privacy-content"
      v-html="element.options.content"
    ></p>
    <p
      class="privacy-tip"
      v-if="element.options.required_active"
    >
      {{ element.options.required_tip }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["element"],
};
</script>