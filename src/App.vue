<script>
  export default {
    created () {
      console.log('created')
    },
    mounted () {
      console.log('mounted')
    },
    onLoad () {
      console.log('onLoad')
    },
    onShow () {
      console.log('onShow')
    },
    onHide () {
      console.log('onHide')
    },
    onUnload () {
      console.log('onUnLoad')
    }
  }
</script>

<style>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200 rpx 0;
    box-sizing: border-box;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
