<template>
  <div>
    <i-panel>
      <view class="_panel_view">{{memberInfo.name}}</view>
      <span class="_panel_view_span">
        <i-icon type="setup_fill" size="30" color="#3F51B5" @click="setUpInfo"/>
        <i-icon type="remind_fill" size="30" color="#3F51B5" @click="changeToInfo"/>
      </span>
    </i-panel>

    <i-panel class="cell_panel">
      <i-cell :title="memberInfo.name" :label="memberInfo.address" is-link="true" url="/pages/user/detail/main"/>
    </i-panel>

    <i-panel class="cell_panel">
      <i-cell-group>
        <i-cell title="我的保修" is-link>
          <i-icon type="setup" slot="icon" size="30" color="#3F51B5"/>
        </i-cell>
        <i-cell title="我的租约" is-link>
          <i-icon type="document" slot="icon" size="30" color="#3F51B5"/>
        </i-cell>
        <i-cell title="看房记录" is-link>
          <i-icon type="accessory" slot="icon" size="30" color="#3F51B5"/>
        </i-cell>
      </i-cell-group>
    </i-panel>

    <i-panel class="cell_panel">
      <i-cell-group>
        <i-cell title="社区公告" is-link>
          <i-icon type="interactive_fill" slot="icon" size="30" color="#3F51B5"/>
        </i-cell>
        <i-cell title="用户反馈" is-link>
          <i-icon type="customerservice_fill" slot="icon" size="30" color="#3F51B5"/>
        </i-cell>
        <i-cell title="我的收藏" is-link>
          <i-icon type="collection_fill" slot="icon" size="30" color="#3F51B5"/>
        </i-cell>
      </i-cell-group>
    </i-panel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        memberInfo: {
          'name': '张三',
          'address': '广州市天河区宏泰智慧谷7楼701',
          'sex': 1,
          'age': 30
        }
      }
    },
    methods: {
      setUpInfo () {
        console.log('跳转到设置的页面')
      },
      changeToInfo () {
        console.log('跳转到信息页面')
      }
    }
  }
</script>

<style scoped>
  .cell_panel {
    display: block;
    margin-top: 10px;
  }

  ._panel_view {
    display: inline-block;
    margin-left: 45%
  }

  ._panel_view_span {
    margin-left: 17%
  }

</style>
