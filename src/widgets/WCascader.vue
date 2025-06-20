<template>
  <div class="w-cascader">
    <el-cascader
      v-model="value"
      :props="{ label: 'value' }"
      :options="options"
    ></el-cascader>
  </div>
</template>

<script>
import countrys from "./js/eef_country_options";
import industrys from "./js/eef_industry_options";

export default {
  props: ["element"],
  data() {
    return {
      value: "",
      options: "",
    };
  },
  methods: {
    renderOption(val) {
      if (val == "position") {
        return countrys;
      } else if (val == "work-industry-sector") {
        return industrys;
      } else {
        return this.element.options.options;
      }
    },
  },
  created() {
    this.options = this.renderOption(this.element.key);
  },
};
</script>

<style>
</style>