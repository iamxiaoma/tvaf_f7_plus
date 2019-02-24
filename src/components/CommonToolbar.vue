<template>
  <f7-toolbar tabbar labels>
      <f7-link href="/" tab-link="" :tab-link-active="active == 'home'" text="F7Demos" icon-ios="f7:email_fill" icon-md="material:email"></f7-link>
      <f7-link href="/about/" tab-link="" :tab-link-active="active == 'about'" text="H5Plus" icon-ios="f7:today_fill" icon-md="material:today"></f7-link>
      <f7-link href="/form/" tab-link="" :tab-link-active="active == 'form'" text="我的" icon-ios="f7:cloud_fill" icon-md="material:file_upload"></f7-link>
    </f7-toolbar>
</template>

<script>
export default {
  name: 'CommonToolbar',
  props: {
    active: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
