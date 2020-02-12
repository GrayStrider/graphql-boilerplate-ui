<template lang=pug>
	v-app#inspire
		app-drawer
		v-app-bar(app clipped-left)
			v-app-bar-nav-icon(@click.stop='toggleDrawer')
			v-toolbar-title Application
			v-content
				v-container.fill-height(fluid)
					v-row(align='center' justify='center')
						v-col.shrink

							v-tooltip(right)
								template(v-slot:activator='{ on }')
									v-btn(
										href='#'
										icon
										large
										target='_blank'
										v-on='on')
										v-icon(large) mdi-code-tags
								span Source

							v-tooltip(right)
								template(v-slot:activator='{ on }')
									v-btn(
										icon
										large
										href='https://codepen.io/johnjleider/pen/bXNzZL'
										target='_blank'
										v-on='on')
										v-icon(large) mdi-codepen
								span Codepen
		v-footer(app)
			span &copy; 2019
</template>

<script lang=ts>
	import {Vue, Component, Prop} from 'vue-property-decorator'
	import AppDrawer from '@/components/AppDrawer.vue'
	import {mapMutations} from 'vuex'

	@Component({
		components: {AppDrawer},
		methods: {...mapMutations(['toggleDrawer'])}
	})
	export default class Baseline extends Vue {
		created() {
			this.$vuetify.theme.dark = true
		}
	}
</script>
