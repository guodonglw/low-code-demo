<template>
  <div class="empty-area">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyEmpty'
}
</script>

<style lang="less" scoped>
.empty-area {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid blue;
  color: grey;
}
</style>
