import firebase from '~/plugins/firebase'

export const getIndex = async ({ collection }) => {
  let data = []
  await firebase
    .firestore()
    .collection(collection)
    .orderBy('createdAt', 'desc')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        data.push(processData(doc.data()))
      })
    })
    .catch(function(error) {
      console.error('Error getting documents: ', error)
    })
  return data
}

const processData = obj => {
  Object.keys(obj).forEach(key => {
    if (obj[key].constructor.name === 'Timestamp') {
      obj[key] = getTimestamp(obj[key])
    }
  })
  return obj
}

const getTimestamp = ({ seconds, nanoseconds }) => {
  return seconds * 1000 + nanoseconds / 1000
}
