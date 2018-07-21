<template>
  <div>
    <form class="player-search-form">
      <input type="text" placeholder="Search for a player" v-model="searchWord">
      <form v-for="player in players" v-if="players.length > 0" class="players-checkbox-list">
        <input class="player-checkbox" type="checkbox" v-bind:key="player.name" :value="player.name" @change="selectPlayer" :checked="player.checked">{{player.name}}<br>
      </form>
      <button class="next-button" :disabled="!canNavigate" @click="goToSelectPosition">
        <i class="fas fa-arrow-right"></i>Next
      </button>
    </form>
  </div>
</template>

<script>
	import store from '../vuex';

	export default {
		name: 'SelectPlayer',
		computed: {
			players() {
				return store.state.players;
			},
			canNavigate() {
				return store.getters.canNavigate;
			},
			searchWord: {
				get() {
					return store.state.searchWord;
				},
				set(value) {
					store.dispatch('filterPlayers', value);
				}
			}
		},
		methods: {
			selectPlayer(event){
				store.dispatch('selectPlayer', event.target.value);
				store.dispatch('changeCanNavigate');
			},
			goToSelectPosition(){
				this.$router.push('/select-position');
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../public/styles.scss';
  .next-button {
    @include button;
    margin: 20px 0;
  }
  .next-button:enabled {
    background-color: $orange;
  }
  .next-button:enabled:hover {
    background-color: $lightyellow
  }
  .next-button:disabled, .next-button:disabled:hover {
    background-color: $grey;
  }
  .player-search-form {
    @include form;
  }
  .players-checkbox-list {
    background-color: $lightred;
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
  .player-checkbox {
    padding: 3px;
    width: 30px;
  }
  input[type="checkbox"]:checked {
    background-color: orangered;
  }
</style>
