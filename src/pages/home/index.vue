<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
      </f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
      </f7-nav-right>
    </f7-navbar>
    <f7-block strong>
      <p>Here is an example for framework7-vue-webpack.</p>
    </f7-block>
    <f7-block-title>个人相关</f7-block-title>
    <f7-list>
      <f7-list-item link="/to-be-approved/" title="待我审批"></f7-list-item>
      <f7-list-item link="/my-request/" title="我发起的审批"></f7-list-item>
      <f7-list-item link="/personal-info/" title="个人信息"></f7-list-item>
      <f7-list-item link="/salary-search/" title="薪资查询"></f7-list-item>
    </f7-list>
    <f7-block-title>费用报销</f7-block-title>
    <f7-list>
      <f7-list-item link="/requisition/" title="费用申请"></f7-list-item>
      <f7-list-item link="/expense-detail/" title="费用明细"></f7-list-item>
      <f7-list-item link="/reimbursement/" title="费用报销"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>
