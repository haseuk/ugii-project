<template>
  <div id="app">
    <transition name="fade">
      <div>
        <Gnb/>
        <router-view/>
      </div>
    </transition>
  </div>
</template>

<script>

import Gnb from "@/components/Gnb";
export default {
  name: 'App',
  components: {Gnb}
}
</script>

<style lang="less">
@import "~@/less/font";
@import "~@/less/common";
@import "~@/less/base";
@import "~@/less/asset";
img { backface-visibility: hidden; }
#app > div { .abs; .lt; .tc;
  div + div { color:#333; .p(40,15); .-box; .w(70%); .mh-c; .tl; word-break: break-all; }
}
</style>
