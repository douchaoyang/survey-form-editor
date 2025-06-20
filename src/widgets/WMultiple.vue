<template>
  <div class="w-multiple">
    <el-checkbox-group v-if="element.options.type == 'radio'" v-model="value">
      <el-checkbox
        v-for="(e, i) in element.options.options"
        :key="i"
        :label="e.value"
      >
        <span v-html="e.value"></span>
      </el-checkbox>
    </el-checkbox-group>
    <el-select
      v-else-if="element.options.type == 'select'"
      v-model="value"
      multiple
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
      value: [],
    };
  },
};
</script>

<style>
</style>