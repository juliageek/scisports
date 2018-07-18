import Vue from 'vue';
import Vuex from 'vuex';
import data from '../json/players.json';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		players: [],
		data: data,
		searchWord: '',
		selectedPlayers: [],
		canNavigate: false
	},
	mutations: {
		filteredPlayers (state, search) {
			state.searchWord = search;
			if(!search){
				state.players=[];
			}
			else {
				state.players = state.data.filter(player => {
					if (player.name.includes(search)) {
						return player;
					}
				});
			}
		},
		selectPlayer (state, value) {
			const index = state.players.findIndex(player => {
				return player.name === value.name;
			});
			/*if (value.checked === false) {
				state.players[index].checked = true;
			} else {
				state.players[index].checked = false;
			}*/
			state.canNavigate = state.players.some(player => {
				return player.checked === true;
			})
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