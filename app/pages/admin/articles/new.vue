<template lang="pug">
el-form(label-width='120px')
  el-form-item(label='タイトル')
    el-input(
    v-model='title'
    )
  el-form-item(label='本文')
    el-input(
    v-model='body'
    type='textarea'
    :autosize='{ minRows: 4, maxRows: 12}'
    )
  el-form-item
    el-button(
    size='mini'
    @click='create'
    ) 作成
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  layout: 'admin',
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    create() {
      firebase
        .firestore()
        .collection('articles')
        .doc(this.title)
        .set({
          title: this.title,
          body: this.body,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .then(data => {
          console.log(data)
          // this.$router.push('/admin/profile')
        })
        .catch(e => {
          console.error(e)
          // Failed!
        })
    }
  }
}
</script>
