<template>
  <div gnb>
    <transition name="fade">
      <div>
        <router-link to="/" class="home">Home</router-link>
        <ul>
          <li v-for="(nav, i) in navs" :key="i">
            <RouterLink :to="`/${nav}`">{{ nav }}</RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Gnb",

  data() {
    return {
      navs: ['html', 'js', 'vue', 'webSecurity' ],

    }
  }
}
</script>

<style lang="less">
@import "~@/less/asset";
[gnb] { .w(100vw); .h(60); .tc;
  .home { .wh(60,60); .abs; .lt(20,0); .br(50%); background-color: aquamarine; .lh(60); }
  li { .ib; .wh(180,60); .lh(60); .m(0,5);
    a { .lh(60); .block; .f; .tc; .br(5);  .bgc(#999); }
  }
}
</style>