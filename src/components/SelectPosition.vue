<template>
  <div>
    <form class="player-position-form">
      <span class="position-text">Select the player's position from the list below.</span>
      <div class="positions-list-wrapper">
        <div class="position-category" v-for="player in selectedPlayers">
          <input type="checkbox" class="player-checkbox">
          <span>{{player.position}}</span>
        </div>
      </div>
      <div class="buttons-wrapper">
        <button class="ok-button" @click="goBack">
          <i class="fas fa-arrow-left"></i>
          Back
        </button>
        <button class="ok-button">Ok</button>
      </div>
    </form>
  </div>
</template>

<script>
	import store from '../vuex';
	export default {
		name: 'SelectPosition',
		computed: {
			selectedPlayers() {
				return store.state.players.filter(player => {
					if (player.checked === true) {
						return player;
					}
				})
			}
		},
		methods: {
			goBack() {
				this.$router.push('/select-player');
			}
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
  .buttons-wrapper {
    display: flex;
    align-items: flex-start;
  }
</style>
