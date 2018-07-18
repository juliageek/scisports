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
		selectPlayer (state, payload) {
			if(state.players) {
				state.players.map(player => {
					if (player.name === payload) {
						const data = {
							name: payload,
							position: player.position,
							checked: !player.checked
						};
						Object.assign({}, player, data)
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