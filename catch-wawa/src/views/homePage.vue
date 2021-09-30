<template>
  <div class="main-page">
    <div class="doll" @click="jumpDoll"></div>
    <div class="rank" @click="jumpRank"></div>
    <div class="treasure" @click="jumpTreasure"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    jumpDoll() {
      this.$router.push('/doll')
    },
    jumpRank() {
      this.$router.push('/rank')
    },
    jumpTreasure() {
      this.$router.push('/')
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.main-page {
  width: 1080px;
  height: 4361px;
  background: url(../assets/imgs/bg-main.png) 0 0 /100% no-repeat;
  position: relative;
  .doll {
    position: absolute;
    top: 1550px;
    left: 0;
    height: 1266px;
    width: 100%;
  }
  .rank {
    position: absolute;
    top: 2600px;
    left: 0;
    height: 1266px;
    width: 100%;
  }
  .treasure {
    position: absolute;
    top: 3450px;
    left: 0;
    height: 1266px;
    width: 100%;
  }
}
</style>
