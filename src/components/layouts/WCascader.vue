<template>
  <div>
    <el-select
      :placeholder="element.options.placeholder"
      value=""
    ></el-select>
    <el-cascader-panel
      v-if="element.meta == 'position'"
      :value="['中国', '北京', '东城']"
      :props="{ label: 'value' }"
      :options="options"
    ></el-cascader-panel>
  </div>
</template>

<script>
import options from "../js/eef_country_options";
export default {
  props: ["element"],
  data() {
    return {
      options,
    };
  },
};
</script>