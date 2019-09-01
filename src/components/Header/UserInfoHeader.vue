<template>
	<div class="boxHeaderProfile">
		<div class="profile-img">
			<img src="img/svg/man.svg" alt="alt" v-if="avatar === null" />
			<img :src="domen + avatar" class="avatar" alt="alt" v-else/>
			<span class="activity my_profile" :class="{'active': expert.status === 3}"></span>
		</div>
		<span>{{name || 'Имя'}} {{surname || ''}}</span>
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
			},
			expert(){
				return this.$store.getters.EXPERT
			},
		},
	}
</script>

<style scoped>
.avatar{
	border-radius: 50%;
}

.boxHeaderProfile{
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.active{
	background-color: orange !important;
}
</style>