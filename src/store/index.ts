import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface RootState {
	drawerOpen: boolean
}

export default new Vuex.Store<RootState>({
	state: {
		drawerOpen: false,
	},
	mutations: {
		toggleDrawer(s, val) {
			s.drawerOpen = val
		},
	},
	actions: {},
	modules: {},
})
