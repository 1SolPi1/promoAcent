<template>
	<div>
		<div class="profile-img">
			<img src="img/svg/man.svg" alt="alt" v-if="avatar === null" />
			<img :src="domen + avatar" class="avatar" alt="alt" v-else/>
			<span class="activity my_profile"></span>
		</div>
		<span>{{name || 'Имя'}} {{surname || 'Фамилия'}}</span>
	</div>
</template>

<script>
	export default {
    name: "UserInfoHeader",
    components: {},
    props: {
			name: String,
			surname: String,
			avatar: String
    },
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
		},
		computed: {
			domen(){
				return this.$store.getters.DOMEN
			}
		},
	}
</script>

<style scoped>
.avatar{
	border-radius: 50%;
}
</style>