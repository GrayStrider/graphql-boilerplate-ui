<template>
	<ApolloQuery
			:query='gql => gql`
												query {
													ships {
														id
										}
									}`'
	>
		<template slot-scope="{ result: { data, loading } }">
			<div v-if="loading">Loading...</div>
			<ul v-else>
				<li v-for="user of data.users" class="user">
					{{ user.name }}
				</li>
			</ul>
		</template>
	</ApolloQuery>
</template>
