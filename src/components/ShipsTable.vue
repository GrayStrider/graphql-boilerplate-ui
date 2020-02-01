<template>
	<v-skeleton-loader
			:loading="loading.ships"
			type="table"
			transition='fade-transition'
	>
		<v-data-table
				:items="ships2"
				:headers='headers'
				:items-per-page=5
		>
		</v-data-table>
	</v-skeleton-loader>
</template>

<script>
  import gql from "graphql-tag";
  import {sleep} from "@utils";

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

    async created() {
      await sleep(2000)
      let {data: {ships}} = await this.$apollo.queries.ships.refetch()
      this.loading.ships = false
      this.ships2 = ships
    },

    computed: {
      mockShips: async function () {
        await sleep(2000)
        this.loading.ships = false
        let res = await this.$apollo.queries.ships.refetch()
        console.log(res)
        return res

      }

    },
    data: () => ({
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
