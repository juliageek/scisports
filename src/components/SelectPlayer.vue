<template>
  <div>
    <form class="player-search-form">
      <input type="text" placeholder="Search for a player" v-model="searchWord">
      <form v-for="player in players" v-if="players.length > 0" class="players-checkbox-list">
        <input class="player-checkbox" type="checkbox" v-bind:key="player.name" :value="player.name" v-model="selectPlayer" @change="onChange">{{player.name}}<br>
      </form>
      <button class="next-button" type="submit" :disabled="!canGoToNextStep" @click="goToSelectPosition">Next</button>
    </form>
  </div>
</template>

<script>
import store from '../vuex';

export default {
  name: 'SelectPlayer',
  data() {
  	return {
  		selectedPlayers: [],
        canGoToNextStep: false
    }
  },
  computed: {
      players() {
      	return store.state.players;
      },
      canNavigate() {
      	return store.state.canNavigate;
      },
      selectPlayer: {
	      get() {
		      return store.state.players;
	      },
	      set(value) {
		      store.dispatch('selectPlayer', value)
	      }
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
  	  onChange(){
	      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	      const checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
	      console.log(this.canGoToNextStep);
          this.canGoToNextStep = checkedOne;
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
</style>
