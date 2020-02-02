import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient, {HttpLink} from 'apollo-boost'
import sleep from '@utils/sleep'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
	uri: 'https://api.spacex.land/graphql/',
	request: operation => sleep(2000),
})

const httpLink = new HttpLink({uri: 'https://api.spacex.land/graphql/'})

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})

export default apolloProvider
