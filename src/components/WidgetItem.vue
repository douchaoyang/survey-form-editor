<template>
  <div class="widget-item">
    <div
      class="widget-view"
      :class="{
        active: widgetSelected.key == element.key,
        required: element.options.required_active,
      }"
      @click.stop="handleSelectWidget(index)"
    >
      <el-form-item>
        <div
          class="label"
          v-if="element.options.label_active"
          v-html="element.options.label_text"
        ></div>
        <w-input
          v-if="element.type == 'input'"
          :element="element"
        ></w-input>
        <w-single
          v-if="element.type == 'single'"
          :element="element"
        ></w-single>
        <w-multiple
          v-if="element.type == 'multiple'"
          :element="element"
        ></w-multiple>
        <w-cascader
          v-if="element.type == 'cascader'"
          :element="element"
        ></w-cascader>
        <w-privacy
          v-if="element.type == 'privacy'"
          :element="element"
        ></w-privacy>
      </el-form-item>
    </div>
    <div
      class="widget-action"
      v-if="widgetSelected.key == element.key"
    >
      <i
        class="widget-delete-button el-icon-delete"
        @click.stop="handleWidgetDelete(index)"
      ></i>
      <i
        class="widget-copy-button el-icon-copy-document"
        @click.stop="handleWidgetClone(index)"
      ></i>
      <i class="widget-drag-button el-icon-rank"></i>
    </div>
  </div>
</template>

<script>
import WInput from "./layouts/WInput.vue";
import WSingle from "./layouts/WSingle.vue";
import WMultiple from "./layouts/WMultiple.vue";
import WCascader from "./layouts/WCascader.vue";
import WPrivacy from "./layouts/WPrivacy.vue";
export default {
  components: {
    WInput,
    WSingle,
    WMultiple,
    WCascader,
    WPrivacy,
  },
  props: ["element", "select", "index", "form"],
  data() {
    return {
      widgetSelected: this.select,
    };
  },
  methods: {
    handleSelectWidget(index) {
      this.widgetSelected = this.form.widget[index];
    },
    handleWidgetDelete(index) {
      if (this.form.widget.length - 1 === index) {
        if (index == 0) {
          this.widgetSelected = {};
        } else {
          this.widgetSelected = this.form.widget[index - 1];
        }
      } else {
        this.widgetSelected = this.form.widget[index + 1];
      }

      this.$nextTick(() => {
        this.form.widget.splice(index, 1);
      });
    },
    handleWidgetClone(index) {
      if (!/\d+$/.test(this.form.widget[index].key)) {
        this.$message.warning("预设组件同类型只能添加一次");
      } else {
        const key =
          this.form.widget[index].type +
          "_" +
          Date.parse(new Date().toString()) +
          "_" +
          Math.ceil(Math.random() * 99999);

        this.form.widget.splice(
          index,
          0,
          $.extend(true, {}, this.form.widget[index], { key })
        );

        this.$nextTick(() => {
          this.widgetSelected = this.form.widget[index + 1];
        });
      }
    },
  },
  watch: {
    select(val) {
      this.widgetSelected = val;
    },
    widgetSelected: {
      deep: true,
      handler(val) {
        this.$emit("update:select", val);
      },
    },
  },
};
</script>