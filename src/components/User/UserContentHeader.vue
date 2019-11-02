<template>
	<div class="profile-header">
		<h3>{{routes[$route.path]}}</h3>
		<div class="buttons" v-if="!$store.getters.USERINFO.expert">
			<router-link to="user" class="akcii" href="#" v-if="$route.path !== '/user'">Стать экспертом</router-link>
			<router-link class="pro" to="/newquestion/addquestions">Задать вопрос</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "UserContentHeader",
	components: {},
	props: {},
	data() {
		return {
			routes:{
				'/user': 'Стать экспертом',
				'/user/userprofile': 'Мой профиль',
				'/user/userconsultation': 'Мои консультации',
				'/user/userpays': 'Мои платежи',
				'/user/userfriends': 'Друзья и приглашения',
				'/user/usersettings': 'Настройки',
				'/user/usersupport': 'Техподдержка',
			}
		}
	},
	created() {},
	mounted() {},
	methods: {},
	computed: {},
}
</script>

<style scoped>
    
</style>
