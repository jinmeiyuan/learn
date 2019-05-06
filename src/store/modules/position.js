const postion = {
  namespaced: true,
  state: {
    current: {
      latitude: '',
      longitude: ''
    }

  },
  mutations: {
    setPosition (state, res) {
      state.current = res
    }
  },
  actions: {
    async setPosition ({commit}, params) {
      commit('setPosition', params)
    }
  },
  getters: {
    postion: state => state.current
  }
}
export default postion
