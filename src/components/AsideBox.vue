<template>
  <div class="componentsbox">
    <p
      class="components-cate"
      v-if="basicComponents.length"
    >
      基础字段
    </p>
    <draggable
      tag="ul"
      :list="basicComponents"
      v-bind="{
        group: {
          name: 'component',
          pull: 'clone',
          put: false,
        },
        sort: false,
        ghostClass: 'ghost',
      }"
      @start="handleMoveStart"
      @move="handleMove"
      @end="handleMoveEnd"
    >
      <template v-for="(e, i) in basicComponents">
        <li :key="i">
          <span><i :class="e.icon"></i>{{ e.name }}</span>
        </li>
      </template>
    </draggable>
    <p
      class="components-cate"
      v-if="layoutComponents.length"
    >
      常用问题
    </p>
    <draggable
      tag="ul"
      :list="layoutComponents"
      v-bind="{
        group: {
          name: 'component',
          pull: 'clone',
          put: false,
        },
        sort: false,
        ghostClass: 'ghost',
      }"
      @start="handleMoveStart"
      @move="handleMove"
      @end="handleMoveEnd"
    >
      <template v-for="(e, i) in layoutComponents">
        <li :key="i">
          <span><i :class="e.icon"></i>{{ e.name }}</span>
        </li>
      </template>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import { basicComponents, layoutComponents } from "./js/componentsConfig";
export default {
  components: {
    Draggable,
  },
  data() {
    return {
      basicComponents,
      layoutComponents,
    };
  },
  methods: {
    handleMoveEnd(evt) {
      // console.log("end", evt);
    },
    handleMoveStart({ oldIndex }) {
      // console.log("start", oldIndex, this.basicComponents);
    },
    handleMove() {
      return true;
    },
  },
};
</script>