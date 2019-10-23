import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    serverError: null,
    weather: Array
}

const actions = {
    getWeather({ commit }) {
        fetch('https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/eaa544aed7e3bdee37c6caa2a515f1d4c38fbd4f/weather.json')
        .then(response => response.json())
        .then(data => commit('updateWeather', { data }))
        .catch(error => console.warn(error))
    }
}

const mutations = {
    updateWeather(state, { data }) {
        state.weather = data
    },
    riseError(state, { error }) {
        state.serverError = error
    }
}

const getters = {
    weather: state => state.weather,
    error: state => state.serverError
}

var store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store