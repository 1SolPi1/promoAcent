<template>
<div class="boxSearch">
  <div class="searchField" :class="{withSearch: !list}">
    <img src="@/assets/img/closeSearch.png" alt="close" class="closeIcon" @click="$emit('close')">
    <p class="title_section">Поиск</p>
    <div class="boxInputSearch">
      <input type="text" placeholder="Введите запрос" class="searchInput" v-model="title">
      <button class="btn_blue" @click="getAllQuestions()" v-if="questions">Показать</button>
      <button class="btn_blue" @click="getAllExperts()" v-if="experts">Показать</button>
    </div>
  </div>
  <div class="searchAnswer" v-if="allQuestions.length > 0">
    <div class="secondBoxAnswer">
      <questionItem
        v-for="item in allQuestions"
        :key="item.question.id"
        :category="item.category"
        :countAnswer="item.answer_count"
        :date="item.question.create_at"
        :person="item.question.anonim? ' Анонимно ': item.user_name"
        :price="item.question.price"
        :status="item.question.status"
        :title="item.question.title"
        :id="item.question.id"
        :question="true"
        @closesearch="$emit('close')"
      />
    </div>
  </div>
  <div class="searchAnswer" v-if="allExperts.length > 0">
    <div class="secondBoxAnswer">
      <expertItem
        v-for="(item, index) in allExperts"
        :key="index"
        :expert="item"
        :search="true"
        @closesearch="$emit('close')"
        @openchat="$chatinfo.opens({
          name: item.name || 'Имя Фамилия',
          avatar: item.avatar,
          user_id: $store.getters.PROFILE.user_id,
          expert_id: item.id,
          author: 0 
        })"
        />
    </div>
  </div>
  <span class="close" @click="$emit('close')"></span>
</div>
</template>

<script>
  import expertItem from '@/components/Expert/ExpertItem'
	export default {
    name: "Search",
    components: {
      expertItem
    },
    props: {
      questions:{
        type: Boolean,
        default: false
      },
      experts:{
        type: Boolean,
        default: false
      }
    },
    data() {
			return {
        showanswer: false,
        allQuestions:[],
        allExperts: [],
        title: null
      }
    },
    created() {
    },
    mounted() {
     },
		methods: {
      getAllQuestions(){
        let params = new URLSearchParams();
        params.append('title', this.title);

        this.$http({
          method: 'POST',
          url: 'question/question/find',
          data: params,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          this.allQuestions = response.data[0]
        })
      },
      getAllExperts(){
        let params = new URLSearchParams();
        params.append('name', this.title);

        this.$http({
          method: 'POST',
          url: 'expert/profile/find',
          data: params,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        .then(response=>{
          let expert = [];
          for (let key in response.data){
             expert.push(response.data[key])
          }

          this.allExperts = expert.slice(0,-1);
        })
      }
		},
		computed: {
      list(){
        return (this.allQuestions.length + this.allExperts.length) > 0
      }
    },
	}
</script>

<style scoped>
.close{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 900;
}

.closeIcon{
  float: right;
  margin: 8px 7px 0 0;
  cursor: pointer;
}
.boxSearch{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 1700;
  width: 100%;
}
.searchField{
  height: 125px;
  min-width: 300px;
  width: 90%;
  background: white;
  z-index: 1900;
  margin: 0 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.withSearch{
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;  
}

.title_section{
font-size: 24px;
color: #2F2F32;
letter-spacing: 0;
line-height: 45px;
margin-left: 6%;
}

.boxInputSearch{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: self-end;
}

.searchInput{
    width: 75%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px #d5d5d6 solid;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    color: #000;
    margin-left: 6%;
}

.btn_blue{
  border-radius: 6px;
  margin-left: 20px;
}

.searchAnswer{
  min-width: 300px;
  width: 90%;
  background: white;
  z-index: 1900;
  margin: 0 15px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px;
  height: calc(100vh - 300px);
  overflow: hidden;
}

.secondBoxAnswer{
  width: 105%;
  padding-right: 5%;
  height: 100%;
  overflow-y: scroll;
}
</style>