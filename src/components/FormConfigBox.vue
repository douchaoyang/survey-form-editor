<template>
  <div class="config">
    <div class="config-section">
      <div class="config-item">
        <div class="config-title">
          <p>表单名称</p>
        </div>
        <div class="config-content">
          <el-input
            placeholder="请输入表单名称"
            v-model="form.setting.name"
          ></el-input>
        </div>
      </div>
      <div class="config-item">
        <div class="config-title">
          <p>提交成功提示文案</p>
        </div>
        <div class="config-content">
          <el-input
            placeholder="自定义成功提示文案"
            v-model="form.setting.success"
          ></el-input>
        </div>
      </div>
    </div>
    <div class="config-section">
      <div class="config-item">
        <div class="config-title">
          <p>强制更新用户资料</p>
          <el-switch v-model="form.setting.force_update"></el-switch>
        </div>
      </div>
      <div class="config-item">
        <div class="config-title">
          <p>强制用户重新填写</p>
          <el-switch v-model="form.setting.force_rewrite"></el-switch>
        </div>
      </div>
      <!-- 已删除天数设置 -->
      <div
        v-if="false"
        class="config-item"
      >
        <div class="config-content">
          <el-input
            placeholder=""
            v-model="form.setting.force_update_day"
          >
            <template slot="append">天</template>
          </el-input>
        </div>
      </div>
      <div class="config-item">
        <div class="config-title">
          <p>需要登录填写</p>
          <el-switch v-model="form.setting.require_login"></el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["form"],
};
</script>