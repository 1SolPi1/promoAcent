<template>
	<div class="table-header tbl color">
		<div>
			<span>
				{{sum}}₽
			</span>
		</div>
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.998 299.998">
				<path d="M149.997,0C67.157,0,0.001,67.158,0.001,149.995s67.156,150.003,149.995,150.003s150-67.163,150-150.003
			S232.836,0,149.997,0z M160.355,168.337c-0.008,0.394-0.067,0.788-0.122,1.183c-0.039,0.296-0.057,0.599-0.124,0.89
			c-0.067,0.303-0.182,0.602-0.28,0.905c-0.117,0.366-0.226,0.731-0.379,1.076c-0.029,0.06-0.039,0.124-0.065,0.184
			c-0.226,0.482-0.488,0.934-0.775,1.362c-0.018,0.026-0.042,0.052-0.06,0.078c-0.327,0.48-0.7,0.916-1.092,1.325
			c-0.109,0.112-0.22,0.213-0.335,0.319c-0.345,0.329-0.708,0.63-1.094,0.905c-0.119,0.086-0.233,0.176-0.358,0.259
			c-0.495,0.324-1.014,0.609-1.554,0.843c-0.117,0.052-0.239,0.083-0.358,0.13c-0.456,0.176-0.918,0.322-1.395,0.433
			c-0.171,0.041-0.34,0.078-0.514,0.109c-0.612,0.112-1.232,0.189-1.86,0.189c-0.127,0-0.257-0.039-0.384-0.044
			c-0.602-0.023-1.198-0.07-1.771-0.192c-0.179-0.039-0.355-0.117-0.534-0.166c-0.534-0.145-1.056-0.306-1.554-0.529
			c-0.057-0.029-0.117-0.034-0.174-0.06l-57.515-27.129c-5.182-2.443-7.402-8.626-4.959-13.808
			c2.443-5.179,8.626-7.402,13.808-4.959l42.716,20.144V62.249c0-5.729,4.645-10.374,10.374-10.374s10.374,4.645,10.374,10.374
			V168.15h0.002C160.373,168.212,160.355,168.274,160.355,168.337z">
				</path>
			</svg>
			{{date}}
		</div>
		<div v-html="desc">
		</div>
		<div>
			<span class="done">
				<svg fill="none" height="24" stroke="#4d13d1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<polyline points="20 6 9 17 4 12" />
				</svg>
				Исполнено
			</span>
		</div>
<!-- 		<div>
			<span class="done">
				<svg fill="none" height="24" stroke="#4d2ed1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>
				</svg>
				Отклонено
			</span>
		</div> -->
<!-- 		<div>
			<span class="done">
				<svg fill="#4d13d1" viewBox="0 0 96 96" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
					<path d="M28,48c0,2.209-1.791,4-4,4H8c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h16C26.209,44,28,45.791,28,48L28,48z"/>
					<path d="M68,48c0-2.209,1.791-4,4-4h16c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H72C69.791,52,68,50.209,68,48L68,48z"/>
					<path d="M52,24c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V8c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V24z"/>
					<path d="M44,72c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4v16c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V72z"/>
					<path d="M33.858,62.143c1.562,1.562,1.562,4.095,0,5.656L22.544,79.113c-1.562,1.562-4.095,1.562-5.656,0l0,0  c-1.562-1.562-1.562-4.096,0-5.658L28.2,62.143C29.763,60.58,32.296,60.58,33.858,62.143L33.858,62.143z"/>
					<path d="M62.142,33.858c-1.562-1.562-1.562-4.095,0-5.657l11.314-11.313c1.562-1.562,4.095-1.562,5.656,0l0,0  c1.562,1.562,1.562,4.095,0,5.657L67.8,33.858C66.237,35.42,63.704,35.42,62.142,33.858L62.142,33.858z"/>
					<path d="M33.858,28.201c1.562,1.562,1.562,4.095,0,5.657l0,0c-1.562,1.562-4.096,1.562-5.658,0L16.888,22.544  c-1.562-1.562-1.562-4.095,0-5.657l0,0c1.562-1.562,4.095-1.562,5.656,0L33.858,28.201z"/>
					<path d="M62.142,67.799c-1.562-1.562-1.562-4.095,0-5.656l0,0c1.562-1.562,4.096-1.562,5.658,0l11.312,11.312  c1.562,1.562,1.562,4.096,0,5.658l0,0c-1.562,1.562-4.095,1.562-5.656,0L62.142,67.799z"/>
				</svg>
				Обрабатывается
			</span>
		</div> -->
	</div>
</template>

<script>
	export default {
    name: "UserPaysStoryItem",
    components: {
    },
    props: {
    	sum:{
    		type: Number,
    		default: 0
    	},
    	desc:{
    		type: String,
    		default: ''
    	},
    	date:{
    		type: String,
    		default: '10 февраля 12:45'
    	}
    },
    data() {
			return {
				register: false,
        login: false
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
		},
		computed: {},
	}
</script>

<style scoped>

</style>