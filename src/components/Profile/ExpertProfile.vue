<template>
<div class="profile-menu">
	<div class="image_expert expert_image_big">
		<div class="status__expert online_expert my_profile"></div>
		<div class="rating_expert">8.9</div>
		<ul class="rating_item value-4">
			<li><i class="glyphicon glyphicon-star"></i></li>
			<li><i class="glyphicon glyphicon-star"></i></li>
			<li><i class="glyphicon glyphicon-star"></i></li>
			<li><i class="glyphicon glyphicon-star"></i></li>
			<li><i class="glyphicon glyphicon-star"></i></li>
		</ul>
		<img src="img/svg/avatar.svg" alt="alt" v-if="profile.avatar === null">
		<img :src="domen + profile.avatar" alt="alt" class="avatar" v-else>
	</div>
	<div class="sh_info">
		<div class="name_expert_big checked">{{profile.first_name || 'Имя'}} {{profile.last_name || 'Фамилия'}}</div>
		<a href="#" class="view-profile">посмотреть профиль</a>
	</div>
	<ul class="menu">
		<li :class="{'active': $route.path == '/profile'}">
			<router-link to="/profile">
				<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
					<circle cx="12" cy="7" r="4" />
				</svg>
				Редактировать профиль
			</router-link>
		</li>
		<li :class="{'active': $route.path == '/myconsultation'}" >
			<router-link to='/myconsultation'>
				<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
				</svg>
				Мои консультации
			</router-link>
		</li>
		<li :class="{'active': $route.path == '/userpays'}">
					<router-link to="/userpays">
						<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
							<path d="M76,0H20C13.37,0,8,5.37,8,12v72c0,6.63,5.37,12,12,12h56c6.63,0,12-5.37,12-12V12C88,5.37,82.63,0,76,0z M80,84  c0,2.21-1.79,4-4,4H20c-2.21,0-4-1.79-4-4V12c0-2.21,1.79-4,4-4h56c2.21,0,4,1.79,4,4V84z" />
							<path d="M68,72c0,2.209-1.791,4-4,4H32c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h32C66.209,68,68,69.791,68,72L68,72z" />
							<path d="M68,56c0,2.209-1.791,4-4,4H32c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h32C66.209,52,68,53.791,68,56L68,56z" />
							<path d="M68,40c0,2.209-1.791,4-4,4H32c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h32C66.209,36,68,37.791,68,40L68,40z" />
							<path d="M52,24c0,2.209-1.791,4-4,4H32c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h16C50.209,20,52,21.791,52,24L52,24z" />
						</svg>
						Мои платежы
					</router-link>
				</li>
				<li :class="{'active': $route.path == '/userfriends'}">
					<router-link to="/userfriends">
						<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
							<line x1="2" x2="2" y1="20" y2="20" />
						</svg>
						Друзья и приглашения
					</router-link>
				</li>
				<li :class="{'active': $route.path == '/mainsettings'}" >
					<router-link to="/mainsettings">
						<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="12" r="3" />
							<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
						</svg>
						Настройки
					</router-link>
				</li>
				<li :class="{'active': $route.path == '/usersupport'}">
					<router-link to="/usersupport">
						<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
							<line x1="16" x2="2" y1="8" y2="22" />
							<line x1="17" x2="9" y1="15" y2="15" />
						</svg>
						Техподдержка
					</router-link>
				</li>
			</ul>
		</div>
</template>
<script>
export default {
  name: "ExpertProfile",
  data(){
		return{
		} 
	},
	mounted(){
		 
	},
	computed: {
		profile(){
			return this.$store.getters.PROFILE
		},
		domen(){
			return this.$store.getters.DOMEN
		}
	}
}
</script>
<style scoped>
.avatar{
	border-radius: 50% !important;
}
</style>