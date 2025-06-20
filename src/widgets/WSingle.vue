<template>
  <div class="w-single">
    <el-radio-group v-if="element.options.type == 'radio'" v-model="value">
      <el-radio
        v-for="(e, i) in element.options.options"
        :key="i"
        :label="e.value"
      >
        <span v-html="e.value"></span>
      </el-radio>
    </el-radio-group>
    <el-select
      v-else-if="element.options.type == 'select'"
      v-model="value"
      :placeholder="element.options.placeholder"
    >
      <el-option
        v-for="(e, i) in element.options.options"
        :key="i"
        :value="e.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: ["element"],
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
</style>