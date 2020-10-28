<template>
  <div id="app">
    <my-button type="primary" size="small" @click="fn">按钮</my-button>
    <my-button type="success" round>钮</my-button>
    <my-button type="danger">按钮</my-button>
    <my-button type="info" size="small">按钮</my-button>
    <my-button type="danger" plain>按钮</my-button>
    <my-button type="danger" disabled>按钮</my-button>
    <my-button type="danger" circle icon="iconfont icon-yulan"></my-button>
    <div class="mt10">
      <my-input
              v-model="username"
              placeholder="请输入用户名"

      />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      value: "1223323",
      username: "lee",
    };
  },
  methods: {
    fn() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss">
.mt10 {
  margin-top: 10px;
}
</style>
