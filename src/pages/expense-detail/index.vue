<template>
  <f7-page>
    <f7-navbar back-link="Back"></f7-navbar>
    <f7-block-title>费用明细</f7-block-title>
    <f7-list>
      <f7-list-item>费用明细</f7-list-item>
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
