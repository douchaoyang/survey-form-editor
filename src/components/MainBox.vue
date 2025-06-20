<template>
  <div id="mainbox">
    <div class="asidebox">
      <aside-box></aside-box>
    </div>
    <div class="panelbox">
      <div class="editorbox">
        <div class="slogan">
          {{ form.setting.name ? form.setting.name : "未命名" }}
        </div>
        <widget-box :form="form" :select.sync="widgetSelected"></widget-box>
      </div>
    </div>
    <div class="attrbox">
      <div class="attrbox-cate">
        <span
          :class="activeConfig == 'widget' && 'active'"
          @click="handleSelectConfig('widget')"
          >题目设置</span
        >
        <span
          :class="activeConfig == 'form' && 'active'"
          @click="handleSelectConfig('form')"
          >表单设置</span
        >
      </div>
      <widget-config-box
        v-if="activeConfig == 'widget'"
        :element="widgetSelected"
      ></widget-config-box>
      <form-config-box
        v-if="activeConfig == 'form'"
        :form="form"
      ></form-config-box>
    </div>
  </div>
</template>

<script>
import AsideBox from "./AsideBox.vue";
import WidgetBox from "./WidgetBox.vue";
import WidgetConfigBox from "./WidgetConfigBox.vue";
import FormConfigBox from "./FormConfigBox.vue";
export default {
  name: "Main",
  components: {
    AsideBox,
    WidgetBox,
    WidgetConfigBox,
    FormConfigBox,
  },
  data() {
    return {
      widgetSelected: {},
      form: {
        setting: {
          name: "",
          success: "",
          force_update: true,
          force_rewrite: false,
          require_login: false,
          force_update_day: 0,
        },
        widget: [],
      },
      activeConfig: "widget",
    };
  },
  methods: {
    handleSelectConfig(val) {
      this.activeConfig = val;
    },
  },
  watch: {
    form: {
      deep: true,
      handler(val) {
        this.$emit("formchange", this.form);
      },
    },
  },
  async created() {
    if (this.$ls.getItem(this.formDataKey)) {
      this.form = JSON.parse(this.$ls.getItem(this.formDataKey));
    }

    window.__temp__form = this.form;

    this.$emit("formchange", this.form);

    if (this.form.widget.length) {
      this.widgetSelected = this.form.widget[0];
    }
  },
};
</script>