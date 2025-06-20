<template>
  <div class="widgetbox">
    <div
      v-if="!form.widget.length"
      class="widget-empty-tip"
    >
      <i class="el-icon-warning-outline"></i>
      把左侧题型拖入此区域
    </div>
    <el-form label-position="top">
      <draggable
        class="widget-panel"
        v-model="form.widget"
        v-bind="{
          group: 'component',
          ghostClass: 'ghost',
          animation: 200,
          handle: '.widget-drag-button',
        }"
        @add="handleWidgetAdd"
      >
        <transition-group
          name="fade"
          tag="div"
          class="widget-panel-inner"
        >
          <template v-for="(e, i) in form.widget">
            <widget-item
              :key="i"
              v-if="e && e.key"
              :element="e"
              :index="i"
              :select.sync="widgetSelected"
              :form="form"
            ></widget-item>
          </template>
        </transition-group>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import WidgetItem from "./WidgetItem.vue";
export default {
  components: {
    Draggable,
    WidgetItem,
  },
  props: ["form", "select"],
  data() {
    return {
      widgetSelected: this.select,
    };
  },
  methods: {
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex;

      if (
        this.form.widget[newIndex].key &&
        this.form.widget.filter(
          (obj) => obj.key == this.form.widget[newIndex].key
        ).length > 1
      ) {
        this.form.widget.splice(newIndex, 1);
        this.$message.warning("预设组件同类型只能添加一次");
      } else {
        //为拖拽到容器的元素添加唯一 key
        const key =
          this.form.widget[newIndex].type +
          "_" +
          Date.parse(new Date()) +
          "_" +
          Math.ceil(Math.random() * 99999);

        this.$set(
          this.form.widget,
          newIndex,
          $.extend(true, { key }, this.form.widget[newIndex])
        );

        this.widgetSelected = this.form.widget[newIndex];
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