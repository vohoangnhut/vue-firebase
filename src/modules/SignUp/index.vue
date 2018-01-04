<template lang="pug">
  
  div
    h1 Sign Up
    el-form(:models='newUser',  @submit.native.prevent="signup")
        el-form-item(label='email')
          el-input(v-model='newUser.email', type='email')
        el-form-item(label='password')
          el-input(v-model='newUser.password')
        el-form-item    
          el-button(type='submit', icon='plus', @click='signup') Sign Up
</template>

<script>
import firebase from 'firebase';
export default {
  data () {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    signup: function () {
        firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (error) => {
            alert(error);
          }
        );
    },
  }
}
</script>
