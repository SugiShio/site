export default {
  updateDeviceType({ commit }) {
    const deviceType = 600 < window.innerWidth ? 'pc' : 'sp'
    commit('setDeviceType', { deviceType })
  }
}
