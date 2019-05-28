<template lang="pug">
div
  el-card(
  header='ログイン'
  shadow='never'
  )
    el-form(label-width='120px')
      el-form-item(label='email')
        el-input(v-model='email')
      el-form-item(label='password')
        el-input(v-model='password')
      el-form-item
        el-button(
        type='primary'
        size='small'
        @click='login'
        ) ログイン
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {})
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
          // ログインしたら飛ぶページを指定
          // this.$router.push("/member-page")
        })
        .catch(error => {
          alert(error)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {})
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
