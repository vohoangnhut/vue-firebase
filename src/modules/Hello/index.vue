<template lang="pug">
  div
    el-form(:models='newBook',  @submit.native.prevent="addBook")
        el-form-item(label='Title')
          el-input(v-model='newBook.title')
        el-form-item(label='Name')
          el-input(v-model='newBook.url')
        el-form-item(label='Author')
          el-input(v-model='newBook.author')
        el-form-item    
          el-button(type='submit', icon='plus', @click='addBook') Add

    br
    el-row
      el-table(ref='multipleTable', :data='books', border='', style='width: 100%')
        el-table-column(prop='title',label='Title', width='200')
        el-table-column(prop='author',label='Author', width='280')
        el-table-column(label='Action', width='180')
          template(slot-scope='scope')
            el-tooltip.item(effect='dark', content='Delete', placement='right-start')
              el-button(size='small', type='danger', @click='removeBook(scope.$index, scope.row)', icon='el-icon-delete')

</template>

<script>

import database from '../../core/firebase/database';

let booksRef = database.getRef('books');

export default {
  name: 'hello',

  firebase: {
    books: booksRef
  },

  data () {
    return {
      newBook: {
        title: '',
        author: '',
        url: 'http://'
      }
    }
  },

  methods: {
    addBook: function () {
      booksRef.push(this.newBook)
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.url = 'http://'
    },
    removeBook: function (index, book) {
      booksRef.child(book['.key']).remove()
      toastr.success('Book removed successfully')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
