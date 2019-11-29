import firebase from '~/plugins/firebase'

export const getIndex = async ({
  collection,
  isObject,
  ignorePublishStatus
}) => {
  let data = isObject ? {} : []
  const ref = firebase.firestore().collection(collection)
  let query = ignorePublishStatus ? ref : ref.where('published', '==', true)
  query = query.orderBy('createdAt', 'desc')
  await query
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (isObject) data[doc.id] = processData(doc.data())
        else data.push(processData(doc.data(), doc.id))
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

const processData = (obj, id) => {
  Object.keys(obj).forEach(key => {
    if (
      Number.isInteger(obj[key].seconds) &&
      Number.isInteger(obj[key].nanoseconds)
    ) {
      obj[key] = getTimestamp(obj[key])
    }
  })
  if (id) obj = { ...obj, id }
  return obj
}

const getTimestamp = ({ seconds, nanoseconds }) => {
  return seconds * 1000 + nanoseconds / 1000
}
