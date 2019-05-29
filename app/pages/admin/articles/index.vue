<template lang="pug">
el-table(:data='data')
  el-table-column(
  prop='title'
  label='タイトル'
  )
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  layout: 'admin',
  data() {
    let data = []
    firebase
      .firestore()
      .collection('articles')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() })
        })
      })
      .catch(function(error) {
        console.error('Error getting documents: ', error)
      })
    return { data }
  }
}
</script>
