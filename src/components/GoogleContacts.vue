<template lang=pug>
	v-app#inspire
		v-navigation-drawer(v-model='drawer' :clipped='$vuetify.breakpoint.lgAndUp' app)
			v-list(dense)
				template(v-for='item in items')
					v-row(
						v-if='item.heading'
						:key='item.heading'
						align='center')
						v-col(cols=6)
							v-subheader(v-if='item.heading') {{ item.heading }}
						v-col.text-center(cols='6')
							a.body-2.black--text(href='/#!') EDIT
					v-list-group(
						v-else-if='item.children'
						:key='item.text'
						v-model='item.model'
						:prepend-icon="item.model ? item.icon : item['icon-alt']")
						template(v-slot:activator)
							v-list-item-content
								v-list-item-title {{ item.text }}
						v-list-item(
							v-for='(child, i) in item.children'
							:key='i'
							link)
							v-list-item-action(v-if='child.icon')
								v-icon {{ child.icon }}
							v-list-item-content
								v-list-item-title {{ child.text }}
					v-list-item(v-else :key='item.text' link)
						v-list-item-action
							v-icon {{ item.icon }}
						v-list-item-content
							v-list-item-title {{ item.text }}
		v-app-bar(
			:clipped-left='$vuetify.breakpoint.lgAndUp'
			app
			color='blue darken-3'
			dark)
			v-app-bar-nav-icon(@click.stop='drawer = !drawer')
			v-toolbar-title.ml-0.pl-4(style='width: 300px')
				span.hidden-sm-and-down Google Contacts
			v-text-field.hidden-sm-and-down(
				flat
				solo-inverted
				hide-details
				prepend-inner-icon='mdi-magnify'
				label='Search')
				v-spacer
					v-switch(
						hide-details
						label='Dark Mode'
						v-model='$vuetify.theme.dark')
					v-btn(icon)
						v-icon mdi-apps
					v-btn(icon)
						v-icon mdi-bell
					v-btn(icon large)
						v-avatar(size='32px' item)
							v-img(src='https://cdn.vuetifyjs.com/images/logos/logo.svg' alt='Vuetify')
		v-content
			v-container.fill-height(fluid)
				v-row(align='center' justify='center')
					ShipsTable
		v-btn(
			bottom
			right
			fixed
			color='pink'
			dark
			fab
			@click='dialog = !dialog')
			v-icon mdi-plus
		v-dialog(v-model='dialog' width='800px')
			v-card
				v-card-title.grey.darken-2 Create contact
				v-container
					v-row.mx-2
						v-col.align-center.justify-space-between(cols='12')
							v-row.mr-0(align='center')
								v-avatar.mx-3(size='40px')
									img(src='http://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png' alt)
								v-text-field(placeholder='Name')
						v-col(cols='6')
							v-text-field(prepend-icon='mdi-account-card-details-outline' placeholder='Company')
						v-col(cols='6')
							v-text-field(placeholder='Job title')
						v-col(cols='12')
							v-text-field(prepend-icon='mdi-mail' placeholder='Email')
						v-col(cols='12')
							v-text-field(type='tel' prepend-icon='mdi-phone' placeholder='(000) 000 - 0000')
						v-col(cols='12')
							v-text-field(prepend-icon='mdi-text' placeholder='Notes')
				v-card-actions
					v-btn(text color='primary') More
					v-spacer
						v-btn(text color='primary' @click='dialog = false') Cancel
						v-btn(text @click='dialog = false') Save
</template>

<script>
  import ShipsTable from "@/components/ShipsTable";

  export default {
    components: {ShipsTable},
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        {heading: 'Hello', text: 'World'},
        {icon: 'mdi-contacts', text: 'Contacts'},
        {icon: 'mdi-history', text: 'Frequently contacted'},
        {icon: 'mdi-content-copy', text: 'Duplicates'},
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            {icon: 'mdi-plus', text: 'Create label'},
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            {text: 'Import'},
            {text: 'Export'},
            {text: 'Print'},
            {text: 'Undo changes'},
            {text: 'Other contacts'},
          ],
        },
        {icon: 'mdi-settings', text: 'Settings'},
        {icon: 'mdi-message', text: 'Send feedback'},
        {icon: 'mdi-help-circle', text: 'Help'},
        {icon: 'mdi-cellphone-link', text: 'App downloads'},
        {icon: 'mdi-keyboard', text: 'Go to the old version'},
      ],
    }),
  }
</script>
