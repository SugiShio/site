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
    .catch(error => {
      console.error('Error getting documents: ', error)
    })
  return data
}

export const getShow = async ({ collection, doc }) => {
  const data = await firebase
    .firestore()
    .collection(collection)
    .doc(doc)
    .get()
    .then(doc => {
      if (doc.exists) return processData(doc.data())
      else throw new Error('Document not found.')
    })
    .catch(error => {
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
