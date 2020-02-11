<template lang=pug>
	v-app#inspire
		v-navigation-drawer(v-model='drawer' app clipped)
			v-list(dense)
				v-list-item(link)
					v-list-item-action
						v-icon mdi-view-dashboard
					v-list-item-content
						v-list-item-title Dashboard
				v-list-item(link)
					v-list-item-action
						v-icon mdi-settings
					v-list-item-content
						v-list-item-title Settings
		v-app-bar(app clipped-left)
			v-app-bar-nav-icon(@click.stop='drawer = !drawer')
			v-toolbar-title Application
		v-content
			v-container.fill-height(fluid)
				v-row(align='center' justify='center')
					v-col.shrink
						v-tooltip(right)
							template(v-slot:activator='{ on }')
								v-btn(
									:href='source'
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

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    created() {
      this.$vuetify.theme.dark = true
    },
  }
</script>
