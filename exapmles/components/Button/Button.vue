<template>
  <button
    class="my-button"
    :class="[
      type ? 'my-button--' + type : '',
      size ? 'my-button--' + size : '',
      {
        'is-round': round,
        'is-disabled': disabled,
        'is-circle': circle,
        'is-plain': plain,
      },
    ]"
    @click="handleClick"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "middle",
    },
    round: Boolean,
    plain: Boolean,
    disabled: Boolean,
    circle: Boolean,
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-button-group > .my-button.is-active,
.my-button-group > .my-button.is-disabled,
.my-button-group > .my-button:active,
.my-button-group > .my-button:focus,
.my-button-group > .my-button:hover {
  z-index: 1;
}
.my-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.my-button + .my-button {
  margin-left: 10px;
}
.my-button:focus,
.my-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.my-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}
.my-button::-moz-focus-inner {
  border: 0;
}
.my-button [class*="el-icon-"] + span {
  margin-left: 5px;
}
.my-button.is-plain:focus,
.my-button.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.my-button.is-active,
.my-button.is-plain:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
}
.my-button.is-plain:active {
  background: #fff;
  outline: 0;
}
.my-button.is-disabled,
.my-button.is-disabled:focus,
.my-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.my-button.is-disabled.my-button--text {
  background-color: transparent;
}
.my-button.is-disabled.is-plain,
.my-button.is-disabled.is-plain:focus,
.my-button.is-disabled.is-plain:hover {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}
.my-button.is-loading {
  position: relative;
  pointer-events: none;
}
.my-button.is-loading:before {
  pointer-events: none;
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: rgba(255, 255, 255, 0.35);
}
.my-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.my-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.my-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.my-button--primary:focus,
.my-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.my-button--primary.is-active,
.my-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
.my-button--primary:active {
  outline: 0;
}
.my-button--primary.is-disabled,
.my-button--primary.is-disabled:active,
.my-button--primary.is-disabled:focus,
.my-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.my-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.my-button--primary.is-plain:focus,
.my-button--primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
.my-button--primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
  outline: 0;
}
.my-button--primary.is-plain.is-disabled,
.my-button--primary.is-plain.is-disabled:active,
.my-button--primary.is-plain.is-disabled:focus,
.my-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.my-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.my-button--success:focus,
.my-button--success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}
.my-button--success.is-active,
.my-button--success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
}
.my-button--success:active {
  outline: 0;
}
.my-button--success.is-disabled,
.my-button--success.is-disabled:active,
.my-button--success.is-disabled:focus,
.my-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.my-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.my-button--success.is-plain:focus,
.my-button--success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}
.my-button--success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: 0;
}
.my-button--success.is-plain.is-disabled,
.my-button--success.is-plain.is-disabled:active,
.my-button--success.is-plain.is-disabled:focus,
.my-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.my-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.my-button--warning:focus,
.my-button--warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}
.my-button--warning.is-active,
.my-button--warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
}
.my-button--warning:active {
  outline: 0;
}
.my-button--warning.is-disabled,
.my-button--warning.is-disabled:active,
.my-button--warning.is-disabled:focus,
.my-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.my-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}
.my-button--warning.is-plain:focus,
.my-button--warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}
.my-button--warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: 0;
}
.my-button--warning.is-plain.is-disabled,
.my-button--warning.is-plain.is-disabled:active,
.my-button--warning.is-plain.is-disabled:focus,
.my-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.my-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.my-button--danger:focus,
.my-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
.my-button--danger.is-active,
.my-button--danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}
.my-button--danger:active {
  outline: 0;
}
.my-button--danger.is-disabled,
.my-button--danger.is-disabled:active,
.my-button--danger.is-disabled:focus,
.my-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.my-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}
.my-button--danger.is-plain:focus,
.my-button--danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
.my-button--danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: 0;
}
.my-button--danger.is-plain.is-disabled,
.my-button--danger.is-plain.is-disabled:active,
.my-button--danger.is-plain.is-disabled:focus,
.my-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}
.my-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.my-button--info:focus,
.my-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}
.my-button--info.is-active,
.my-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}
.my-button--info:active {
  outline: 0;
}
.my-button--info.is-disabled,
.my-button--info.is-disabled:active,
.my-button--info.is-disabled:focus,
.my-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.my-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.my-button--info.is-plain:focus,
.my-button--info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}
.my-button--info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: 0;
}
.my-button--info.is-plain.is-disabled,
.my-button--info.is-plain.is-disabled:active,
.my-button--info.is-plain.is-disabled:focus,
.my-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.my-button--text,
.my-button--text.is-disabled,
.my-button--text.is-disabled:focus,
.my-button--text.is-disabled:hover,
.my-button--text:active {
  border-color: transparent;
}
.my-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.my-button--mini,
.my-button--small {
  font-size: 12px;
  border-radius: 3px;
}
.my-button--medium.is-round {
  padding: 10px 20px;
}
.my-button--medium.is-circle {
  padding: 10px;
}
.my-button--small,
.my-button--small.is-round {
  padding: 9px 15px;
}
.my-button--small.is-circle {
  padding: 9px;
}
.my-button--mini,
.my-button--mini.is-round {
  padding: 7px 15px;
}
.my-button--mini.is-circle {
  padding: 7px;
}
.my-button--text {
  color: #409eff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}
.my-button--text:focus,
.my-button--text:hover {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}
.my-button--text:active {
  color: #3a8ee6;
  background-color: transparent;
}
.my-button-group {
  display: inline-block;
  vertical-align: middle;
}
.my-button-group::after,
.my-button-group::before {
  display: table;
  content: "";
}
.my-button-group::after {
  clear: both;
}
.my-button-group > .my-button {
  float: left;
  position: relative;
}
.my-button-group > .my-button + .my-button {
  margin-left: 0;
}
.my-button-group > .my-button:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.my-button-group > .my-button:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.my-button-group > .my-button:first-child:last-child {
  border-radius: 4px;
}
.my-button-group > .my-button:first-child:last-child.is-round {
  border-radius: 20px;
}
.my-button-group > .my-button:first-child:last-child.is-circle {
  border-radius: 50%;
}
.my-button-group > .my-button:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.my-button-group > .my-button:not(:last-child) {
  margin-right: -1px;
}
.my-button-group > .el-dropdown > .my-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--primary:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--primary:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--primary:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--success:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--success:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--success:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--warning:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--warning:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--warning:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--danger:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--danger:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--danger:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--info:first-child {
  border-right-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--info:last-child {
  border-left-color: rgba(255, 255, 255, 0.5);
}
.my-button-group .my-button--info:not(:first-child):not(:last-child) {
  border-left-color: rgba(255, 255, 255, 0.5);
  border-right-color: rgba(255, 255, 255, 0.5);
}
</style>