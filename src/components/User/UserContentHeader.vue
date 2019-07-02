<template>
	<div class="profile-header">
		<h3>{{routes[$route.path]}}</h3>
		<div class="buttons">
			<router-link to="user" class="akcii" href="#" v-if="$route.path !== '/user'">Стать экспертом</router-link>
			<a class="pro" href="#">Задать вопрос</a>
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
				'/userprofile': 'Мой профиль',
				'/userconsultation': 'Мои консультации',
				'/userpays': 'Мои платежи',
				'/userfriends': 'Друзья и приглашения',
				'/usersettings': 'Настройки',
				'/usersupport': 'Техподдержка',
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
