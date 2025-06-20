<template>
  <div
    class="options-setting-box"
    :class="{ active, force }"
  >
    <p class="options-setting-title">{{ title }}</p>
    <draggable
      tag="ul"
      :list="list"
      v-bind="{
        group: { name: 'cascader', put: false },
        ghostClass: 'ghost',
        handle: '.options-drag-button',
      }"
    >
      <li
        v-for="(e, i) in list"
        :key="i"
        :class="{ active: i == activeIndex }"
      >
        <span
          class="options-setting-input"
          @click.stop="handleSelectOption(i)"
        >
          <el-input v-model="e.value"></el-input>
        </span>
        <template v-if="i == activeIndex">
          <i
            class="el-icon-delete options-delete-button"
            @click.stop="handleOptionDelete(i)"
          ></i>
          <!-- <i class="el-icon-rank options-drag-button"></i> -->
        </template>
      </li>
    </draggable>
    <div
      v-if="list"
      class="options-add-button"
      @click.stop="handleOptionAdd"
    >
      <i class="el-icon-plus"></i>
      添加选项
    </div>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
export default {
  props: ["title", "list", "level"],
  components: {
    Draggable,
  },
  data() {
    return {
      active: false,
      force: false,
      activeIndex: -1,
    };
  },
  methods: {
    handleOptionDelete(index) {
      this.$nextTick(() => {
        this.list.splice(index, 1);
        this.activeIndex = -1;
        this.handleEmitLevel();
      });
    },
    handleSelectOption(index) {
      this.$nextTick(() => {
        this.activeIndex = index;
        this.handleEmitLevel();
      });
    },
    /* 
			级联选择器暂不开放排序
			handleMoveEnd({ newIndex, oldIndex }) {
				if (this.activeIndex != -1) {
					this.activeIndex = newIndex;
					this.handleEmitLevel();
				}
			}, 
		*/

    /* 
			$bus通知所有OptionsSetting当前的选择，以此改变状态
		 */
    handleEmitLevel() {
      this.$bus.$emit(
        "optionssettingchange",
        this.level + "_" + this.activeIndex
      );
      this.handleEmitList();
    },
    /* 
			结合watch list 此处为无限向下通知
			通知下一级选项集如何改变
			如果不是children不展示添加按钮
		 */
    handleEmitList() {
      if (this.activeIndex == -1 || this.list.length == 0) {
        this.$emit("change", null);
      } else {
        this.$emit("change", this.list[this.activeIndex].children);
      }
    },
    handleOptionAdd() {
      this.$nextTick(() => {
        this.list.push({
          value: "新增选项",
          children: [],
        });
      });
    },
  },
  watch: {
    /* 
			当前列表改变时，同样通知下一级
			规避列表渲染bug
		 */
    list: {
      deep: true,
      handler() {
        this.handleEmitList();
      },
    },
  },
  created() {
    /* 
			接收$bus通知
			level[0]，当前点击的列表级
			level[1]，当前点击的列表级所选项
		 */
    this.$bus.$on("optionssettingchange", (lv) => {
      let level = lv.split("_");
      for (let i in level) {
        level[i] = parseInt(level[i]);
      }

      /* 
				如果操作当前列表后有选中的项，
				父级灰色高亮，当前级深度高亮。
				否则关闭高亮，当前无选中项，且需要通知下一级
			 */
      if (this.activeIndex != -1 && this.level <= level[0]) {
        this.active = true;
        this.force = this.level == level[0];
      } else {
        this.active = false;
        this.activeIndex = -1;
        this.handleEmitList();
      }
    });
  },
};
</script>