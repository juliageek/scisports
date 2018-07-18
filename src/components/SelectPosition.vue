<template>
  <div>
    <form class="player-position-form">
      <span class="position-text">Select the player's position from the list below.</span>
      <div class="positions-list-wrapper">
        <div class="position-category">
          <input type="checkbox" class="player-checkbox">
          <span>goalkeeper</span>
        </div>
        <div class="position-category">
          <input type="checkbox" class="player-checkbox">
          <span>left-back</span>
        </div>
        <div class="position-category">
          <input type="checkbox" class="player-checkbox">
          <span>center-middfielder</span>
        </div>
        <div class="position-category">
          <input type="checkbox" class="player-checkbox">
          <span>right-back</span>
        </div>
        <div class="position-category">
          <input type="checkbox" class="player-checkbox">
          <span>center-forward</span>
        </div>
        <div class="position-category">
          <input type="checkbox" class="player-checkbox">
          <span>left-middfielder</span>
        </div>
        <div class="position-category">
          <input type="checkbox" class="player-checkbox">
          <span>center-back</span>
        </div>
      </div>
      <button class="ok-button">Ok</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SelectPosition',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../public/styles.scss';
.position-text {
  padding: 20px 0;
}
.player-position-form {
  @include form;
  padding: 0;
  width: 100%;
}
.player-checkbox {
  padding: 3px;
  width: 30px;
}
.positions-list-wrapper {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
.position-category {
  padding: 10px;
}
.ok-button {
  @include button;
  margin: 20px;
}
.ok-button:enabled {
  background-color: $orange;
}
.ok-button:enabled:hover {
  background-color: $lightyellow
}
.ok-button:disabled, .ok-button:disabled:hover {
  background-color: $grey;
}
</style>
