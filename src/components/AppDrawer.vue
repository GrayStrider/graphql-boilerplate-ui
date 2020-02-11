<template lang="pug">
	v-navigation-drawer(v-model='drawer' app clipped)
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
	import {mdiViewDashboard, mdiSettings} from '@mdi/js'

	interface Item {
		title: string,
		icon: string
	}

	interface Data {
		items: Item[]
	}

	export default {
		name: 'app-drawer',
		data: (): Data => ({
			items: [
				{
					title: 'Dashboard',
					icon: mdiViewDashboard,
				},
				{
					title: 'Settings',
					icon: mdiSettings,
				},

			],
		}),
	}
</script>
