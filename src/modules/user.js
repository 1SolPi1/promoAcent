import Axios from 'axios'

Axios.defaults.baseURL = 'http://api.sprosi-online.ru/';

const state = {
  profile: null,
  userInfo: null,
  client: null,
  expert: null,
  expertEducation: null
};
const getters = {
  PROFILE: state => state.profile,
  USERINFO: state => state.userInfo,
  CLIENT: state => state.client,
  EXPERT: state => state.expert,
  EXPERTEDUCATION: state => state.expertEducation
};
const mutations = {
  SET_PROFILE: (state, payload) => {
    state.profile = payload;
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
  }
};
const actions = {
  getProfile: async ({commit}) => {
    let {data} = await Axios.get('user/profile/show',{headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: "Bearer " + localStorage.getItem('token')}});
    commit('SET_PROFILE', data.profile);
    commit('SET_USER_INFO', data.user);
    commit('SET_CLIENT', data.client);
    commit('SET_EXPERT', data.expert[0]);
    commit('SET_EXPERT_EDUCATION', data.expert.education[0]);
  },
  saveSettings: ({commit}, data) => {
    commit('SET_NAME', data.name);
    commit('SET_SURNAME', data.surname);
    commit('SET_EMAIL', data.email);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
