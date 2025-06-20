<template>
  <div>
    <ul v-if="element.options.type == 'radio'">
      <li
        v-for="(e, i) in element.options.options"
        :key="i"
      >
        <el-radio label=""></el-radio>
        <span v-html="e.value"></span>
      </li>
    </ul>
    <el-select
      value=""
      v-if="element.options.type == 'select'"
      placeholder="请选择"
    ></el-select>
  </div>
</template>

<script>
export default {
  props: ["element"],
};
</script>