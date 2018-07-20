import Vue from 'vue';
import Vuex from 'vuex';
import data from '../json/players.json';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		players: [],
		data: data,
		searchWord: '',
		canNavigate: false
	},
	/*getters: {
	 getPlayersWithCheckedState (state) {
	 if (state.players.length > 0) {
	 return state.players.forEach(player => {
	 Vue.set(player, 'checked', false);
	 })
	 } else {
	 return state.players;
	 }
	 }
	 },*/
	mutations: {
		filteredPlayers (state, search) {
			state.searchWord = search;
			if(search){
				state.data.forEach(player => {
					Vue.set(player, 'checked', false);
			});
				state.players = state.data.filter(player => {
						if (player.name.includes(search)) {
					return player;
				}
			});
			}
		},
		selectPlayer (state, payload) {
			if(state.players) {
				state.players.map(player => {
					if (player.name === payload) {
					Vue.set(player, 'checked', true);
				}
			})
			}
		}
	},
	actions: {
		filterPlayers(context, search) {
			context.commit('filteredPlayers', search);
		},
		selectPlayer(context, value) {
			context.commit('selectPlayer', value);
		}
	}
});