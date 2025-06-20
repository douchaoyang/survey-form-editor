<template>
  <div class="config" v-if="show">
    <div class="config-section">
      <p class="config-cate">基础设置</p>

      <div class="config-item">
        <div class="config-title">
          <p>题目key <span>非必要不改</span></p>
        </div>
        <div class="config-content" v-if="element.key">
          <el-input
            v-model="element.key"
            :disabled="layouts.indexOf(element.meta) != -1"
          ></el-input>
        </div>
      </div>

      <div class="config-item" v-if="'label_active' in element.options">
        <div class="config-title">
          <p>题目名称</p>
          <el-switch v-model="element.options.label_active"></el-switch>
        </div>
        <div class="config-content" v-if="element.options.label_active">
          <el-input
            v-forbid-script
            type="textarea"
            rows="1"
            resize="none"
            v-model="element.options.label_text"
          ></el-input>
        </div>
      </div>

      <div class="config-item" v-if="'placeholder' in element.options">
        <div class="config-title">
          <p>占位文案</p>
        </div>
        <div class="config-content">
          <el-input v-model="element.options.placeholder"></el-input>
        </div>
      </div>

      <div class="config-item" v-if="'smscode_active' in element.options">
        <div class="config-title">
          <p>开启验证</p>
          <el-switch v-model="element.options.smscode_active"></el-switch>
        </div>
      </div>

      <div class="config-item" v-if="'emailcode_active' in element.options">
        <div class="config-title">
          <p>开启验证</p>
          <el-switch v-model="element.options.emailcode_active"></el-switch>
        </div>
      </div>

      <div class="config-item" v-if="'second_active' in element.options">
        <div class="config-title">
          <p>开启二级<span>(技术领域)</span></p>
          <el-switch v-model="element.options.second_active"></el-switch>
        </div>
      </div>

      <template v-if="element.type == 'privacy'">
        <div class="config-item">
          <div class="config-title">
            <p>隐私条款标题</p>
          </div>
          <div class="config-content">
            <el-input
              v-forbid-script
              type="textarea"
              rows="1"
              resize="none"
              v-model="element.options.title"
            ></el-input>
          </div>
        </div>
        <div class="config-item">
          <div class="config-title">
            <p>隐私条款名称</p>
          </div>
          <div class="config-content">
            <el-input v-model="element.options.name"></el-input>
          </div>
        </div>
        <div class="config-item">
          <div class="config-title">
            <p>隐私条款内容</p>
          </div>
          <div class="config-content">
            <el-input
              v-forbid-script
              type="textarea"
              rows="1"
              resize="vertical"
              v-model="element.options.content"
            ></el-input>
          </div>
        </div>
      </template>
    </div>

    <div
      class="config-section"
      v-if="element.type == 'single' || element.type == 'multiple'"
    >
      <p class="config-cate">选项设置</p>
      <div class="config-item">
        <div class="config-title">
          <p>自定义选项</p>
          <el-switch
            v-model="element.options.type"
            active-text="下拉"
            inactive-text="平铺"
            active-value="select"
            inactive-value="radio"
          ></el-switch>
        </div>
        <div class="config-content config-options">
          <draggable
            tag="ul"
            :list="element.options.options"
            v-bind="{
              group: { name: 'options', put: false },
              ghostClass: 'ghost',
              handle: '.options-drag-button',
            }"
          >
            <li v-for="(e, i) in element.options.options" :key="i">
              <el-input
                v-forbid-script
                type="textarea"
                rows="1"
                resize="none"
                v-model="e.value"
              ></el-input>
              <i
                class="el-icon-delete options-delete-button"
                @click.stop="handleOptionDelete(i)"
              ></i>
              <i class="el-icon-rank options-drag-button"></i>
            </li>
          </draggable>
          <div class="options-add-button" @click.stop="handleOptionAdd">
            <i class="el-icon-plus"></i>
            添加选项
          </div>
        </div>
      </div>
    </div>

    <div
      class="config-section"
      v-if="
        element.type == 'cascader' &&
        hideCascaderSetting.indexOf(element.meta) < 0
      "
    >
      <p class="config-cate">选项设置</p>
      <div class="config-item">
        <div class="config-title">
          <p>自定义选项</p>
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="handleOpenOptionsSetting"
          >
            编辑
          </el-button>
        </div>
      </div>
    </div>

    <div class="config-section">
      <p class="config-cate">填写限制</p>

      <div class="config-item" v-if="'required_active' in element.options">
        <div class="config-title">
          <p>此题必答</p>
          <el-switch v-model="element.options.required_active"></el-switch>
        </div>
        <div class="config-content" v-if="element.options.required_active">
          <el-input
            placeholder="自定义错误提示文案"
            v-model="element.options.required_tip"
          ></el-input>
        </div>
      </div>

      <div class="config-item" v-if="'pattern_active' in element.options">
        <div class="config-title">
          <p>正则表达式</p>
          <el-switch v-model="element.options.pattern_active"></el-switch>
        </div>
        <div class="config-content" v-if="element.options.pattern_active">
          <el-input
            placeholder="填写正则表达式例^[a-z]$"
            v-model="element.options.pattern_regexp"
          ></el-input>
          <el-input
            placeholder="自定义错误提示文案"
            v-model="element.options.pattern_tip"
          ></el-input>
        </div>
      </div>
    </div>
    <el-dialog
      append-to-body
      :close-on-click-modal="false"
      v-if="
        element.type == 'cascader' &&
        hideCascaderSetting.indexOf(element.meta) < 0
      "
      title="选项设置"
      :visible.sync="openOptionsSetting"
      @open="handleOptionsSettingOpen"
    >
      <div class="options-setting-panel">
        <options-setting
          title="一级选项"
          level="1"
          :list="element.options.options"
          @change="handle1change"
        ></options-setting>
        <options-setting
          title="二级选项"
          level="2"
          :list="options2"
          @change="handle2change"
        ></options-setting>
        <options-setting
          title="三级选项"
          level="3"
          :list="options3"
        ></options-setting>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import OptionsSetting from "./OptionsSetting.vue";
