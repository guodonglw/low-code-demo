<template>
  <div class="title-container">
    <section class="title-area">
      <p>
        <span>
          <slot></slot>
        </span>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MyTitle',
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}

</script>
<style lang='less' scoped>
/* @import url(); 引入css类 */
.title-container {
  // border: 1px solid red;
  // height: 20px;

  .title-area {
    font-size: 16px;
    text-align: left;
    color: #4F6FBB;
    // margin-bottom: 20px;

    p {
      border-bottom: 1px solid #EAEDF8;
      padding-bottom: 16px;
    }

    span {
      border-bottom: 3px solid #506FBC;
      padding-bottom: 14px;
    }
  }
}
</style>
