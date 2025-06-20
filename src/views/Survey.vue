<template>
  <div id="survey">
    <div class="survey-container" v-if="widget.length">
      <h1>{{ setting.name }}</h1>
      <div class="item" v-for="(item, index) in widget" :key="index">
        <label
          :class="item.options.required_active && 'required'"
          v-if="item.options.label_active && item.options.label_text"
          v-html="item.options.label_text"
        ></label>
        <div class="item-box">
          <component :is="`w-${item.type}`" :element="item"></component>
        </div>
      </div>
      <div class="submit" @click="submit">提交</div>
    </div>
  </div>
</template>

<script>
import WInput from "../widgets/WInput.vue";
import WCascader from "../widgets/WCascader.vue";
import WMultiple from "../widgets/WMultiple.vue";
import WPrivacy from "../widgets/WPrivacy.vue";
import WSingle from "../widgets/WSingle.vue";
export default {
  components: {
    WInput,
    WCascader,
    WMultiple,
    WPrivacy,
    WSingle,
  },
  data() {
    return {
      widget: [],
      setting: {},
    };
  },
  methods: {
    submit() {
      this.$message.success(`${this.setting.success}`);
    },
  },
  created() {
    if (this.$ls.getItem(this.formDataKey)) {
      const { widget, setting } = JSON.parse(
        this.$ls.getItem(this.formDataKey)
      );
      this.widget = widget;
      this.setting = setting;
    } else {
      this.$message.error(`没有表单数据`);
    }
  },
};
</script>

<style lang="stylus">
@import ('~@/styles/survey.styl');
</style>