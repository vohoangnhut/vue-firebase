import firebase from 'firebase'

let database = null

const init = function () {
  database = firebase.database()
}

const getRef = function (path) {
  if(!database) return
  return database.ref(path)
}

const getDb = function () {
  return database
}

export default { init, getRef, getDb }
