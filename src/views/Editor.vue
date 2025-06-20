<template>
  <div id="editor">
    <div id="actionbar">
      <div class="description">
        <i class="el-icon-back" @click="back"></i>
        <p>调查表单编辑器<span>Survey Form Editor</span></p>
      </div>
      <div class="action">
        <router-link to="/survey" target="_blank">
          <el-button round size="medium" icon="el-icon-view"> 预览 </el-button>
        </router-link>
        <el-button
          round
          size="medium"
          type="primary"
          icon="el-icon-s-promotion"
          @click="save"
        >
          保存
        </el-button>
        <el-dropdown>
          <div class="user">
            <i class="el-icon-s-custom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Author@Chaoyang Dou</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <main-box @formchange="change"></main-box>
  </div>
</template>

<script>
import MainBox from "../components/MainBox.vue";
export default {
  components: {
    MainBox,
  },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    change(val) {
      this.form = val;
    },
    back() {
      history.go(-1);
    },
    valid() {
      return new Promise((resolve, reject) => {
        if (!this.form.setting.name) {
          this.$message.error("请填写调查表单名称");
          return false;
        }

        let labels = [];

        let keys = [];

        for (
          let i = 0, widget = this.form.widget;
          i < this.form.widget.length;
          i++
        ) {
          if (
            widget[i].options.label_active &&
            widget[i].options.label_text != ""
          ) {
            labels.push(widget[i].options.label_text);
          }

          keys.push(widget[i].key);

          if (widget[i].options.pattern_active) {
            try {
              new RegExp(widget[i].options.pattern_regexp);
            } catch (error) {
              this.$message.error(`第${i + 1}个组件中正则语法错误`);
              return false;
            }
          }
        }

        if (new Set(labels).size !== labels.length) {
          this.$message.error(`表单中存在相同标题的组件`);
          return false;
        }

        if (new Set(keys).size !== keys.length) {
          this.$message.error(`表单中存在相同key的组件`);
          return false;
        }

        resolve();
      });
    },
    save() {
      this.valid().then(() => {
        this.$ls.setItem(this.formDataKey, JSON.stringify(this.form));
        this.$message.success(
          `${
            this.form.setting.success ? this.form.setting.success : "保存成功"
          }`
        );
      });
    },
  },
};
</script>
<style lang="stylus">
@import ('~@/styles/editor.styl');
</style>