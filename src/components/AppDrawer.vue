<template lang="pug">
	v-navigation-drawer(v-model='drawerOpen' app clipped)
		v-list(dense)

			v-list-item(
				v-for='({icon, title}, i) in items'
				:key='i'
				link)
				v-list-item-action
					v-icon {{icon}}
				v-list-item-content
					v-list-item-title {{title}}

</template>
<script lang=ts>
	import {Vue, Component} from 'vue-property-decorator'
	import {mdiViewDashboard, mdiSettings} from '@mdi/js'

	@Component({
		computed: {
			drawerOpen: {
				get() {return this.$store.state.drawerOpen},
				set(val) {this.$store.commit('toggleDrawer', val)},
			},
		},
	})
	export default class AppDrawer extends Vue {

		items: Item[] = [
			{
				title: 'Dashboard',
				icon: mdiViewDashboard,
			},
			{
				title: 'Settings',
				icon: mdiSettings,
			},

		]
	}

	interface Item {
		title: string,
		icon: string
	}
</script>
