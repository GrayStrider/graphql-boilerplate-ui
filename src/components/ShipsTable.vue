<template>

	<v-container
			style='position: relative'
	>
		<v-data-table
				:items="ships"
				:headers='headers'
				:items-per-page=5
				style='position: relative; top: 0; right: 0;'
		>
		</v-data-table>
		<v-btn fab small :color=color.btn
		       class='ma-5'
		       style='bottom: 0; left:0; position: absolute'
		       :loading=query.loading
		       @click=refetch
		>
			<v-icon>mdi-reload</v-icon>
		</v-btn>

	</v-container>

</template>

<script>
  import gql from "graphql-tag";
  import {defer} from "lodash";

  const apollo = {
    ships:
      gql`{
					ships {
						id
						name
						successful_landings
						}
				}`
  }
  export default {
    name: 'ShipsTable',
    apollo,
    computed: {
      query () {return this.$apollo.queries.ships},
    },
    methods: {
      async refetch() {
        console.log('called')
        await this.query.refetch()
      }
    },
    data: () => ({
	    color: {
	      btn: 'blue darken-2'
	    },
      loading: {
        ships: true,
      },
      ships2: [],

      headers: [
        {text: "Name", value: 'name'},
        {text: 'ID', value: 'id'},
        {text: 'Successful landings', value: 'successful_landings'}
      ],
    }),

  }
</script>
