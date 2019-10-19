import Axios from 'axios'

Axios.defaults.baseURL = 'http://api.sprosi-online.ru/';

const state = {
  profile: {
    user_id: null
  },
  userInfo: {
    expert: false
  },
  client: null,
  expert: {
    id: 0,
    is_confirmed: false,
    status: 1
  },
  expertEducation: null,
  myCategory: null,
  mySubCategories: null,
  chats: null,
  action: null,
  greeting:{
    only_sub_category: 0,
    only_category_question: 0,
    only_pay_question: 0
  }
};
const getters = {
  PROFILE: state => state.profile,
  USERINFO: state => state.userInfo,
  CLIENT: state => state.client,
  EXPERT: state => state.expert,
  EXPERTEDUCATION: state => state.expertEducation,
  MYCATEGORY: state => state.myCategory,
  MYSUBCATEGORIES: state => state.mySubCategories,
  CHATS: state => state.chats,
  ACTION: state => state.action,
  GREETING: state => state.greeting
};
const mutations = {
  SET_PROFILE: (state, payload) => {
    state.profile = payload;
  },
  SET_FALSE_ID: (state, playload) =>{
    state.profile.user_id = playload;
  },
  SET_USER_INFO: (state, payload) => {
    state.userInfo = payload;
  },
  SET_CLIENT: (state, payload) => {
    state.client = payload;
  },
  SET_EXPERT: (state, payload) => {
    state.expert = payload;
  },
  CLEAR_PROFILE: (state) => {
    state.profile = null;
    state.client = null;
    state.expert = null;
    state.userinfo = null;
  },
  SET_NAME: (state, payload) => {
    state.profile.first_name = payload;
  },
  SET_SURNAME: (state, payload) => {
    state.profile.last_name = payload;
  },
  SET_EMAIL: (state, payload) => {
    state.userInfo.email = payload;
  },
  SET_EXPERT_EDUCATION: (state, playload) =>{
    state.expertEducation = playload
  },
  SET_MY_CATEGORY:(state, playload) =>{
    state.myCategory = playload.myCategory;
    state.mySubCategories = playload.mySubCategories
  },
  SET_CHATS:(state, playload) =>{
    state.chats = playload
  },
  CLEAR_CHATS: (state) =>{
    state.chats = null
  },
  SET_ACTION: (state, playload) =>{
    state.action = playload
  },
  SET_GREETING: (state, playload) =>{
    state.greeting = playload
  }
};
const actions = {
  getProfile: async ({commit}) => {
    let {data} = await Axios.get('user/profile/show',{headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: "Bearer " + localStorage.getItem('token')}});
    commit('SET_PROFILE', data.profile);
    commit('SET_USER_INFO', data.user);
    commit('SET_CLIENT', data.client);
    commit('SET_EXPERT', data.expert[0]);
    commit('SET_MY_CATEGORY', {
      myCategory: data.expert.category[0],
      mySubCategories: data.expert.sub_categories
    });
    commit('SET_EXPERT_EDUCATION', data.expert.education[0]);
    commit('SET_ACTION', data.expert.action)
  },
  saveSettings: ({commit}, data) => {
    commit('SET_NAME', data.name);
    commit('SET_SURNAME', data.surname);
    commit('SET_EMAIL', data.email);
    if (data.expert) {
      commit('SET_GREETING', {
      only_category_question: data.expert.only_category_question,
      only_sub_category: data.expert.only_sub_category,
      only_pay_question: data.expert.only_pay_question
    });
    }
  },
  setFalseId: ({commit}, id)=>{
    commit('SET_FALSE_ID', id)
  },
  getChats: async ({commit}) => {
    let {data} = await Axios.get('chat/chat/chats',{headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: "Bearer " + localStorage.getItem('token')}});
    commit('SET_CHATS', data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
