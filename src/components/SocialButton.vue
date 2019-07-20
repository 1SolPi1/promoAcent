<template>
	<div class="boxSocialButton">
   <span id="vk_share_button"></span> 
   <a class="okStyle" :href="'https://connect.ok.ru/offer?url=' +linkVk +idVk+'&title=Поделиться'">
    <div class="ok-klass-v2_btn_logo"><svg class="logo" viewBox="0 0 16 16">
<path d="M2.452 15.688h-.354C1.534 15.66.999 15.295 1 14.66V8.132c0-.635.514-1.082 1.098-1.112h.37c.259.006.534.287.534.545v7.621c-.03.235-.313.498-.55.502zm12.213-7.147v.285c.299.203.48.541.482.903a1.142 1.142 0 0 1-1.002 1.125l-.086.272c.291.209.466.544.47.903a1.09 1.09 0 0 1-1.107 1.116c.336.2.413.46.422.851 0 .631-.428 1.02-1.06 1.02H8.554c-1.072.013-2.466-.207-3.286-.96-.782-.716-1.218-1.819-1.253-2.527V8.765c0-1.26.446-2.221 1.077-2.84.818-.804 2.45-1.98 3.24-3.926.235-.58.506-1.026.976-1.026.878 0 1.345.601 1.345 1.739-.037.974-.292 1.492-.797 2.326-.198.396-.083.752.16.903.496.306 1.175.245 1.175.245h3.088c.627.006 1.14.397 1.14 1.024 0 .477-.257 1.002-.704 1.17l-.05.161z" fill="#fff" fill-rule="evenodd" class="svg-fill"></path>
</svg></div>
   Класс</a>
  <!--  <a target="_blank" class="mrc__plugin_like_button" href="https://connect.mail.ru/share" data-mrc-config="{'nc' : '1', 'cm' : '2', 'sz' : '20', 'st' : '1', 'tp' : 'mm'}">Нравится</a> -->
  </div>
</template>

<script>
	export default {
    name: "SocialButton",
    components: {
    },
    props: {
      linkVk: {
        type: String,
        default: 'http://sprosi-online.ru'
      },
      idVk:{
        required: true
      }
    },
    data() {
			return {
			
      }
    },
    created() {
    },
    mounted() {
      document.getElementById('vk_share_button').innerHTML = VK.Share.button(this.linkVk + this.idVk, {type: 'link'}); 
     },
		methods: {

		},
		computed: {},
	}
</script>

<style scoped>
.boxSocialButton{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.okStyle{
  background: #ED8207;
  font-size: 14px;
padding: 7px 11px;
min-width: 22px;
min-height: 22px;
white-space: nowrap;
color: #fff;
cursor: pointer;
border: 1px solid #ed8207;
border-top-color: rgb(237, 130, 7);
border-right-color: rgb(237, 130, 7);
border-bottom-color: rgb(237, 130, 7);
border-left-color: rgb(237, 130, 7);
border-radius: 50em;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
user-select: none;
box-sizing: border-box;
margin-left: 30px;
}

.logo{
  height: 16px;
width: 16px;
margin: 0;
color: #fff;
}
</style>