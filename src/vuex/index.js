import Vue from 'vue';
import Vuex from 'vuex';
import playersList from '../json/players.json';
import positions from '../json/positions.json';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		players: [],
		playersList: playersList,
		searchWord: '',
		positions: positions,
		canNavigate: false
	},
	getters: {
		canNavigate (state) {
			state.canNavigate = state.players.some(player => {
					return player.checked === true;
		});
			return state.canNavigate;
		}
	},
	mutations: {
		filteredPlayers (state, search) {
			state.searchWord = search;
			if(search){
				state.playersList.forEach(player => {
					Vue.set(player, 'checked', false);
			});
				state.players = state.playersList.filter(player => {
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
					Vue.set(player, 'checked', !player.checked);
				}
			})
			}
		},
		changeCanNavigate(state) {
			state.canNavigate = state.players.some(player => {
					return player.checked === true;
		});
		}
	},
	actions: {
		filterPlayers(context, search) {
			context.commit('filteredPlayers', search);
		},
		selectPlayer(context, value) {
			context.commit('selectPlayer', value);
		},
		changeCanNavigate(context) {
			context.commit('changeCanNavigate', value);
		}
	}
});