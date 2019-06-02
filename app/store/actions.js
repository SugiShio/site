import firebase from '~/plugins/firebase'
export default {
  async getIndex({}, { collection }) {
    let data = []
    await firebase
      .firestore()
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push(doc.data())
        })
      })
      .catch(function(error) {
        console.error('Error getting documents: ', error)
      })
    return data
  }
}
