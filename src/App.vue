<template>
  <div>
    <h1>Hello Vue-Loader!!!</h1>
    <h2>Hello {{message}}</h2>
    <div v-for="c in colors">
      <div
        v-for="i in 10"
        :class="`box box-${c}-${i}`">{{`${c}-${i}`}}</div>
    </div>
    <icon />
  </div>
</template>

<script>
  // import icon from './components/icon/icon.vue'
  export default {
    name: "App",

    mixins: [],

    components: {
      icon,
    },

    props: {},

    data() {
      return {
        message: 'Vue!',
        colors: ['blue', 'cyan', 'green', 'pink', 'red', 'orange', 'yellow']
      }
    },

    computed: {},

    watch: {},

    created() {
    },

    mounted() {
    },

    destroyed() {
    },

    methods: {}
  }
</script>

<style lang="less">
  @import "./theme/colors";

  @box-scale: 100px;

  .box {
    height: @box-scale;
    width: @box-scale;
    display: inline-block;
    line-height: @box-scale;
    text-align: center;
    color: #fff;
  }

  .genbox(@i, @prex) when (@i > 0) {
    @bcolor: "@{prex}-@{i}";
    .box-@{prex}-@{i} {
      background-color: @@bcolor;
    }
    .genbox(@i - 1, @prex);
  }

  html, body, #app {
    margin: 0;
    padding: 0;

    & h1 {
      color: @blue-6;
      // background-color: #f00;
    }
  }

  .genbox(10, blue);
  .genbox(10, purple);
  .genbox(10, cyan);
  .genbox(10, green);
  .genbox(10, pink);
  .genbox(10, red);
  .genbox(10, orange);
  .genbox(10, yellow);
</style>