import { layoutComponents } from "./js/componentsConfig";

export default {
  props: ["element"],
  components: {
    Draggable,
    OptionsSetting,
  },
  data() {
    return {
      openOptionsSetting: false,
      hideCascaderSetting: ["position", "work-industry-sector"],
      options2: [],
      options3: [],
      layouts: [],
    };
  },
  created() {
    layoutComponents.map((e) => {
      this.layouts.push(e.meta);
    });
  },
  methods: {
    /* 选择题 */
    handleOptionDelete(index) {
      this.$nextTick(() => {
        this.element.options.options.splice(index, 1);
      });
    },
    handleOptionAdd() {
      this.$nextTick(() => {
        this.element.options.options.push({
          value: "新增选项",
        });
      });
    },

    /* 级联选择器 */
    handleOpenOptionsSetting() {
      this.openOptionsSetting = true;
    },
    /* 1级改变时改变2级 */
    handle1change(val) {
      this.options2 = val;
    },
    /* 2级改变时改变3级，类推 */
    handle2change(val) {
      this.options3 = val;
    },
    handleOptionsSettingOpen() {
      /* 弹窗时初始化选项信息，只展示第一列 */
      this.$nextTick(() => {
        this.$bus.$emit("optionssettingchange", "0_-1");
      });
    },
  },
  directives: {
    forbidScript: {
      inserted(el) {
        el.addEventListener("input", function (event) {
          const value = event.target.value;
          // 使用正则表达式检查是否包含<script>标签
          event.target.value = value.replace(
            /\<script.*?\>.*?\<\/script\>/gi,
            ""
          );
        });
      },
    },
  },
  computed: {
    show() {
      return this.element && Object.keys(this.element).length > 0;
    },
  },
};
</script>