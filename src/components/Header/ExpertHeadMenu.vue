<template>
	<ul class="menu-dropdown">
		<li :class="{'active': $route.path === '/user/profile'}">
			<router-link to="/user/profile">
				<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
					<circle cx="12" cy="7" r="4"></circle>
				</svg>
				Редактировать профиль
			</router-link>
		</li>
		<li :class="{'active': $route.path === '/user/myconsultation'}">
			<router-link to="/user/myconsultation">
				<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
				</svg>
				Мои консультации
			</router-link>
		</li>
		<li :class="{'active': $route.path === '/user/userpays'}">
			<router-link to="/user/userpays">
				<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
					<path d="M76,0H20C13.37,0,8,5.37,8,12v72c0,6.63,5.37,12,12,12h56c6.63,0,12-5.37,12-12V12C88,5.37,82.63,0,76,0z M80,84  c0,2.21-1.79,4-4,4H20c-2.21,0-4-1.79-4-4V12c0-2.21,1.79-4,4-4h56c2.21,0,4,1.79,4,4V84z"></path>
					<path d="M68,72c0,2.209-1.791,4-4,4H32c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h32C66.209,68,68,69.791,68,72L68,72z"></path>
					<path d="M68,56c0,2.209-1.791,4-4,4H32c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h32C66.209,52,68,53.791,68,56L68,56z"></path>
					<path d="M68,40c0,2.209-1.791,4-4,4H32c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h32C66.209,36,68,37.791,68,40L68,40z"></path>
					<path d="M52,24c0,2.209-1.791,4-4,4H32c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h16C50.209,20,52,21.791,52,24L52,24z"></path>
				</svg>
				Мои платежи
			</router-link>
		</li>
		<li>
			<li :class="{'active': $route.path === '/user/userfriends'}">
				<router-link to="/user/userfriends">
					<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
						<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
						<line x1="2" x2="2" y1="20" y2="20"></line>
					</svg>
					Друзья и приглашения
				</router-link>
			</li>
			<li :class="{'active': $route.path === '/user/mainsettings'}">
				<router-link to="/user/mainsettings">
				<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="3"></circle>
					<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
				</svg>
				Настройки
			</router-link>
		</li>
		<li :class="{'active': $route.path === '/user/usersupport'}">
			<router-link to="/user/usersupport">
				<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
					<line x1="16" x2="2" y1="8" y2="22"></line>
					<line x1="17" x2="9" y1="15" y2="15"></line>
				</svg>
				Техподдержка
			</router-link>
		</li>
		<li>
			<a href="#" @click="logout()">
				<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M48,91.98c-10.243,0-20.486-3.898-28.284-11.696c-15.596-15.596-15.596-40.973,0-56.568c1.562-1.562,4.095-1.562,5.657,0  c1.562,1.562,1.562,4.095,0,5.657c-12.477,12.477-12.477,32.778,0,45.255c12.476,12.476,32.778,12.476,45.255,0  c12.476-12.478,12.476-32.779,0-45.256c-1.562-1.562-1.562-4.095,0-5.657c1.562-1.562,4.096-1.562,5.656,0  c15.596,15.596,15.596,40.973,0,56.568C68.486,88.082,58.243,91.98,48,91.98z"/><path d="M52,48c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V8c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V48z"/>
				</svg>
				Выход
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
    name: "UserHeadMenu",
    components: {},
    props: {},
    data() {
			return {

      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
			logout(){
				localStorage.removeItem('token');
				this.$store.commit('CLEAR_PROFILE');
				this.$router.push('/')
			}
		},
		computed: {},
	}
</script>

<style scoped>

</style>