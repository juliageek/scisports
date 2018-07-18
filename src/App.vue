<template>
  <div id="app">
    <h2>Welcome to the players search wizard</h2>
    <div class="steps">
      <div class="step">
        <span class="step-number">1</span>
        <span class="step-title">Search for players</span>
      </div>
      <div class="step">
        <span class="step-number">2</span>
        <span class="step-title">Search for playing position</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import SelectPlayer from './components/SelectPlayer.vue';
import SelectPosition from './components/SelectPosition.vue';

export default {
  name: 'app',
  components: {
    SelectPlayer,
    SelectPosition
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '../public/styles.scss';
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  margin-top: 60px;
}
.steps {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: $marinblue;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.step-number {
  padding: 10px 15px;
  width: 15px;
  height: 15px;
  border-radius: 25px;
  background-color: $orange;
  color: #fff;
  margin: 10px 20px 10px 0;
}
.step-title {
  color: $grey;
}
</style>
