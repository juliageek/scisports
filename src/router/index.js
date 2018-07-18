import Vue from 'vue';
import Router from 'vue-router';
import SelectPlayer from '../components/SelectPlayer.vue';
import SelectPosition from '../components/SelectPosition.vue';

Vue.use(Router);

const routes = [
	{
		path: "/select-player",
		name: "select-player",
		title: "Select Player",
		component: SelectPlayer,
	},
	{
		path: "/select-position",
		name: "select-position",
		title: "Select Position",
		component: SelectPosition,
	},
	{
		path: "*",
		redirect: { name: "select-player" }
	}
];

export default new Router({
	routes: routes
});